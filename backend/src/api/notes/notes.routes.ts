import express from 'express'
const { getNotes, deleteNote } = require('./notes.controller')
const { requireAuth } = require('../../middlewares/auth.middleware')


const notesRouter = express.Router()

// require(requireAuth)

notesRouter.get('/', getNotes)
notesRouter.delete('/:noteId', deleteNote)


module.exports = notesRouter