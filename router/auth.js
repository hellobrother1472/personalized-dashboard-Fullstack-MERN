const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require("../model/User");
const authMiddleware = require("../middleware/authMiddleware");

const saltRounds = 10;

router.post("/register", async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;

    try {
        const findone = await User.findOne({ email: email });
        if (findone) {
            res.send({ result: "User Already Exists" });
        } else {
            if (password == cpassword) {
                bcrypt.hash(password, saltRounds, function (err, hash) {
                    if (!err) {
                        const newUser = new User({ name: name, email: email, phone: phone, work: work, password: hash, cpassword: hash });
                        newUser.save();
                        res.send({ result: "Registered succesfully", regStatus: 201 });
                    }
                    else {
                        console.log(err);
                    }

                });
            }
        }

    } catch (error) {
        console.log("I am in catch");
        console.log(error)
        res.send(error.message);
    }
})



router.post("/signin", async (req, res) => {
    const { email, password } = req.body;
    try {
        const found = await User.findOne({ email: email });
        if (found) {

            bcrypt.compare(password, found.password, (err, result) => {
                if (result) {
                    const token = jwt.sign({ _id: found._id }, process.env.SECRET_KEY);
                    res.cookie("jwt", token);

                    User.findOneAndUpdate({ email: found.email }, { token: token }, (err) => {
                        if (!err) {
                            console.log("Applied the token succesfully");
                        }
                    });
                    res.send({ result: "User found!!. You are signed in successfully.", lStatus: 200 });
                } else {
                    res.send({ result: "Incorrect Password, Try again" });
                }
            });
        } else {
            res.send({ result: "User does'nt exist, go and register first" });
        }

    } catch (error) {
        res.send(err)
    }
})

router.get("/about", authMiddleware, (req, res) => {
    res.send(req.rootUser);
})

router.post("/contact", async (req, res) => {
    try {
        const { name, email, phone, work, password, cpassword, message } = req.body;

        const user = await User.findOne({ email: email });

        if (user) {
            const userMessage = await user.addMessage(name, email, phone, message);
            await user.save();
            res.send({ message: "sent succesfully" })
        }



    } catch (error) {
        console.log(error);
    }

})

router.get("/logout", authMiddleware, (req, res) => {
    res.clearCookie('jwt');
    res.send({ message: 'Succesfully logged out.' });
})

module.exports = router;

