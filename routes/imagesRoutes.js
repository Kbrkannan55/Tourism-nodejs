import express from 'express'
import image from '../models/imagesSchema.js'

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const imageData = await image.find()
        res.send(imageData)
    }
    catch (error) {
        console.log(error)
    }
})

router.post('/', async (req, res) => {
    try {
        const imagedata = new image({
            locationName: req.body.locationName,
            locationDescription: req.body.locationDescription,
            imageName: req.body.imageName
        })
        const placeData = await imagedata.save()
        res.status(200).send(placeData)
    }
    catch (error) {
        console.log(error)
    }
})

router.put('/:id', async (req, res) => {
    try {
        let imageId = req.params.id
        const updatedData = await place.updateOne({ _id: imageId }, { $set: req.body })
        res.status(200).send(updatedData)
    } catch (error) {
        console.log(error)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        let imageId = req.params.id
        const DeletedData = await place.findOneAndDelete({ _id: imageId })

        if (DeletedData)
            res.status(200).send(DeletedData)
        else
            res.status(400).send({ message: 'Not found' })
    } catch (error) {
        console.log(error)
    }
})

export default router