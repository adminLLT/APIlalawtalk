const express = require('express');
const router = express.Router();
const Customer = require('../model/user');
require('../db/connectMongo')

router.get('/random', async(req, res) => {
  try {
     // const login = await Customer.findOne(req.body).exec(); 
      const login = await Customer.findOne(req.body).exec();
      if(!login){
        statuslogin = "Invalid UserName or PassWord" ;
      }else{
        statuslogin = login
        // const { createdAt,updatedAt,_doc,$isNew, ...loginWithoutCreatedAt } = login;
        // statuslogin = loginWithoutCreatedAt;
      }
      res.status(200).json({status:200,action:"login-complete",statuslogin}) ;
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred during user creation.' });
  }
});

module.exports = router;
 
