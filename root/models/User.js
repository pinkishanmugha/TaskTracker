import mongoose from 'mongoose'
// const mongoose=require('mongoose')
const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,enum:["admin","teamMember"],required:true}
    
})
const User=mongoose.model('User',userSchema)
// module.exports=userData;
export default User