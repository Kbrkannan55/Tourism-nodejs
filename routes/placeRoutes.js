import express from 'express'
import place from '../models/placeSchema.js'

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const placeData = await place.find()
        res.send(placeData)
    }
    catch (error) {
        console.log(error)
    }
})

router.post('/', async (req, res) => {
    try {
        const newPlace = new place({
            location: req.body.location,
            description: req.body.description,
            imageName: req.body.imageName
        })
        const placeData = await newPlace.save()
        res.status(200).send(placeData)
    }
    catch (error) {
        console.log(error)
    }
})

router.put('/:id', async (req, res) => {
    try {
        let placeId = req.params.id
        const updatedData = await place.updateOne({ _id: placeId }, { $set: req.body })
        res.status(200).send(updatedData)
    } catch (error) {
        console.log(error)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        let placeId = req.params.id
        const DeletedData = await place.findOneAndDelete({ _id: placeId })

        if (DeletedData)
            res.status(200).send(DeletedData)
        else
            res.status(400).send({ message: 'Not found' })
    } catch (error) {
        console.log(error)
    }
})

export default router