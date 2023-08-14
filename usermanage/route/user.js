const express = require('express');
const userManage = express.Router();

const register = require('../controller/register')


userManage.use('/RegisUser',register);

module.exports = userManage;