

module.exports = {
    getById
}

async function getById(userId: string) {
    try {
        const connection = await require('../../services/db.service')
        const db = await connection

        const user = db.get(`SELECT * FROM users WHERE _id = "${userId}"`)
        delete user.password

        return user
    } catch (err) {
        console.log('Could not get user by id\n')
        console.error(err)
    }
}