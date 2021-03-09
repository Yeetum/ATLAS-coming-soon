/* eslint-disable no-alert, no-console */
const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');

const app = express()

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

app.use(bodyParser.json())
app.post('/', (req, res) => {
    const msg = {
        to: req.body.email, // Change to your recipient
        from: '', // Change to your verified sender
        subject: 'Message from ATLAS COMING SOON ',
        text: 'Success!',
    }
    sgMail.send(msg).then(() => {
            return res.status(200).json({ 'message': 'Email sent!' })
        }).catch((error) => {
            return res.status(400).json({ 'error': 'Opsss... Something went wrong ' + error })
        })
});

module.exports = {
    path: "/api/v1/send-email",
    handler: app
};