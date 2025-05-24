import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import userRoutes from './routes/user.route'

const app = express()
app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
app.use(express.json())
app.use(cookieParser())
app.use(userRoutes)

export default app