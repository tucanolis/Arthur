// npm install nodemailer
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'smtp@gmail.com',
    porta: 587,
    auth: {
        user: 'your-email@gmail.com',
        // seu email pessoal
        pass: 'your-password'
        // senha 
    }
});

let mailOptions = {
    from: 'your-email@gmail.com',
    // novamente seu email pessoal
    to: 'recipient@example.com',
    // email que vai receber a mensagem
    subject: 'Test Email',
    // assunto do email
    text: 'This is a test email sent using Nodemailer.'
    // texto, foto etc.
};

//enviar email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error occurred:', error);
    } else {
        console.log('Email sent successfully:', info.response);
    }
});
