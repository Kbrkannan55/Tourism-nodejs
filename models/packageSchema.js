import mongoose, { mongo } from "mongoose";

const packageSchema = new mongoose.Schema({
    packageType:String,
    description:String,
    pricePerPerson:Number,
    source:String,
    destination:String,
    vehicleType:String,
    days:Number,
    nights:Number,
    totaldays:Number,
    itineraryDetails:String,
    placeId:String,
    hotelId:String,
    userId:String
})

const packages = mongoose.model("packages",packageSchema)
export default packages