var mailer = require('nodemailer');
var transport = mailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'chandrab@observancegroup.com',
        pass: ''
    }
});

var mailoption = {
    from: 'chandrab@observancegroup.com',
    to: 'chandrab@observancegroup.com',
    subject: 'Testing Mail',
    text: "Your are get 'Demo Mail'"
}

transport.sendMail(mailoption, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log("Mail Success Full Send");
    }
})