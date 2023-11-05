import mongoose from "mongoose";

const travelAgentSchema = new mongoose.Schema({
    username: {type:String, required: true},
    email: {type:String},
    password: String,
    role: String,
    phone: Number,
    name: String
});

const travelAgent = mongoose.model("travelAgent",travelAgentSchema)
export default travelAgent