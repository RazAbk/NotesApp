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

async function deleteNote(req: Request, res: Response) {
    try{
        const { noteId } = req.params
        const notes = await notesService.deleteNote(req.session.user._id, noteId)

        res.json(notes)
    }catch(err) {
        console.log('Could not delete note\n')
        console.error(err)
        res.json(null)
    }
}

module.exports = {
    getNotes,
    deleteNote
}