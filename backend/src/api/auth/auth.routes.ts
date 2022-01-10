import express from 'express'
const { login, signup, logout } = require('./auth.controller')

const authRouter = express.Router()

authRouter.post('/login', login)
authRouter.post('/signup', signup)
authRouter.post('/logout', logout)

module.exports = authRouter