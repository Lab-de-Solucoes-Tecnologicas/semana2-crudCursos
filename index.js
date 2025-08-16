import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

import coursesRoutes from './routes/coursesRoutes.js'

const app = express()

app.use(express.json())

app.use('/cursos', coursesRoutes)

const PORT = process.env.PORT || 3333
app.listen(PORT, () => console.log(`App rodando na porta ${PORT}`))