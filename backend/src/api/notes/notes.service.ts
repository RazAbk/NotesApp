async function getNotesById(userId: string) {
    try {
        const connection = await require('../../services/db.service')
        const db = await connection

        const notes = db.all(`SELECT * FROM notes WHERE userId = "${userId}"`)
        return notes
    } catch (err) {
        console.log('Could not get notes\n', err)
        console.error(err)
        return null
    }
}

module.exports = {
    getNotesById
}