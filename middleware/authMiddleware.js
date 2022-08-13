const jwt = require('jsonwebtoken');
const cookieParser = require("cookie-parser");
const User = require('../model/User');

const authMiddleware = async (req, res, next) => {
    console.log("in the middleware");


    try {
        const token = req.cookies.jwt;

        // verifing the token stored on cookie
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        const rootUser = await User.findById(decoded._id);

        if (!rootUser) {
            throw new Error("User not found");
        }

        console.log("valid user");

        req.token = token;
        req.rootUser = rootUser;

        next();

    } catch (error) {
        res.status(401).send({ result: "No token provided" });
        console.log(error);
    }

}

module.exports = authMiddleware;