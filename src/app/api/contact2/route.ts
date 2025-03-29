// pages/api/contact2.ts

import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { fullName, phoneNumber, email } = req.body;

  if (!fullName || !phoneNumber || !email) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Configure the transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email password or app password
    },
  });

  try {
    // Send the email
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'bhupesh7750@gmail.com', // Replace with your email
      subject: 'New Contact Form Submission for agentic ai',
      text: `Name: ${fullName}\nPhone: ${phoneNumber}\nEmail: ${email}`,
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
}