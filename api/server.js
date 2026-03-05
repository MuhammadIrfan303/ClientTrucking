import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

import dotenv from 'dotenv';  // Add this line

dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NEXT_AUTHUSER,
    pass: process.env.NEXT_AUTHPASS,
  }
});

app.get("/", (req, res) => {
  res.send("API Running Successfully 🚀");
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
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1);"> 
      <!-- Content -->
      <div style="padding: 25px 20px; background-color: #f9f9f9;">
        
        <!-- Quote Details Section -->
        <h4 style="color: #133866; margin: 0 0 15px; border-bottom: 2px solid #4372ac; padding-bottom: 8px;">
          📋 Shipment Details
        </h4>
        
        <table style="width:100%; border-collapse:collapse; background-color: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          
          <!-- Pickup Location -->
          <tr style="border-bottom: 1px solid #e0e0e0;">
            <td style="padding: 15px; background-color: #f0f0f0; font-weight: bold; width: 40%;">
              <span style="display: flex; align-items: center; gap: 5px;">
                <span style="font-size: 18px;">📤</span> Pickup Location:
              </span>
            </td>
            <td style="padding: 15px; background-color: white;">
              <strong style="color: #133866;">${recipientName.pickup || '-'}</strong>
              <br>
              <small style="color: #666;">Origin</small>
            </td>
          </tr>
          
          <!-- Delivery Location -->
          <tr style="border-bottom: 1px solid #e0e0e0;">
            <td style="padding: 15px; background-color: #f0f0f0; font-weight: bold;">
              <span style="display: flex; align-items: center; gap: 5px;">
                <span style="font-size: 18px;">📥</span> Delivery Location:
              </span>
            </td>
            <td style="padding: 15px; background-color: white;">
              <strong style="color: #133866;">${recipientName.delivery || '-'}</strong>
              <br>
              <small style="color: #666;">Destination</small>
            </td>
          </tr>
          
          <!-- Trailer Type -->
          <tr style="border-bottom: 1px solid #e0e0e0;">
            <td style="padding: 15px; background-color: #f0f0f0; font-weight: bold;">
              <span style="display: flex; align-items: center; gap: 5px;">
                <span style="font-size: 18px;">🚛</span> Trailer Type:
              </span>
            </td>
            <td style="padding: 15px; background-color: white;">
              <span style="background-color: #e8f0fe; color: #133866; padding: 5px 10px; border-radius: 4px; font-weight: 500;">
                ${recipientName.trailer || '-'}
              </span>
            </td>
          </tr>
          
          <!-- Weight -->
          <tr style="border-bottom: 1px solid #e0e0e0;">
            <td style="padding: 15px; background-color: #f0f0f0; font-weight: bold;">
              <span style="display: flex; align-items: center; gap: 5px;">
                <span style="font-size: 18px;">⚖️</span> Weight:
              </span>
            </td>
            <td style="padding: 15px; background-color: white;">
              <strong>${recipientName.weight || '-'}</strong> lbs
            </td>
          </tr>
          
          <!-- Commodity -->
          <tr style="border-bottom: 1px solid #e0e0e0;">
            <td style="padding: 15px; background-color: #f0f0f0; font-weight: bold;">
              <span style="display: flex; align-items: center; gap: 5px;">
                <span style="font-size: 18px;">📦</span> Commodity:
              </span>
            </td>
            <td style="padding: 15px; background-color: white;">
              ${recipientName.commodity || '-'}
            </td>
          </tr>
          
          <!-- Pickup Date -->
          <tr style="border-bottom: 1px solid #e0e0e0;">
            <td style="padding: 15px; background-color: #f0f0f0; font-weight: bold;">
              <span style="display: flex; align-items: center; gap: 5px;">
                <span style="font-size: 18px;">📅</span> Pickup Date:
              </span>
            </td>
            <td style="padding: 15px; background-color: white;">
              <strong style="color: #4372ac;">${recipientName.pickupDate || '-'}</strong>
            </td>
          </tr>
        </table>
        
        <!-- Contact Information Section -->
        <h4 style="color: #133866; margin: 25px 0 15px; border-bottom: 2px solid #4372ac; padding-bottom: 8px;">
          📞 Contact Information
        </h4>
        
        <table style="width:100%; border-collapse:collapse; background-color: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          
          <!-- Email - Clickable -->
          <tr style="border-bottom: 1px solid #e0e0e0;">
            <td style="padding: 15px; background-color: #f0f0f0; font-weight: bold; width: 40%;">
              <span style="display: flex; align-items: center; gap: 5px;">
                <span style="font-size: 18px;">📧</span> Email:
              </span>
            </td>
            <td style="padding: 15px; background-color: white;">
              ${recipientName.email ?
          `<a href="mailto:${recipientName.email}?subject=Quote%20Inquiry%20-%20${recipientName.pickup || 'Freight'}%20to%20${recipientName.delivery || 'Destination'}" 
                      style="color: #4372ac; text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 8px;">
                  <span style="background-color: #e8f0fe; padding: 5px 10px; border-radius: 4px;">
                    ${recipientName.email}
                  </span>
                </a>
                <br>
                <small style="color: #666;">Click to send email</small>`
          : '-'
        }
            </td>
          </tr>
          
          <!-- Phone - Clickable -->
          <tr style="border-bottom: 1px solid #e0e0e0;">
            <td style="padding: 15px; background-color: #f0f0f0; font-weight: bold;">
              <span style="display: flex; align-items: center; gap: 5px;">
                <span style="font-size: 18px;">📞</span> Phone:
              </span>
            </td>
            <td style="padding: 15px; background-color: white;">
              ${recipientName.phone ?
          `<a href="tel:${recipientName.phone}" 
                      style="color: #4372ac; text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 8px;">
                  <span style="background-color: #e8f0fe; padding: 5px 10px; border-radius: 4px;">
                    ${recipientName.phone}
                  </span>
                </a>
                <br>
                <small style="color: #666;">Click to call</small>`
          : '-'
        }
            </td>
          </tr>
        </table>
        
        <!-- Quick Actions -->
        <div style="margin-top: 30px; text-align: center; padding: 20px; background-color: #e8f0fe; border-radius: 8px;">
          <p style="margin-bottom: 15px; color: #133866; font-weight: bold; font-size: 16px;">
            ⚡ Quick Actions
          </p>
          
          <div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
            ${recipientName.email ?
          `<a href="mailto:${recipientName.email}?subject=Quote%20Response%20-%20${recipientName.pickup || 'Your'}%20Freight%20Quote" 
                    style="display: inline-block; background-color: #133866; color: white; padding: 12px 24px; 
                           border-radius: 6px; text-decoration: none; margin: 5px; font-weight: 500;">
                📧 Respond to Quote
              </a>`
          : ''
        }
            
            ${recipientName.phone ?
          `<a href="tel:${recipientName.phone}" 
                    style="display: inline-block; background-color: #4372ac; color: white; padding: 12px 24px; 
                           border-radius: 6px; text-decoration: none; margin: 5px; font-weight: 500;">
                📞 Call Customer
              </a>`
          : ''
        }
            
            
          </div>
        </div>
        
        
        <!-- Urgency Badge -->
        <div style="margin-top: 20px; padding: 10px; background-color: #fff3cd; border: 1px solid #ffeeba; border-radius: 4px; text-align: center;">
          <span style="color: #856404; font-size: 14px;">
            ⏰ Please respond within 30 minutes to secure this load
          </span>
        </div>
        
      </div>
    </div>
  `;
    }

    // ===============================
    // CARRIER EMAIL TEMPLATE
    // ===============================
    else if (type === "carrier") {
      dynamicContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h3 style="margin-top:0; color: #133866; border-bottom: 2px solid #4372ac; padding-bottom: 10px;">
        New Freight Carrier Request
      </h3>
      
      <table style="width:100%; border-collapse:collapse; background-color: #f9f9f9;">
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 12px; background-color: #133866; color: white; font-weight: bold; width: 40%;">
            Company Name:
          </td>
          <td style="padding: 12px; background-color: white;">
            ${recipientName.companyName || '-'}
          </td>
        </tr>
        
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 12px; background-color: #f0f0f0; font-weight: bold;">
            Contact Name:
          </td>
          <td style="padding: 12px; background-color: white;">
            ${recipientName.contactName || '-'}
          </td>
        </tr>
        
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 12px; background-color: #f0f0f0; font-weight: bold;">
            MC Number:
          </td>
          <td style="padding: 12px; background-color: white;">
            ${recipientName.mcNumber || '-'}
          </td>
        </tr>
        
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 12px; background-color: #f0f0f0; font-weight: bold;">
            DOT Number:
          </td>
          <td style="padding: 12px; background-color: white;">
            ${recipientName.dotNumber || '-'}
          </td>
        </tr>
        
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 12px; background-color: #f0f0f0; font-weight: bold;">
            Lanes:
          </td>
          <td style="padding: 12px; background-color: white;">
            ${recipientName.lanes || '-'}
          </td>
        </tr>
        
        <!-- Clickable Email -->
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 12px; background-color: #f0f0f0; font-weight: bold;">
            Email:
          </td>
          <td style="padding: 12px; background-color: white;">
            ${recipientName.email ?
          `<a href="mailto:${recipientName.email}?subject=Carrier%20Application%20Inquiry" 
                    style="color: #4372ac; text-decoration: none; display: inline-flex; align-items: center; gap: 5px;">
                <span style="font-size: 16px;">📧</span> ${recipientName.email}
              </a>
              <br>
              <small style="color: #666;">(Click to email)</small>`
          : '-'
        }
          </td>
        </tr>
        
        <!-- Clickable Phone -->
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 12px; background-color: #f0f0f0; font-weight: bold;">
            Phone:
          </td>
          <td style="padding: 12px; background-color: white;">
            ${recipientName.phone ?
          `<a href="tel:${recipientName.phone}" 
                    style="color: #4372ac; text-decoration: none; display: inline-flex; align-items: center; gap: 5px;">
                <span style="font-size: 16px;">📞</span> ${recipientName.phone}
              </a>
              <br>
              <small style="color: #666;">(Click to call)</small>`
          : '-'
        }
          </td>
        </tr>
        
        <!-- Clickable W9 Document -->
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 12px; background-color: #f0f0f0; font-weight: bold;">
            W9 Document:
          </td>
          <td style="padding: 12px; background-color: white;">
            ${recipientName.documents?.w9 ?
          `<a href="${recipientName.documents.w9}" 
                    target="_blank"
                    style="display: inline-block; background-color: #4372ac; color: white; padding: 8px 15px; 
                           border-radius: 4px; text-decoration: none; margin: 5px 0;">
                <span style="font-size: 16px; margin-right: 5px;">📄</span> Download W9 Document
              </a>
              <br>
              <small style="color: #666;">
                <a href="${recipientName.documents.w9}" 
                   style="color: #666; text-decoration: underline; font-size: 11px;">
                  ${recipientName.documents.w9.substring(0, 50)}...
                </a>
              </small>`
          : '-'
        }
          </td>
        </tr>
        
        <!-- Clickable Insurance Document -->
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 12px; background-color: #f0f0f0; font-weight: bold;">
            Insurance Document:
          </td>
          <td style="padding: 12px; background-color: white;">
            ${recipientName.documents?.insurance ?
          `<a href="${recipientName.documents.insurance}" 
                    target="_blank"
                    style="display: inline-block; background-color: #4372ac; color: white; padding: 8px 15px; 
                           border-radius: 4px; text-decoration: none; margin: 5px 0;">
                <span style="font-size: 16px; margin-right: 5px;">📄</span> Download Insurance Document
              </a>
              <br>
              <small style="color: #666;">
                <a href="${recipientName.documents.insurance}" 
                   style="color: #666; text-decoration: underline; font-size: 11px;">
                  ${recipientName.documents.insurance.substring(0, 50)}...
                </a>
              </small>`
          : '-'
        }
          </td>
        </tr>
        
        <!-- Clickable MC Authority Document -->
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 12px; background-color: #f0f0f0; font-weight: bold;">
             Signed Carrier Agreement:
          </td>
          <td style="padding: 12px; background-color: white;">
            ${recipientName.documents?.carrierAgreement ?
          `<a href="${recipientName.documents.carrierAgreement}" 
                    target="_blank"
                    style="display: inline-block; background-color: #4372ac; color: white; padding: 8px 15px; 
                           border-radius: 4px; text-decoration: none; margin: 5px 0;">
                <span style="font-size: 16px; margin-right: 5px;">📄</span> Download Signed Carrier Agreement
              </a>
              <br>
              <small style="color: #666;">
                <a href="${recipientName.documents.carrierAgreement}" 
                   style="color: #666; text-decoration: underline; font-size: 11px;">
                  ${recipientName.documents.carrierAgreement.substring(0, 50)}...
                </a>
              </small>`
          : '-'
        }
          </td>
        </tr>
      </table>
      
      <!-- Action Buttons -->
      <div style="margin-top: 30px; text-align: center; padding: 20px; background-color: #f0f0f0; border-radius: 8px;">
        <p style="margin-bottom: 15px; color: #133866; font-weight: bold;">
          Quick Actions:
        </p>
        
        ${recipientName.email ?
          `<a href="mailto:${recipientName.email}" 
                style="display: inline-block; background-color: #133866; color: white; padding: 10px 20px; 
                       border-radius: 5px; text-decoration: none; margin: 0 5px;">
            📧 Reply to Applicant
          </a>`
          : ''
        }
        
        ${recipientName.phone ?
          `<a href="tel:${recipientName.phone}" 
                style="display: inline-block; background-color: #4372ac; color: white; padding: 10px 20px; 
                       border-radius: 5px; text-decoration: none; margin: 0 5px;">
            📞 Call Applicant
          </a>`
          : ''
        }
      </div>
      
       
    </div>
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

// REPLACE them with:
export default app;

// Keep this for local development
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
