import mongoose from "mongoose";

const images = new mongoose.Schema({
    locationName:String,
    locationDescription:String,
    imageName:String
})

const image = mongoose.model("image",images)
export default image