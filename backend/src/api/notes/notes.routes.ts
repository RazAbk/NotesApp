import express from 'express'
const { getNotes, addNote, deleteNote } = require('./notes.controller')
const { requireAuth } = require('../../middlewares/auth.middleware')


const notesRouter = express.Router()

// require(requireAuth)

notesRouter.get('/', getNotes)
notesRouter.post('/', addNote)
notesRouter.delete('/:noteId', deleteNote)


module.exports = notesRouter