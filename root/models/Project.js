import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    id:{type:String,required:true},
    name:{type:String,required:true},
    des:{type:String},
    start:{type:String,required:true},
    end:{type:String,required:true},
    createdAt:{type:Date,default:Date.now},
    updatedAt:{type:Date,default:Date.now}

})

const Project = mongoose.model("Project",projectSchema)
export default Project;