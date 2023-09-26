
import nodemailer from 'nodemailer';

const email = process.env.EMAIL;
const pass = process.env.PASSWORD;

const transporter = nodemailer.createTransport({
  host: 'http://localhost:3000/',
  port: 587,
  secure: false,
  auth: {
    user: email,
    pass,
  },
});

export const sendEmail = async (to, subject, text) => {
  try {
    await transporter.sendMail({
      from: email,
      to: email,
      subject: "Orderded Accepted",
      text: "Your orderded has being accepted, as soon as possible the cleaner will get in touch",
    });
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

