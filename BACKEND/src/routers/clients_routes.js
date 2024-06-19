import { Router } from 'express';
import { 
    createClientController, 
    getAllClientsController, 
    getOneClientController, 
    updateClientController, 
    deleteClientController
} from '../controllers/clients_controller.js';

// Crear una instancia de Router
const router = Router();

// Crear un nuevo Cliente
router.post('/', createClientController);

// Obtener todos los Clientes
router.get('/', getAllClientsController);

// Obtener un Cliente por su Id
router.get('/:id', getOneClientController);

// Actualizar un Cliente por su Id
router.put('/:id', updateClientController);

// Eliminar un Cliente por su Id
router.delete('/:id', deleteClientController);

// Exportar el Router
export default router;