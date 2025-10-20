import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  host: 'smtpdm-eu-central-1.aliyuncs.com', // Mailgun SMTP host
  port: 465,                   // SSL/TLS port
  secure: true,                // Use TLS
  auth: {
    user: 'portal@mx4.gtcmail.com', // Mailgun SMTP username
    pass: 'Ab3Cde4FgH', // Mailgun SMTP password
  },
});

export const mailOptions = {
    from: "portal@mx4.gtcmail.com",
    to:"zeeshan@gtcfx.com",  
    bcc: 'mohammad.zeeshan@gtcfx.com',
}