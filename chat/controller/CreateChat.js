
const express = require('express');
const CreateChat = express.Router();

const Customer = require('../../model/user')

CreateChat.post('/CreateChat', async (req, res) => {
  res.json('asdsa')
});

module.exports = CreateChat;    