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


module.exports = {
    getNotesById,
    deleteNote
}