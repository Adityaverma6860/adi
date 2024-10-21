const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { name, phone, communication, time, message } = req.body;

  // Create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-gmail-account@gmail.com',
      pass: 'your-gmail-password'
    }
  });

  // Define email options
  const mailOptions = {
    from: 'ayushsaini4468@gmail.com',
    to: 'avdheshavdesh@abroad.agency',
    subject: 'New form submission',
    text: `
      Name: ${name}
      Phone: ${phone}
      Communication: ${communication}
      Time: ${time}
      Message: ${message}
    `
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
