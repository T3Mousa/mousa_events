const express = require('express');
const { validateContactUs } = require('./validators');
const nodemailer = require('nodemailer')
const { USER, PASS } = require('../../config')

const router = express.Router();

// send message to business
router.get('/', async (req, res) => {
    res.status(200).send("Welcome to the app!")
})

router.post('/', async (req, res) => {
    const { name, email, phone, message } = req.body;

    // Create a transporter using SMTP transport
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secureConnection: true,
        auth: {
            user: USER,
            pass: PASS
        }
    });

    // Email message configuration
    const mailOptions = {
        from: email,
        to: USER, // Change to your business email address
        subject: 'New Inquiry Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    };

    // Send email
    await transporter.sendMail(mailOptions, (error, info) => {
        // console.log(info)
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

module.exports = router;
