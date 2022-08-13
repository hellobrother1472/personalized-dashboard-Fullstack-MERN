const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
require('dotenv').config();
const connectDB = require("./db/connectDB");
const bodyParser = require("body-parser");
const authMiddleware = require("./middleware/authMiddleware");


const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require("./router/auth"));

connectDB();

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}


let port = process.env.PORT || 5000;

app.listen(port, function () {
    console.log(`Server started successfully at ${port}`);
});


