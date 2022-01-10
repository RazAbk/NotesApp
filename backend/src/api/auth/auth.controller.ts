import { Request, Response } from "express";
const authService = require('./auth.service')

async function signup(req: Request, res: Response) {
    try {
        const { userName, password } = req.body

        const connection = await require('../../services/db.service')
        const db = await connection

        const usersFound = await db.all(`SELECT user_name FROM users WHERE user_name = "${userName}"`)

        if (usersFound.length > 0) {
            res.status(500).send('username is taken')
        } else {
            await authService.signup(userName, password)
            const user = await authService.login(userName, password)

            if (!user) res.send(null)

            req.session.user = user
            res.json(user)
        }
    } catch (err) {
        console.log('Could not signup\n')
        console.error(err)
        res.json(null)
    }
}

async function login(req: Request, res: Response) {
    try {
        const { userName, password } = req.body

        const user = await authService.login(userName, password)

        if (!user) res.json(null)

        req.session.user = user
        res.json(user)
    } catch (err) {
        console.error('Could not login\n')
        console.error(err)
        res.json(null)
    }
}

async function logout(req: Request, res: Response) {
    try {
        req.session.destroy((err) => {
            if (err) {
                res.status(500).send(null)
            } else {
                res.status(200).send()
            }
        })
    } catch (err) {
        console.error('Could not logout\n')
        console.error(err)
        res.status(500).send(null)
    }
}

module.exports = {
    signup,
    login,
    logout
}