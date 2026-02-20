import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
app.use(cors());
app.use(express.json());

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "mmananan779@gmail.com",
    pass: "xfzy njbf cahr hsgb",
  }
});



app.post('/api/send-email', async (req, res) => {
  try {
    console.log("BODY RECEIVED:", req.body);
    const { to, subject, htmlContent, recipientName, type } = req.body;

    let dynamicContent = "";

    // ===============================
    // QUOTE EMAIL TEMPLATE
    // ===============================
    if (type === "quote") {
      dynamicContent = `
        <h3 style="margin-top:0;">New Freight Quote Request</h3>
        <table style="width:100%; border-collapse:collapse;">
          <tr><td><strong>Pickup Location:</strong></td><td>${recipientName.pickup || '-'}</td></tr>
          <tr><td><strong>Delivery Location:</strong></td><td>${recipientName.delivery || '-'}</td></tr>
          <tr><td><strong>Trailer Type:</strong></td><td>${recipientName.trailer || '-'}</td></tr>
          <tr><td><strong>Weight:</strong></td><td>${recipientName.weight || '-'}</td></tr>
          <tr><td><strong>Commodity:</strong></td><td>${recipientName.commodity || '-'}</td></tr>
          <tr><td><strong>Pickup Date:</strong></td><td>${recipientName.pickupDate || '-'}</td></tr>
          <tr><td><strong>Email:</strong></td><td>${recipientName.email || '-'}</td></tr>
          <tr><td><strong>Phone:</strong></td><td>${recipientName.phone || '-'}</td></tr>
        </table>
      `;
    }

    // ===============================
    // CARRIER EMAIL TEMPLATE
    // ===============================
    else if (type === "carrier") {
      dynamicContent = `
        <h3 style="margin-top:0;">New Freight Carrier Request</h3>
        <table style="width:100%; border-collapse:collapse;">
          <tr><td><strong>Company Name:</strong></td><td>${recipientName.companyName || '-'}</td></tr>
          <tr><td><strong>Contact Name:</strong></td><td>${recipientName.contactName || '-'}</td></tr>
          <tr><td><strong>MC Number:</strong></td><td>${recipientName.mcNumber || '-'}</td></tr>
          <tr><td><strong>DOT Number:</strong></td><td>${recipientName.dotNumber || '-'}</td></tr>
         
          <tr><td><strong>Lanes:</strong></td><td>${recipientName.lanes || '-'}</td></tr>
          <tr><td><strong>Email:</strong></td><td>${recipientName.email || '-'}</td></tr>
          <tr><td><strong>Phone:</strong></td><td>${recipientName.phone || '-'}</td></tr>
          <tr><td><strong>W9 Document:</strong></td><td>${recipientName.documents?.w9 || '-'}</td></tr>
          <tr><td><strong>Insurance Document:</strong></td><td>${recipientName.documents?.insurance || '-'}</td></tr>
        </table>
      `;
    }

    const mailOptions = {
      from: `"CLE FREIGHT LLC" <clefreight@outlook.com>`,
      to,
      subject,
      html: `
      <div style="font-family: Arial, sans-serif; background:#f4f6f8; padding:30px;">
        <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:8px; overflow:hidden;">

          <!-- Header -->
          <div style="background:#133866; color:#ffffff; padding:20px; text-align:center;">
            <h2 style="margin:0;">CLE FREIGHT LLC</h2>
            <p style="margin:5px 0 0; font-size:14px;">
              Freight Brokerage | Dry Van & Reefer
            </p>
          </div>

          <!-- Body -->
          <div style="padding:25px; color:#333;">
            ${dynamicContent}

            <div style="margin-top:20px;">
              ${htmlContent}
            </div>
          </div>

          <!-- Footer -->
          <div style="background:#f0f0f0; padding:15px; font-size:12px; text-align:center;">
            <p style="margin:0;">
              CLE FREIGHT LLC • Louisville, KY <br/>
              MC# 1775717 | DOT# 4491865
            </p>
          </div>

        </div>
      </div>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    res.json({ success: true, data: info });

  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
