const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
require('cors')({origin: true});

const gmailEmail = functions.config().gmail.login;
const gmailPassword = functions.config().gmail.pass;

exports.sendEmail = functions.https.onCall((data) => {
    const { name, email, phone, message } = data;
    console.log(data);
    const MailTransport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: gmailEmail,
            pass: gmailPassword
        }
    });

    return MailTransport.sendMail({
        from: email,
        to: 'rostyslav.haidukov@live.com',
        subject: `Cleaning Service ${name} ${phone} <${email}`,
        html: `<div>${message}</div>`
    });
});


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
