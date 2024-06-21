import { Router } from 'express';
import {
    createMaintenanceController,
    getAllMaintenancesController,
    getOneMaintenanceController,
    updateMaintenanceController,
    deleteMaintenanceController
} from '../controllers/maintenance_controller.js';

// Crear una instancia de Router
const router = Router();

// Crear un nuevo Mantenimiento
router.post('/', createMaintenanceController);

// Obtener todos los Mantenimientos
router.get('/', getAllMaintenancesController);

// Obtener un Mantenimiento por su Id
router.get('/:id', getOneMaintenanceController);

// Actualizar un Mantenimiento por su Id
router.put('/:id', updateMaintenanceController);

// Eliminar un Mantenimiento por su Id
router.delete('/:id', deleteMaintenanceController);

// Exportar el Router
export default router;