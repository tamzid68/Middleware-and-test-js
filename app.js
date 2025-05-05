const express = require('express');
const app = express();
const port = 3000;
const userRoute = require('./route/rou_user.js');
const {isValid,checkUserAgent} = require('./middleware/mid_user.js');


app.use(express.json());


//Use the User route
app.use('/api',isValid, checkUserAgent, userRoute);

//Start the Server
app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})
