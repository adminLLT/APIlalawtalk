
const express = require('express');
const register = express.Router();

const Customer = require('../../model/user')

register.post('/addUser', async (req, res) => {
  try {
    const adduser = await Customer.create(req.body);
    res.status(200).json({status:200,action:"resgis-complete"});
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred during user creation.' });
  }
});

module.exports = register;    