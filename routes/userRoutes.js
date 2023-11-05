import express from "express";
import user from "../models/userSchema.js";

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const userData = await user.find()
        res.send(userData)
    }
    catch (error) {
        console.log(error)
    }
})

router.post('/authenticate', async (req, res) => {
    try {
        const userData = await user.find({ $and: [{ email: req.body.email }, { password: req.body.password }] })
        if (userData)
            res.status(200).send(userData)
        else
            res.status(404).send({ message: 'Not Found' })
    } catch (error) {
        console.log(error)
    }
})

router.post('/register', async (req, res) => {
    try {
        const newUser = new user(
            {
                name: req.body.name, username: req.body.username, email: req.body.email,
                phone: req.body.phone, role: 'User', password: req.body.password
            }
        )
        const userData = await newUser.save()
        res.status(200).send(userData)
    }
    catch (error) {
        console.log(error)
    }
})

router.post('/admin', async (req, res) => {
    try {
        const newUser = new user(
            {
                name: req.body.name, username: req.body.username, email: req.body.email,
                phone: req.body.phone, role: 'Admin', password: req.body.password
            }
        )
        const userData = await newUser.save()
        res.status(200).send(userData)
    }
    catch (error) {
        console.log(error)
    }
})

router.delete('/Delete', async (req, res) => {
    try {
        const agentId = req.query.id
        const deletedUser = await user.findOneAndDelete({ _id: agentId })
        if (deletedUser)
            res.status(200).send(deletedUser)
        else
            res.status(404).send("Not found")
    } catch (error) {

    }
})

export default router