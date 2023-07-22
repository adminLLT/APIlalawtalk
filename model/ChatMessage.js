const mongoose = require('mongoose');

 const userSchema = mongoose.Schema(
    {
        
        senderId:{type:String,require:true},
        recieverId:{type:String,require:true},
        messageText:{type:String,require:true},
        chatroomName:{type:String,require:true},
        
    },
    {
        timestamps:true
    }
 )

 const ChatMessage = mongoose.model('ChatMessage',userSchema);
 module.exports = ChatMessage ;