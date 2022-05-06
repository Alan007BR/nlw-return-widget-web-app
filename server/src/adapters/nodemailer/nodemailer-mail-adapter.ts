import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "339348968eb5ac",
        pass: "d6c9d60f1609e9"
    }
});


export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {

        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Alan <alanoliveira123bit@gmail.com>',
            subject,
            html: body,
        });
    }
}