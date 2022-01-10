import express from 'express'
const { getUser } = require('./users.controller')

const userRoutes = express.Router()

userRoutes.get('/user', getUser)

module.exports = userRoutes