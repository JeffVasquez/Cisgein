import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.post('/contact', (req, res) => {
  console.log(process.env.SECRET_KEY)
  res.json({ ok: true })
})

app.listen(3000, () => {
  console.log('API running')
})