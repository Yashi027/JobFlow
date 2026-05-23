import nodemailer from 'nodemailer';

const sendEmail = async ({
    to,
    subject,
    text,
    attachment
}) => {

    const transporter = nodemailer.createTransport({

        service: 'gmail',

        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
        }
    });

    const mailOptions = {

        from: process.env.GMAIL_USER,

        to,

        subject,

        text,

        attachments: attachment
            ? [attachment]
            : []
    };

    await transporter.sendMail(mailOptions);
};

export default sendEmail;