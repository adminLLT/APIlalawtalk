const express = require('express');
const router = express.Router();
const { Customer,Aptitude }= require('../model/user');
require('../config/connectMongo')

router.post('/random', async(req, res) => {
  const AptitudeSearch = req.body.AptCustomerSelect
  try {
        const data = await Customer.aggregate([
          {
            $match: {
              favorateLawGroup: {
                $elemMatch: {
                  aptitudeLaw: AptitudeSearch,
                }
              },
              roleCus: "lawyer",
              activeReciptWork: "00"
            }
          },
          {
            $project: {
              id:1,
              nameSur: 1,
              nameLast: 1, 
              telePhone: 1 ,
              selectedrandom:1
            }
          },
          {
            $sort: {
              selectedrandom: 1
            }
          },
          {
            $limit: 3 
          }
        ]);

         var item = data[Math.floor(Math.random()*data.length)];
         console.log(item.id);
      
        const filter = { id: item.id };
        const options = { upsert: true }; 
        const data_add_count = await Customer.findOne({id:item.id},'selectedrandom')
        
        const updateDoc = {
          $set: {
            selectedrandom: (data_add_count.selectedrandom+1)
          },
        };

      const randomUser = await Customer.updateOne(filter, updateDoc, options);
      res.status(200).json(item) ;
  } catch (error) {
    console.log(error); 
    res.status(500).json({ error: 'An error occurred during user creation.' });
  }
});

module.exports = router;
 
