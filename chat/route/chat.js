const express = require('express');
const chatManage = express.Router();

const CreateChat = require('../controller/CreateChat')


chatManage.use('/ChatManage',CreateChat);

module.exports = chatManage;