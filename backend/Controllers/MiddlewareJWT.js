const jwt = require('jsonwebtoken')

const SECRET_KEY = "Learniverse"

const verifyToken = (req, res, next) => {
    const token = req.header("x-auth-token")

    if (!token) {
        return res.status(401).json({ msg: "No token, authorization denied" })
    }
    try {
        const decoded = jwt.verify(token, SECRET_KEY)
        req.user = decoded.user
        next()
    } catch (err) {
        res.status(401).json({ msg: "Token is not valid" })
    }
}

module.exports = verifyToken