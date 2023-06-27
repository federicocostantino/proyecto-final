import express from 'express'
import VehiclesRoutes from './routes/vehicles.js'
import ServicesRoutes from './routes/services.js'
import AuthRoutes from './routes/auth.js'
import cors from 'cors'

const app = express();
const port = process.env.PORT || 1905

app.use(express.json())
app.use(cors())

app.use('/api/vehicles', VehiclesRoutes)
app.use('/api/services', ServicesRoutes)
app.use('/api/auth', AuthRoutes)

app.listen(port, (error) => console.log((error ? `Error: ${error}` : `Server on http://localhost:${port}`)))