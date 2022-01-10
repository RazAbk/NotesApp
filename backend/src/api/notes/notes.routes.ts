import express from 'express'
const { getNotes } = require('./notes.controller')
const { requireAuth } = require('../../middlewares/auth.middleware')


const notesRouter = express.Router()

notesRouter.get('/', getNotes)

module.exports = notesRouter