import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import clientRoutes from './routers/clients_routes.js';
import vehicleRoutes from './routers/vehicles_routes.js';
import maintenanceRoutes from './routers/maintenance_routes.js';

// INstanciacion de express
const app = express();

// Configuracion de variables de entorno y express
dotenv.config();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Rutas predefinidas
app.get('/', (req, res) => {
  res.json({
    message: 'Bienvenidos a la API de Mantenimiento de Vehiculos',
  });
});

app.set('port', process.env.PORT || 4000);


// Rutas de la aplicacion
app.use('/api/clients', clientRoutes);
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/maintenance', maintenanceRoutes);

// Ruta para el error 404
app.use((req, res, next) => {
  res.status(404).json({
    message: 'Not Found',
  });
});

// Exportar la aplicacion
export default app;
