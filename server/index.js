import 'dotenv/config'
import './db/connection.js'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import postRouter from './routes/posts.js'
import userRouter from './routes/users.js'
import authRouter from './routes/auth.js'

const PORT = process.env.PORT || 8080

const app = express()

app.use(cors())
app.use(express.json())
// Morgan helps with API logs
app.use(morgan('dev'))

app.use('/api/post/', postRouter)
app.use('/api/user/', userRouter)
app.use('/api/auth/', authRouter)

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
})
