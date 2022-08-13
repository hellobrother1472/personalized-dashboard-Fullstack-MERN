const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    messages:[
        {
            name:{
                type:String,
                required:true
            },
            email:{
                type:String,
                required:true
            },
            phone:{
                type:Number,
                required:true
            },
            message:{
                type:String,
                required:true
            },
        }
    ],
    token:String
})

userSchema.methods.addMessage = async function(name,email,phone,message){
    try {
        this.messages = this.messages.concat({name,email,phone,message})
    } catch (error) {
        console.log(error);
    }
}

const User = mongoose.model("User",userSchema);

module.exports = User;