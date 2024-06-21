import Vehicles from "../models/vehicles_model.js";

// Crear y guardar un nuevo Vehículo
export const createVehicleController = async (req, res) => {
    // Validar la solicitud
    if (!req.body.Placa || !req.body.Marca || !req.body.Modelo || !req.body.Año || !req.body.Color || !req.body.Id_Cliente) {
        res.status(400).send({
            message: '¡Faltan datos en la solicitud!'
        });
        return;
    }

    // Crear un Vehículo
    const vehicle = {
        Placa: req.body.Placa,
        Marca: req.body.Marca,
        Modelo: req.body.Modelo,
        Año: req.body.Año,
        Color: req.body.Color,
        Id_Cliente: req.body.Id_Cliente
    };
    try {
        const vehicleFound = await Vehicles.findOne({ where: { Placa: req.body.Placa } });
        if (vehicleFound) {
            res.status(400).send({
                message: '¡La Placa ya está registrada!'
            });
            return;
        }
        // Guardar Vehículo en la base de datos
        const savedVehicle = await Vehicles.create(vehicle);
        res.status(201).json(savedVehicle);
    } catch (error) {
        res.status(500).send({
            message: error.message || '¡Ocurrió un error al guardar el Vehículo!'
        });
    }
};

// Obtener todos los Vehículos de la base de datos
export const getAllVehiclesController = async (req, res) => {
    try {
        const vehicles = await Vehicles.findAll();
        res.status(200).json(vehicles);
    } catch (error) {
        res.status(500).send({
            message: error.message || '¡Ocurrió un error al obtener los Vehículos!'
        });
    }
};

// Obtener un Vehículo por su Placa
export const getOneVehicleController = async (req, res) => {
    const placa = req.params.placa;
    try {
        const vehicle = await Vehicles.findOne({ where: { Placa: placa } });
        if (!vehicle) {
            res.status(404).send({
                message: '¡No se encontró el Vehículo con la Placa especificada!'
            });
        }

        res.status(200).json(vehicle);
    } catch (error) {
        res.status(500).send({
            message: error.message || '¡Ocurrió un error al obtener el Vehículo!'
        });
    }
}

// Actualizar un Vehículo por su Placa
export const updateVehicleController = async (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: '¡Faltan datos en la solicitud!'
        });
        return;
    }

    const placa = req.params.placa;
    const {
        Marca,
        Modelo,
        Año,
        Color,
        Id_Cliente
    } = req.body;

    try {
        const vehicle = await Vehicles.findOne({ where: { Placa: placa } });
        if (!vehicle) {
            res.status(404).send({
                message: '¡No se encontró el Vehículo con la Placa especificada!'
            });
        }

        const updateVehicle ={
            Marca,
            Modelo,
            Año,
            Color,
            Id_Cliente
        } = req.body;

        await Vehicles.update(updateVehicle, {where: { Placa: placa } });
        res.status(200).send(updateVehicle);
    } catch (error) {
        res.status(500).send({
            message: error.message || '¡Ocurrió un error al actualizar el Vehículo!'
        });
    }
};

// Eliminar un Vehículo por su Placa
export const deleteVehicleController = async (req, res) => {
    const placa = req.params.placa;

    try {
        const vehicle = await Vehicles.findOne({ where: { Placa: placa } });
        if (!vehicle) {
            res.status(404).send({
                message: '¡No se encontró el Vehículo con la Placa especificada!'
            });
        }

        const deleted = await Vehicles.destroy({ where: { Placa: placa } });
        if (deleted) {
            res.status(200).send({
                message: '¡Vehículo eliminado correctamente!'
            });
        } else {
            res.status(404).send({
                message: '¡No se pudo eliminar el Vehículo!'
            });
        }
    } catch (error) {
        res.status(500).send({
            message: error.message || '¡Ocurrió un error al eliminar el Vehículo!'
        });
    }
};