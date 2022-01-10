import { Request, Response } from "express"
const userService = require('./users.service')

async function getUser(req: Request, res: Response) {
    try{
        const user = await userService.getById(req.session.user._id)
        res.json(user)
    }catch(err) {
        console.log('Could not get user\n')
        console.error(err)
        res.json(null)
    }
}

module.exports = {
    getUser
}