const nodemailer = require("nodemailer")
require("dotenv").config();

const email_config = require("../config/emailConfig");

const message_options = {
    to: [ "karani.wachira@thejitu.com", "mainaathonymwai@gmail.com", "wachirakeith@gmail.com"],
    from: process.env.EMAIL_USER,
    subject:"Email testing  || sent from Nodemailer" ,
    text: "Yessssssssssssss it works!",       // body of the email
}

// function that picks the configuration
const transporter = nodemailer.createTransport(email_config); 

async function sendMail() {
    console.log(email_config)
    try {
        let results = await transporter.sendMail(message_options)
        console.log(results);
    } catch (error) {
        console.log(error)  
    }
}
   
module.exports = sendMail;






