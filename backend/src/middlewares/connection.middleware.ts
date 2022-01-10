import { Request, Response, NextFunction } from "express";

async function connectDB(req: Request, res: Response, next: NextFunction) {
    const connection = require('../services/db.service')
    const db = await connection

    req.dbConnection = db
    next()
}

module.exports = connectDB