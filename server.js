const fs = require('fs');

const host = "127.0.0.1";
const port = 1337;
const express = require("express");
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey('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');

const msg = {
    to: 'rostyk.haidukov1999@gmail.com',
    from: 'rostyslav.haidukov@live.com',
    subject: 'Huy',
    text: 'huy123',
    html: '<stron>huy suka</strong>'
};

sgMail.send(msg);

const app = express();
app.use(express.static(__dirname + "/public")); //use static files in ROOT/public folder

app.get("*", function(request, response){ //root dir
    response.sendFile('public/index.html');
});


app.listen(port, host);
