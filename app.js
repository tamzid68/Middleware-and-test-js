const express = require('express');
const app = express();
const port = 3000;
const userRoute = require('./route/user.js');


app.use(express.json());


app.use('/', userRoute);


app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})
