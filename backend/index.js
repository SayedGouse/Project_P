import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './DB/db.js'
const app = express()
dotenv.config()
app.use(cors())
app.use(bodyParser.json())

const port = process.env.PORT || 3000

import authRouter from './authRouter/auth.js'
connectDB()
app.use('/api', authRouter)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
