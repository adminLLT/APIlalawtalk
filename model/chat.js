const mongoose = require('mongoose');

 const chatSchema = mongoose.Schema(
    {
        id: { type:Number, required: true, unique: true },
        conversation:{type:[Object],require:true},
    },
    {
        timestamps:true
    }
 ) 
 
 const messageSchema = mongoose.Schema(
    { 
        conversation_id:{type:String,require:true},
        dataConvasation:{type:[Object],require:true}
        // sender: { type: String, required: true, unique: true },
        // message: { type: String, required: true, unique: true },
    },
    {
        timestamps:true
    }
 )

 const ChatData = mongoose.model('ChatData',chatSchema);
 const MessageData = mongoose.model('MessageData',messageSchema);
 module.exports = { ChatData,MessageData } ;