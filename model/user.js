const mongoose = require('mongoose');

 const userSchema = mongoose.Schema(
    {
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
        favorateLawGroup:{type:String,require:true},
    },
    {
        timestamps:true
    }
 )

 const Customer = mongoose.model('Customer',userSchema);
 module.exports = Customer ;