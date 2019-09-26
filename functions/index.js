const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail');

require('dotenv').config();
require('cors')({origin: true});

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.sendEmail = functions.https.onCall(async (data) => {
    const { name, email, phone, message } = data;
    const msg = {
        to: process.env.RECEIVER_EMAIL,
        from: email,
        subject: `Cleaning Service: ${name} - ${email} - ${phone}`,
        text: message
    };
    await sgMail.send(msg);
});