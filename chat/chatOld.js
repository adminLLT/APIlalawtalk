const express = require('express');
const app = express();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const sql = require('mssql');
const dbConfig = require('../db/dbconfig');

const nocache = require('nocache');
const router = express.Router() ;


//createchatroom after random 
router.post('/gochat',async (req,res)=>{
    const { user_id, user_lawyer } = req.body;

  try {
    // Connect to the database
    const pool = await sql.connect(dbConfig);

    // Fetch user data for the given user IDs
    const userDataQuery = `
      SELECT * FROM LLT_USER WHERE LLUID IN (@user_id, @user_lawyer);
    `;
    const userDataResult = await pool.request()
      .input('user_id', sql.Int, user_id)
      .input('user_lawyer', sql.Int, user_lawyer)
      .query(userDataQuery);

    const user1 = userDataResult.recordset.find((user) => user.LLUID === user_id);
    const user2 = userDataResult.recordset.find((user) => user.LLUID === user_lawyer);

    if (user1 && user2) {
      // Create a unique chat room name based on user IDs
      
      const chatRoomName = `chat_${user_id}_${user_lawyer}`;
      console.log(user1);
      console.log(user2);
      console.log(chatRoomName);

      // Create the chat room in the database
      const createChatRoomQuery = `
  EXEC [dbo].[DATA_LLT_CHAT] 'insert_chat', '', '${chatRoomName}', ${user_id}, ${user_lawyer}, '', '', '';
`;

      await pool.request()
        .input('roomName', sql.NVarChar, chatRoomName)
        .input('user_id', sql.Int, user_id)
        .input('user_lawyer', sql.Int, user_lawyer)
        .query(createChatRoomQuery);

      res.status(200).json({ message: 'Chat room created successfully.' });
    } else {
      res.status(404).json({ message: 'One or both users not found.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while creating the chat room.' });
  }
});

//send message 
router.post('/gochat/send',async (req,res)=>{
    const { chatRoomId, senderId, receiverId, message } = req.body;

    try {
      // Connect to the database
      const pool = await sql.connect(dbConfig);
  
      // Insert the new message into the database
      const insertMessageQuery = `
      EXEC [dbo].[DATA_LLT_CHAT]'insert_messange','','${senderId}','${receiverId}','${message}','${chatRoomId}','',''
  `;
  
      await pool.request()
        
        .input('senderId', sql.Int, senderId)
        .input('receiverId', sql.Int, receiverId)
        .input('message', sql.VarChar(255), message)
        .input('chatRoomId', sql.VarChar(255), chatRoomId)
        .query(insertMessageQuery);
  
      res.status(200).json({ message: 'Message sent successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while sending the message.' });
    }
});


// api original read message in chat room 
router.post('/gochat/chatRoomId',nocache(), async (req,res)=>{
     const { chatRoomId } = req.body;
  //  const  chatRoomId  ='4';
    try {
      // Connect to the database
      const pool = await sql.connect(dbConfig);
  
      // Retrieve all messages for the given chat room ID
      const getMessagesQuery = `
        EXEC [dbo].[DATA_LLT_CHAT] 'search_messange_in_room', '${chatRoomId}', '', '', '', '', '', '';
      `;
      const result = await pool.request().query(getMessagesQuery);
  
      const messages = result.recordset;
  
      res.status(200).json({ messages });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while retrieving the messages.' });
    }
});


// ดูว่า id นี้ มีห้องแชทกี่ห้อง
router.get('/messagelist', async (req, res) => {
  const { userId } = req.query;
  console.log(userId);
  
  try {
    // Connect to the database
    const pool = await sql.connect(dbConfig);

    // Retrieve the message list for the given user ID
    const getMessageListQuery = `
      EXEC [dbo].[DATA_LLT_CHAT] 'search_messange','${userId}', '', '', '', '', '', '';
    `;
    const result = await pool.request().query(getMessageListQuery);

    const messageList = result.recordset;
    console.log(messageList);

    res.status(200).json({ messageList });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while retrieving the message list.' });
  }
});

module.exports = router ;