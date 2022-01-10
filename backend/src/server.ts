import express from 'express'
import { IUser } from './interfaces/userInterfaces'
require('dotenv').config()
const expressSession = require('express-session')

// Expand the Request object data types
declare global {
    namespace Express {
        interface Request {
            dbConnection: Promise<any>
        }
    }
}

// Expand the express-session data types
declare module 'express-session' {
    interface SessionData {
        user: IUser
    }
}

const cors = require('cors')
const path = require('path')

const app = express()

const session = expressSession({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
})

app.use(express.json())
app.use(session)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')))
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:3000', 'http://localhost:3000', 'http://10.100.102.21:3000/'],
        methods: ['GET', 'POST', 'DELETE', 'PUT'],
        credentials: true
    }
    app.use(cors(corsOptions))
}

const connection = require('./services/db.service')

const authRoutes = require('./api/auth/auth.routes')
const usersRoutes = require('./api/users/users.routes')
const notesRoutes = require('./api/notes/notes.routes')

// API Routes
app.use('/api/auth', authRoutes)
app.use('/api/user', usersRoutes)
app.use('/api/note', notesRoutes)


app.get('/**', async (req, res) => {
    // Todo: serve index.html file
    res.status(200).send('hello server!')
});

const PORT = process.env.PORT || 3030;

(async () => {
    const db = await connection
    await db.migrate()

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
    })
})();
