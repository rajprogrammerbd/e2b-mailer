import express from 'express';
import emailServices from '../services/email.services';
import { RequestEmailSendBodyType } from '../utils/types';

async function sendEmail(req: express.Request, res: express.Response) {
    const { to, title, html, text } = req.body;
    if ( to !== undefined && title !== undefined && (html !== undefined || text !== undefined) ) {

        const body = { to, title } as RequestEmailSendBodyType;

        (html !== undefined) ? body.html = html : null;
        (text !== undefined) ? body.text = text : null;

        try {
            res.send(await emailServices.sendEmails(body));
        } catch (err: any) {
            throw new Error(err);
        }
    } else res.status(404).send({ message: 'Request body is required' });
}

export default {
    sendEmail,
};
