const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer'); // For sending emails

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));


// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile('C:\\ServiceWareSite\\test.html');
});

// POST route to handle form submission
app.post('/send-email', async (req, res) => {
    const { email, message } = req.body;

    // Configure your email service (e.g., Gmail)
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'serviceware20@gmail.com', // Your Gmail email address
            pass: 'jogs baps ofcs kctq' // Your Gmail password
        }
    });

    // Email data
    const mailOptions = {
        from: email,
        to: 'serviceware20@gmail.com', // Destination email address
        subject: 'New Message from Website',
        text: message
    };

    // Send email
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        res.redirect('/');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
