const mongoose = require('mongoose');

 const userSchema = mongoose.Schema(
    {
        chatroomName:{type:String,require:true},
        userId:{type:String,require:true},
        lawyerId:{type:String,require:true}
       
      
     
        
    },
    {
        timestamps:true
    }
 )

 const ChatRoom = mongoose.model('ChatRoom',userSchema);
 module.exports = ChatRoom ;