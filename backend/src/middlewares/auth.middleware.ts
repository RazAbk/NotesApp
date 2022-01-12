import { Request, Response, NextFunction } from "express";

async function requireAuth(req: Request, res: Response, next: NextFunction) {
    if (!req.session || !req.session.user) {
        res.status(401).end('Not authenticated, Please Login')
        return
    }
    next()
}

module.exports = {
    requireAuth
}