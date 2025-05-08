const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname,'../../requests.json');

const auditLogger = (req, res, next)=>{
    const logEntry = {
        method: req.method,
        url: req.originalUrl,
        ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
        timestamp: new Date().toISOString(),
        headers:{
            'user-agent': req.headers['user-agent'],
            'accept-language': req.headers['accept-language'],
            'accept-encoding': req.headers['accept-encoding'],
            'content-type': req.headers['content-type'],
            'host': req.headers['host'],
            'connection': req.headers['connection']
        }
    };

    // Read existing logs
    let logs = [];
    if (fs.existsSync(logFilePath)) {
        const data = fs.readFileSync(logFilePath);
        logs = JSON.parse(data);
    }

    // Add new log entry
    logs.push(logEntry);

    // Write updated logs back to file
    fs.writeFileSync(logFilePath, JSON.stringify(logs, null, 2));

    next();
}

module.exports = auditLogger;