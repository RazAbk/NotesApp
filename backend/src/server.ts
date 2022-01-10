require('dotenv').config()

import express from 'express'

const app = express()

app.use(express.json())

const PORT = '3030'

const connection = require('./services/db.service')

app.get('/**', async (req, res) => {
    // const db = await connection
    // await db.all('INSERT INTO users (_id, user_name, first_name, last_name, password) VALUES("a101", "RazAb", "raz", "ab", "1234")') 
    // const result = await db.all('SELECT * FROM users')
    // console.log(result)
    res.status(200).send('hello server!')
});

(async () => {
    const db = await connection
    await db.migrate()

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`); 
    })
})();
