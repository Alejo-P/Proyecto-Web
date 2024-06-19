import { Router } from 'express';
import { create, findAll, findOne, update, remove } from '../controllers/maintenance_controller.js';

// Crear una instancia de Router
const router = Router();

// Crear un nuevo Mantenimiento
router.post('/', create);

// Obtener todos los Mantenimientos
router.get('/', findAll);

// Obtener un Mantenimiento por su Id
router.get('/:id', findOne);

// Actualizar un Mantenimiento por su Id
router.put('/:id', update);

// Eliminar un Mantenimiento por su Id
router.delete('/:id', remove);

// Exportar el Router
export default router;