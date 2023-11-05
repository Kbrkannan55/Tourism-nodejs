import mongoose from "mongoose";

const placeSchema = new mongoose.Schema({
    location: String,
    description: String,
    imageName: String
})

const place = mongoose.model("place", placeSchema)
export default place