import express from 'express'
import booking from '../models/bookingSchema.js'

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const bookedData = await booking.find()
        res.send(bookedData)
    }
    catch (error) {
        console.log(error)
    }
})

router.post('/', async (req, res) => {
    try {
        const newBooking = new booking({
            startDate: req.body.startDate,
            count: req.body.count,
            packageId: req.body.packageId,
            userId: req.body.userId
        })
        const bookData = await newBooking.save()
        res.status(200).send(bookData)
    }
    catch (error) {
        console.log(error)
    }
})

export default router