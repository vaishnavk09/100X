const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
function auth(req, res, next) {
    const bearerHeader = req.headers.authorization;
    const token = bearerHeader ? bearerHeader.replace("Bearer ", "") : req.headers.token;

    if (!token) {
        return res.status(401).json({ message: "Token missing" });
    }

    let response;
    try {
        response = jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return res.status(403).json({
            message: "Incorrect creds"
        });
    }

    if (response) {
        req.userId = response.id;
        next();
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
}

module.exports = {
    auth,
    JWT_SECRET
}