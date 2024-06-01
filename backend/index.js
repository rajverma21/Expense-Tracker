import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './routes/expenseRoutes.js'

dotenv.config()
const app = express()
// app.use(express.static('dist'))

// MIDDLEWARES

app.use(
  cors({
    origin: ['https://expense-tracker-frontend-pied.vercel.app'],
    methods: ['POST', 'GET'],
    credentials: true
  })
)
app.use(express.json())
app.use('/expenses', router)

// DB CONNECTION

mongoose
  .connect(process.env.MONGODB_CONNECTION)
  .then(() => {
    console.log('DB CONNECTED SUCCESSFULLY')
  })
  .catch(err => {
    console.error(err)
  })

// SERVER LISTENING

app.listen(process.env.PORT, () => {
  console.log(`Server is running in port: ${process.env.PORT}`)
})
