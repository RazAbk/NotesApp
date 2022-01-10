import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

const path = require('path')

const connection = open({
    filename: path.resolve(__dirname, '../database/notes_db.db'),
    driver: sqlite3.Database
})


module.exports = connection;