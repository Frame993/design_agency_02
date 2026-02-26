import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { contactRouter } from './routes/contact.js'

const app = express()
const PORT = process.env.PORT ?? 3001

const isDev = process.env.NODE_ENV !== 'production'

app.use(
  cors({
    origin: isDev ? /^http:\/\/localhost:\d+$/ : process.env.ALLOWED_ORIGIN,
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
