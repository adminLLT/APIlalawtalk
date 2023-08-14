const express = require('express');
const router = express.Router();

const UserManage = require('./route/user');


router.use('/UserManage', UserManage);
 
module.exports = router