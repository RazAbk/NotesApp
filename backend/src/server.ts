require('dotenv').config()

import express from 'express'

const app = express()

app.use(express.json())

const PORT = '3030'

app.get('/**', (req, res) => {
    res.status(200).send('hello server!')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
    
})