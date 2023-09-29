('use strict');
const nodemailer = require('nodemailer');

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass,
  },
});

const mailOptions = {
  from: email,
  to: 'gantkiewicz97@gmail.com',
  subject: 'Subject',
  text: 'Email content',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
    // do something useful
  }
});
