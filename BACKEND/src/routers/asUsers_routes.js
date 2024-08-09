import {Router} from "express";
import { 
    getAllAsUsersController
} from "../controllers/asUsers_controller.js";

// Crear una instancia de Router
const router = Router();

// Obtener todos los Tipos de Usuarios
router.get("/", getAllAsUsersController);

// Exportar el Router
export default router;