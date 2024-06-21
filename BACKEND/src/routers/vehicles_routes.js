import { Router } from "express";
import {
    createVehicleController,
    getAllVehiclesController,
    getOneVehicleController,
    updateVehicleController,
    deleteVehicleController
} from "../controllers/vehicles_controller.js";

// Crear una instancia de Router
const router = Router();

// Crear un nuevo Vehículo
router.post("/", createVehicleController);

// Obtener todos los Vehículos
router.get("/", getAllVehiclesController);

// Obtener un Vehículo por su Placa
router.get("/:placa", getOneVehicleController);

// Actualizar un Vehículo por su Placa
router.put("/:placa", updateVehicleController);

// Eliminar un Vehículo por su Placa
router.delete("/:placa", deleteVehicleController);

// Exportar el Router
export default router;