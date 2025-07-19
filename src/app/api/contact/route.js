import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'amanullahnaqvi@gmail.com',        // replace with your sending Gmail
      pass: 'ewtu zxnf otsr cier',           // use Gmail App Password (not your actual Gmail password)
    },
  });

  const mailOptions = {
    from: email,
    to: 'amanullahnaqvi@gmail.com',
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false, error }), { status: 500 });
  }
}
