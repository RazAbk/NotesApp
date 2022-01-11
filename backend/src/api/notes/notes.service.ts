import { INote } from "../../interfaces/dataInterfaces"
const { v4: uuid } = require('uuid');

module.exports = {
    getNotesById,
    addNote,
    deleteNote
}
async function getNotesById(userId: string) {
    try {
        const connection = await require('../../services/db.service')
        const db = await connection

        const notes = await db.all(`SELECT * FROM notes WHERE userId = "${userId}"`)
        return notes
    } catch (err) {
        console.log('Could not get notes\n', err)
        console.error(err)
        return null
    }
}

async function addNote(userId: string, note: INote) {
    try {
        const connection = await require('../../services/db.service')
        const db = await connection

        if(!note._id){
            await db.run(`INSERT INTO notes(_id, userId, title, body) VALUES("${uuid()}", "${userId}", "${note.title}", "${note.body}")`)
        } else {
            await db.run(`UPDATE notes SET title="${note.title}", body="${note.body}" WHERE _id="${note._id}"`)
        }

        const notes = await db.all(`SELECT * FROM notes WHERE userId = "${userId}"`)
        return notes
    } catch (err) {
        console.log('Could not add note\n', err)
        console.error(err)
        return null
    }
}

async function deleteNote(userId: string, noteId: string) {
    try {
        const connection = await require('../../services/db.service')
        const db = await connection

        await db.run(`DELETE FROM notes WHERE _id = "${noteId}"`)
        const notes = await db.all(`SELECT * FROM notes WHERE userId = "${userId}"`)
        return notes
    } catch (err) {
        console.log('Could not delete note\n', err)
        console.error(err)
        return null
    }
}
