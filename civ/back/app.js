import express from 'express'
import VehiculosRoutes from './routes/vehiculos.routes.js'
import ServiciosRoutes from './routes/servicios.routes.js'
import AuthRoutes from './routes/auth.routes.js'
import cors from 'cors'

const app = express();
const port = process.env.PORT || 1905

app.use(express.json())
app.use(cors())

app.use('/api/vehiculos', VehiculosRoutes)
app.use('/api/servicios', ServiciosRoutes)
app.use('/api/auth', AuthRoutes)

app.listen(port, (error) => console.log((error ? `Error: ${error}` : `Server on http://localhost:${port}`)))