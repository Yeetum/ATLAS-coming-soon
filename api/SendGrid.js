// prettier-ignore
// eslint-disable
import express from 'express'
const app = express()

const SendGrid = {
    url: ''
    apiKey: process.env.SENDGRID_API_KEY
}

app.put('/', (req, res) => {

})

export default {
    path: '/sendGrid',
    handler: app
}