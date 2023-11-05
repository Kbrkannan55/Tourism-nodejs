import express from 'express'
import hotel from '../models/hotelSchema.js'

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const hotelData = await hotel.find()
        res.send(hotelData)
    }
    catch (error) {
        console.log(error)
    }
})

router.post('/', async (req, res) => {
    try {
        const newHotel = new hotel({
            hotelName:req.body.hotelName,
            hotelDescription:req.body.hotelDescription,
            ratings:req.body.ratings,
            hotelLocation:req.body.hotelLocation
        })
        const hotelData = await newHotel.save()
        res.status(200).send(hotelData)
    }
    catch (error) {
        console.log(error)
    }
})

export default router