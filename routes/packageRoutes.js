import express from 'express'
import packages from '../models/packageSchema.js'

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const packageData = await packages.find()
        res.send(packageData)
    }
    catch (error) {
        console.log(error)
    }
})

router.get('/GetFilteredDetails/', async (req, res) => {
    try {
        const type = req.query.type
        const desti = req.query.desti
        const transports = req.query.transport
        let filter = { $and: [{ packageType: type }, { destination: desti }, { transport: transports }] }
        const filteredData = await packages.find(filter)
        if (filteredData)
            res.status(200).send(filteredData)
        else
            res.status(400).send({ message: 'Not found' })
    } catch (error) {
        console.log(error)
    }
})

router.post('/', async (req, res) => {
    try {
        const packag = new packages({
            packageType: req.body.packageType,
            description: req.body.description,
            pricePerPerson: req.body.pricePerPerson,
            source: req.body.source,
            destination: req.body.destination,
            vehicleType: req.body.vehicleType,
            days: req.body.days,
            nights: req.body.nights,
            totaldays: req.body.totaldays,
            itineraryDetails: req.body.itineraryDetails,
            placeId: req.body.placeId,
            hotelId: req.body.hotelId,
            userId: req.body.userId
        })
        const packageData = await packag.save()
        res.status(200).send(packageData)
    }
    catch (error) {
        console.log(error)
    }
})


export default router