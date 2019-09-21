const fs = require('fs');

const host = "127.0.0.1";
const port = 1337;
const express = require("express");
const nodemailer = require('nodemailer');

const app = express();
app.use(express.static(__dirname + "/public")); //use static files in ROOT/public folder

app.get("*", function(request, response){ //root dir
    response.sendFile('public/index.html');
});

const sendEmail = async () => {
    const MailTransport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'rostyk.haidukov1999@gmail.com',
            pass: 'Ro$tyslav99'
        }
    });

    return await MailTransport.sendMail({
        from: 'dasd@gmail.com',
        to: 'rostyslav.haidukov@live.com',
        subject: `Cleaning Service`,
        html: `<div>d</div>`
    });
};

sendEmail().then(() => {
    console.log('success');
}).catch(error => {
    console.log(error);
})

app.listen(port, host);
