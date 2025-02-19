const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer'); // For sending emails

const app = express();
const port = process.env.PORT || 3000;

//For nodemon
const path = require("path")
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile('C:\\ServiceWareSite\\public\\index.html');
});

// POST route to handle form submission
app.post('/send-email', async (req, res) => {
    const { email, message,
            sendPrice, lvlCodes,
            sendPixelPrice, pixelCodes} = req.body;

    // Get button value to send mail
    const buttonValue = req.body.button;
    //const whatPrice = sendPrice;
    console.log('Button Value:', buttonValue, '\n Price:', sendPrice);

    // const priceValue = req.body.price;
    

    // Here we made so that every element had a code in bits 0001, 0010, 0100, ...
    // And here we decode that and send the elements assigned to that code that were selected
    let emailContainer =``;
    let price = 0;
    if(buttonValue === "Level-up Pack") {
        price = sendPrice;

        if (lvlCodes & 1) {
            emailContainer = emailContainer.concat("- Placa video\n");
        }
        if (lvlCodes & 2) {
            emailContainer = emailContainer.concat("- Procesor\n");
        }
        if (lvlCodes & 4) {
            emailContainer = emailContainer.concat("- Sursa\n");
        }
        if (lvlCodes & 8) {
            emailContainer = emailContainer.concat("- Carcasa\n");
        }
        if (lvlCodes & 16) {
            emailContainer = emailContainer.concat("- Placa de baza\n");
        }
        if (lvlCodes & 32) {
            emailContainer = emailContainer.concat("- *CUSTOM* (DM the buyer)\n");
        }
    }
    else if(buttonValue === "Pixel Purity PRO Pack") {
        price = sendPixelPrice;

        if (pixelCodes & 1) {
            emailContainer = emailContainer.concat("- Coolent\n");
        }
        if (pixelCodes & 2) {
            emailContainer = emailContainer.concat("- Curatare\n");
        }
        if (pixelCodes & 4) {
            emailContainer = emailContainer.concat("- Schimb Pasta\n");
        }
        if (pixelCodes & 8) {
            emailContainer = emailContainer.concat("- Schimb ThermalPads\n");
        }
    }
    console.log(lvlCodes);
    console.log(buttonValue);


    // Configure your email service (e.g., Gmail)  
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'serviceware20@gmail.com', // Your Gmail email address
            pass: 'jogs baps ofcs kctq' // Your Gmail password
        }
    });

    // Email dataS
    const mailOptions = {
        from: /*'serviceware20@gmail.com'*/ email,
        to: 'serviceware20@gmail.com', // Destination email address
        subject: email,
        text:  `${buttonValue} \n
            + Price: ${price}\n
            + Client Message: ${message}\n
            + Need to be changed:\n
                ${emailContainer}`
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
