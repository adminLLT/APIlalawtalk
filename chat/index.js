const express = require('express');
const router = express.Router();
const auth = require('../authen/middleware/auth')
const chatManage = require('./route/chat');

router.use('/chat',auth,chatManage);
 
module.exports = router