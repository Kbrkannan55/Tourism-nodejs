import express from 'express'
import mongoose from 'mongoose'
import userRoutes from './routes/userRoutes.js'
import cors from 'cors'
import travelAgentRoutes from './routes/travelAgentRoutes.js'
import placeRoutes from './routes/placeRoutes.js'
import spotRoutes from './routes/spotRoutes.js'
import hotelRoutes from './routes/hotelRoutes.js'
import packageRoutes from './routes/packageRoutes.js'
import bookingRoutes from './routes/bookingRoutes.js'
import imageRoutes from './routes/imagesRoutes.js'

mongoose.connect('mongodb://127.0.0.1:27017/userDB')
  .then(() => console.log('Connected!'));

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/Auth/',userRoutes)
app.use('/api/TravelAgent/',travelAgentRoutes)
app.use('/api/Place/',placeRoutes)
app.use('/api/Spot/',spotRoutes)
app.use('/api/Hotel/',hotelRoutes)
app.use('/api/Package/',packageRoutes)
app.use('/api/Booking/',bookingRoutes)
app.use('/api/Images/',imageRoutes)

app.listen(7050,console.log("Listening"))