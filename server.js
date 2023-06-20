const express = require ('express');
const app = express();
const userRoutes = require('express').Router();

app.use(express.json())

const sendMail = require("./utils/sendMail");

//ROUTE here
app.post('/sendMail', (req, res)=> {
    sendMail()
    res.send("I tried to send an email. confirm you have received")
});



const PORT = 5000;
app.listen(PORT,()=>console.log(`server running at port ${PORT}`));











