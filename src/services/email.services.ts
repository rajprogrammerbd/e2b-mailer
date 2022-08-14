import { RequestEmailSendBodyType } from '../utils/types';
import nodemailer from 'nodemailer';
import logger from '../middlewares/winston';

interface OptionsType {
    from: string;
    to: string;
    subject: string;
    html?: string;
    text?: string;
}

function sendEmails(body: RequestEmailSendBodyType): Promise<any> {
    const { to, title, html, text } = body;

    return new Promise((resolve, reject) => {
        const transporter = nodemailer.createTransport({
            service : 'hotmail',
            auth : {
                user: process.env.USER_MAIL,
                pass: process.env.USER_PASSWORD
            }
        });

        const options = {
            from : process.env.USER_MAIL, 
            to: to, 
            subject: title,
        } as OptionsType;

        (html !== undefined) ? options.html = html : null;
        (text !== undefined) ? options.text = text : null;
    
        const res = transporter.sendMail(options);
        res.then(() => resolve(`Email has been successfully send to ${to}`)).catch(err => {
            logger.error(err);
            reject(`Failed to send an email to ${to}`);
        });
    });



    return Promise.resolve({ message: 'Hello' });
}
  
export default {
  sendEmails,
};
  