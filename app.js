const express = require('express');
const app = express();
const port = 3000;
const userRoute = require('./route/rou_user.js');


app.use(express.json());

const isValid = (req, res, next)=>{
    console.log(req.query.token);
    if(req.query.token == "123"){
        next();
    }
    else
        return res.status(401).json({message: 'Unauthorized'});

    
    console.log('Middleware is running');
}


//Use the User route
app.use('/api',isValid, userRoute);

//Start the Server
app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})
