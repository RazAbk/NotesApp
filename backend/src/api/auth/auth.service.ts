const bcrypt = require('bcrypt')
const userService = require('../users/users.service')


async function login(userName: string, password: string) {
    const user = await userService.getByUserName(userName)
    if (!user) return Promise.reject('Invalid username or password')
    const match = await bcrypt.compare(password, user.password)
    if (!match) return Promise.reject('Invalid username or password')

    delete user.password
    return user
}

async function signup(userName: string, password:string) {
    const saltRounds = 10
    if (!userName || !password) return Promise.reject('fullname, username and password are required!')

    const isUser = await userService.getByUserName(userName)
    // If user already signedup => Redirects to login
    if (isUser) {
        login(userName, password)
        return
    }

    const hash = await bcrypt.hash(password, saltRounds)
    await userService.addUser(userName, hash)
}

module.exports = {
    signup,
    login,
}