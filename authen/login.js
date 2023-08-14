const express = require('express');
// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { Customer } = require('../model/user');
require('../config/connectMongo')

router.post('/login', async(req, res) => {
  try {
     // const login = await Customer.findOne(req.body).exec(); 
      const login = await Customer.findOne(req.body).exec();
      if(!login){
        statuslogin = "Invalid UserName or PassWord" ;
        res.status(200).json({status:200,action:"login-complete",statuslogin}) ;
      }else{

        statuslogin = login
        const token = jwt.sign(
          { username: statuslogin.userName },
          process.env.TOKEN_KEY,
          { expiresIn: '2h' }
        );
        // const { createdAt,updatedAt,_doc,$isNew, ...loginWithoutCreatedAt } = login;
        // statuslogin = loginWithoutCreatedAt;
        res.status(200).json({status:200,action:"login-complete",statuslogin,token:token}) ;
      }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred during user creation.' });
  }

});


module.exports = router;
