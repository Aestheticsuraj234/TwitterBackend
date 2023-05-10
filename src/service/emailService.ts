import { createTransport, Transporter } from "nodemailer";

export const sendMail = async (email: string, token: string) => {
  const transportOptions = {
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT), // Make sure to convert the port value to a number
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  };

  const transport: Transporter = createTransport(transportOptions);

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: email,
    subject: 'Email verification',
    text: `Your one-time password: ${token}`,
  };

  await transport.sendMail(mailOptions);
};
