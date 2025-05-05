const express = require('express');
const router = express.Router();


const users = [
    {id: 1, name: 'ASM Tamzid'},
    {id: 2, name: 'sabbit'}
];


router.get('/use',(req,res)=>{
    res.json(users);
});

module.exports = router;
