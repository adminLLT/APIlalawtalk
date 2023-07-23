const express = require('express');
const router = express.Router();
const { Customer,Aptitude }= require('../model/user/user');
require('../db/connectMongo')

router.post('/random', async(req, res) => {
  const AptitudeSearch = req.body.AptCustomerSelect
  try {
        // const data = await Customer.find({ favorateLawGroup: })
        const data = await Customer.aggregate([
          {
            $match: {
              favorateLawGroup: {
                $elemMatch: {
                  aptitudeLaw: AptitudeSearch 
                }
              }
            }
          },
          {
            $project: {
              _id: 0, 
              nameSur: 1,
              nameLast: 1, 
              telePhone: 1 
            }
          }
        ]);
        
        // console.log(data);
      res.status(200).json(data) ;
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred during user creation.' });
  }
});

module.exports = router;
 
