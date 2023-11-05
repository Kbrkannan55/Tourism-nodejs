import express from 'express'
import place from '../models/placeSchema.js'
import spot from '../models/spotSchema.js'

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const spotData = await spot.find()
        res.send(spotData)
    }
    catch (error) {
        console.log(error)
    }
})

router.post('/', async (req, res) => {
    try {
        const newSpot = new spot({
            placeId: req.body.placeId,
            spotLocation: req.body.spotLocation,
            imageName: req.body.imageName
        })
        const spotData = await newSpot.save()
        res.status(200).send(spotData)
    }
    catch (error) {
        console.log(error)
    }
})

router.put('/:id', async (req, res) => {
    try {
        let spotId = req.params.id
        const updatedData = await spot.updateOne({ _id: spotId }, { $set: req.body })
        if(updatedData)
        res.status(200).send(updatedData)
        else
        res.status(400).send({message:'Not Found'})
    } catch (error) {
        console.log(error)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        let spotId = req.params.id
        const DeletedData = await spot.findOneAndDelete({ _id: spotId })

        if (DeletedData)
            res.status(200).send(DeletedData)
        else
            res.status(400).send({ message: 'Not found' })
    } catch (error) {
        console.log(error)
    }
})

export default router