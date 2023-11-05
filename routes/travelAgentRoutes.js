import express from 'express'
import travelAgent from '../models/travelAgentSchema.js'

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const userData = await travelAgent.find()
        res.send(userData)
    }
    catch (error) {
        console.log(error)
    }
})

router.post('/', async (req, res) => {
    try {
        const newUser = new travelAgent(
            {
                name: req.body.name, username: req.body.username, email: req.body.email,
                phone: req.body.phone, role: 'Agent', password: req.body.password
            }
        )
        const userData = await newUser.save()
        res.status(200).send(userData)
    }
    catch (error) {
        console.log(error)
    }
})

router.delete('/', async (req, res) => {
    try {
        const user = req.body.username;
        console.log(user)
        const deletedAgent = await travelAgent.findOneAndDelete({ username: user })
        if (deletedAgent) {
            res.status(200).send(deletedAgent)
        }
        else
            res.status(400).send({ message: "Not Found" })

    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Internal server error' });
    }
});

export default router