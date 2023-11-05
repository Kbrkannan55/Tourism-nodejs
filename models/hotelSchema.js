import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
    hotelName:String,
    hotelDescription:String,
    ratings:Number,
    hotelLocation:String
})

const hotel = mongoose.model('hotel',hotelSchema)
export default hotel