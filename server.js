const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')

const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Get all data',
  })
})

app.post('/api/send-mail', async (req, res) => {
  try {
    const { to, cc, subject, text } = req.body
    const transporter = await nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'sanjeevkumarkushwaha9179@gmail.com',
        pass: '',
      },
    })

    mailOption = {
      from: 'sanjeevkumarkushwaha9179@gmail.com',
      to,
      cc,
      subject,
      html: `<h2>${text}</h1>`,
    }

    await transporter.sendMail(mailOption, (error, info) => {
      if (error) {
        return res.send({ Error: error })
      }
      console.log(`Email sent: ${info.response}`)
      return res.json({
        status: 200,
        response: 'Mail Sent successfully',
        info: info.response,
      })
    })
  } catch (error) {
    console.error('Error sending email:', error)
    res
      .status(500)
      .json({ message: 'An error occurred while sending the email' })
  }
})

app.listen(process.env.PORT, () => {
  console.log(`server is started on port http://localhost:${process.env.PORT}`)
})
