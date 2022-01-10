import express from 'express'
require('dotenv').config()
const expressSession = require('express-session')

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

// Routes goes here!


app.get('/**', async (req, res) => {
    // const db = await connection
    // await db.all('INSERT INTO users (_id, user_name, first_name, last_name, password) VALUES("a101", "RazAb", "raz", "ab", "1234")') 
    // const result = await db.all('SELECT * FROM users')
    // console.log(result)
    
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