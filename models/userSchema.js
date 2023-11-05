import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {type:String, required: true},
    email: {type:String},
    password: String,
    role: String,
    phone: Number,
    name: String
});

const user = mongoose.model("user",userSchema)
export default user