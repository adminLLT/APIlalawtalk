const mongoose = require('mongoose');

 const chatSchema = mongoose.Schema(
    {
        id: { type: String, required: true, unique: true },
        userName:{type:String,require:[true, "plase input name" ]},
        passWord:{type:String,require:true},
        nameSur:{type:String,require:true},
        nameLast:{type:String,require:true},
        telePhone:{type:String,require:true},
        birthDay:{type:String,require:true},
        picture:{type:String,require:true},
        roleCus:{type:String,require:true}, 
        tranScript:{type:[Object],require:true},
        yearOld:{type:String,require:true},
        sex:{type:String,require:true},
        province:{type:String,require:true},
        license:{type:String,require:true},
        status:{type:String,require:true},
        activeReciptWork:{type:String,require:true},
        favorateLawGroup:{type:[Object],require:true},
        selectedrandom:{type:Number}
    },
    {
        timestamps:true
    }
 )

 const ChatData = mongoose.model('ChatData',chatSchema);
 module.exports = { ChatData} ;