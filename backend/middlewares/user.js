const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");

function userMiddleware(req, res, next) {
    const authHeader = req.headers.authorization; // Corrected to lowercase

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({ message: 'Forbidden: No token provided or invalid format' });
    }

    const token = authHeader.split(' ')[1].trim(); // Trim any potential whitespace

    console.log('Authorization Header:', authHeader);
    console.log('Extracted Token:', token);

    try {
        const decoded = jwt.verify(token, JWT_SECRET); // Corrected jwt.verify call

        // Optionally, you can attach the decoded information to the request object
        req.user = decoded;

        next();
    } catch (err) {
        console.error('JWT Verification Error:', err);
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
}

module.exports = userMiddleware;
