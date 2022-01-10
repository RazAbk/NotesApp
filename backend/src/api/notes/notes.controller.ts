import { Request, Response } from "express"
const notesService = require('./notes.service')

async function getNotes(req: Request, res: Response) {
    try{
        const notes = await notesService.getNotesById(req.session.user._id)
        res.json(notes)
    }catch(err) {
        console.log('Could not get notes\n')
        console.error(err)
        res.json(null)
    }
}

module.exports = {
    getNotes
}