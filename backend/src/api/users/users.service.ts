const { v4: uuid } = require('uuid');

module.exports = {
    getById,
    getByUserName,
    addUser
}

async function getById(userId: string) {
    try {
        const connection = await require('../../services/db.service')
        const db = await connection
        
        const user = await db.get(`SELECT * FROM users WHERE _id = "${userId}"`)
        delete user.password
        
        return user
    } catch (err) {
        console.log('Could not get user by id\n')
        console.error(err)
    }
}

async function getByUserName(userName: string) {
    try{
        const connection = await require('../../services/db.service')
        const db = await connection
        
        const user = await db.get(`SELECT * FROM users WHERE user_name = "${userName}"`)
        
        return user
    } catch(err) {
        console.log('Could not get user by userName\n')
        console.error(err)
    }
}

async function addUser(userName: string, password: string) {
    try{
        const connection = await require('../../services/db.service')
        const db = await connection

        await db.run(`INSERT INTO users(_id, user_name, password) VALUES("${uuid()}", "${userName}", "${password}")`)
    } catch(err){
        console.log('Could not add user\n')
        console.error(err)
    }
}