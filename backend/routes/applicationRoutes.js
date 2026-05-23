import express from 'express'
import multer from 'multer'
import sendEmail from '../utils/sendEmail.js'

const router = express.Router()

const storage = multer.memoryStorage()
const upload = multer({ storage })

router.post('/apply', upload.single('resume'), async (req, res) => {

  try {

    const {
      fullName,
      email,
      company,
      role,
      message
    } = req.body

    await sendEmail({
      to: process.env.GMAIL_USER,
      subject: `New Job Application - ${role}`,
      text: `
      Name: ${fullName}
      Email: ${email}
      Company: ${company}
      Role: ${role}

      Message:
      ${message}
      `,
      attachment: {
        filename: req.file.originalname,
        content: req.file.buffer
      }
    })

    res.status(200).json({
      success: true,
      message: 'Application submitted successfully'
    })
    } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    })
  }
})

export default router