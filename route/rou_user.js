const express = require('express');
const router = express.Router();

const {getAll, deleteUser, updateUse} = require('../controllers/con_user.js');


router.get('/user', getAll);
router.get('/delete', deleteUser);
router.get('/update', updateUse);

module.exports = router;
