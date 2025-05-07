const { saveUserAgent } = require('../utils/logger.js');

const isValid = (req, res, next) => {
    console.log(req.query.token);
    if (req.query.token == "123") {
        next();
    }
    else
        return res.status(401).json({ message: 'Unauthorized' });
}

// Middleware to check for blocked user agents
const blockedPatterns =[
    /curl/i,
    /wget/i,
    /python-requests/i,
    /python/i,
    /java/i,
    /php/i,
    /ruby/i,
    /go-http-client/i,
    /node-fetch/i,
    /httpclient/i
];
const isBlockedUserAgent = (userAgent) => {
    return blockedPatterns.some(pattern => pattern.test(userAgent));
}



const checkUserAgent = (req, res, next) => {
    const userAgent = req.headers['user-agent'];
    //save to JSON file
    saveUserAgent(userAgent);
    console.log(userAgent);

    if (!userAgent || isBlockedUserAgent(userAgent)) {
        return res.status(400).json({ message: 'baba tomar abastha sandehajanaka' });
    }
    next();
}

module.exports = { isValid, checkUserAgent };