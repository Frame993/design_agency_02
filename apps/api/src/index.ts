import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { contactRouter } from './routes/contact.js'

const app = express()
const PORT = process.env.PORT ?? 3001

app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN ?? 'http://localhost:5173',
    methods: ['POST', 'GET', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
  })
)
app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.use('/api/contact', contactRouter)

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`)
})
