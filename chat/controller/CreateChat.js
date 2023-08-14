
const express = require('express');
const CreateChat = express.Router();

const { Customer } = require('../../model/user')
const { ChatData,MessageData } = require('../../model/chat')
require('../../config/connectMongo')
CreateChat.post('/CreateChat', async (req, res) => {
    const user = req.body.userId
    const lawyer = req.body.lawyerId

    const autonumber = await ChatData.findOne({},null, { sort: { id: -1 } });

      if(autonumber === null){
        await ChatData.create(
                {
                    id:1,conversation:[{user:user,lawyer:lawyer}]
                }
        )
      }else{

         var idauto = autonumber.id +1
        await ChatData.create(
            {
                id:idauto,conversation:[{user:user,lawyer:lawyer}]
            })

        await MessageData.create(
            {
                conversation_id:idauto,dataConvasation:[{sender:'',message:''}]
            })
      }

   
  res.json(idauto)
});

module.exports = CreateChat;    