import mongoose from "mongoose";

const spotSchema = new mongoose.Schema({
    placeId:String,
    spotLocation:String,
    imageName:String
})

const spot = mongoose.model("spot",spotSchema)
export default spot