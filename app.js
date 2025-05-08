const express = require('express');
const app = express();
const port = 3000;
const userRoute = require('./route/rou_user.js');
const { isValid, checkUserAgent, rateLimiter } = require('./middleware/mid_user.js'); 
const auditLogger = require('./middleware/audit/auditLogger.js');

app.use(express.json());

app.use(auditLogger);
app.use(checkUserAgent);
app.use(rateLimiter);

//Use the User route
app.use('/api', isValid, userRoute);


//Start the Server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})
