const jwt = require("jsonwebtoken")
require('dotenv').config()

const auth = (req, res, next) =>{
    const authHeader = req.headers.authorization
    const token = authHeader.split(" ")[1]
    const emailDecoded = jwt.verify(token, process.env.AUTH_CODE)
    req.email = emailDecoded;
    next()
}

module.exports = auth;