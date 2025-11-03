import mongoose, {model, Schema, Types} from "mongoose"

mongoose.connect("")

const userSchema = new Schema({
    username: {type:String, unique:true},
    password:String
})


const contentSchema = new Schema({
    title:String,
    link:{type:String, default:null},
    type:String,
    tags:[{type:mongoose.Types.ObjectId, ref:"Tags"}],
    userId:{type:Types.ObjectId, ref:"Users", required:true}
})

const linkSchema = new Schema({
    hash:String,
    userId: {type:mongoose.Types.ObjectId, ref:"Users", required:true, unique:true}
})


export const userModel = model("Users", userSchema)
export const contentModel = model("Contents", contentSchema)
export const linkModel = model("Links", linkSchema)