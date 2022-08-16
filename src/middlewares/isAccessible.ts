import express from 'express';
require('dotenv').config();

function isAccessible(req: express.Request, res: express.Response, next: express.NextFunction) {
            if (req.headers.authorization === process.env.AUTHORIZATION_CODE) {
                req.isAccessible = true;
            }else {
            req.isAccessible = false;
            res.status(401).json({ message: "You don't have permission to access it." });
        }

        next();
}

export default isAccessible;
