import { Router } from "express";
import { create, findAll, findOne, update, remove } from "../controllers/vehicles_controller.js";

// Crear una instancia de Router
const router = Router();

// Crear un nuevo Vehículo
router.post("/", create);

// Obtener todos los Vehículos
router.get("/", findAll);

// Obtener un Vehículo por su Placa
router.get("/:placa", findOne);

// Actualizar un Vehículo por su Placa
router.put("/:placa", update);

// Eliminar un Vehículo por su Placa
router.delete("/:placa", remove);

// Exportar el Router
export default router;