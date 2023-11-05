import mongoose from "mongoose";

const booking = new mongoose.Schema({
    startDate:String,
    count:Number,
    packageId:String,
    userId:String
})

const book = mongoose.model("book",booking)
export default book