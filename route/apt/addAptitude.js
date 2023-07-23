const express = require('express');
const router = express.Router();
const { Aptitude } = require('../../model/user/user');
require('../../db/connectMongo')

router.post('/addAptitude', async (req, res) => {
  try {
    const addApt = await Aptitude.create(req.body);
    res.status(200).json({status:200,action:"add-complete"});
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred during user creation.' });
  }
});

module.exports = router;