import Vehicles from "../models/vehicles_model.js";

// Crear y guardar un nuevo Vehículo
export const create = (req, res) => {
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

    // Guardar Vehículo en la base de datos
    Vehicles.create(vehicle)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || '¡Ocurrió un error al guardar el Vehículo!'
            });
        });
};

// Obtener todos los Vehículos de la base de datos
export const findAll = (req, res) => {
    Vehicles.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || '¡Ocurrió un error al obtener los Vehículos!'
            });
        });
};

// Obtener un Vehículo por su Placa
export const findOne = (req, res) => {
    const placa = req.params.placa;
    Vehicles.findById(placa)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: '¡No se encontró el Vehículo con la Placa especificada!'
                });
            } else {
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || '¡Ocurrió un error al obtener el Vehículo!'
            });
        });
}

// Actualizar un Vehículo por su Placa
export const update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: '¡Faltan datos en la solicitud!'
        });
        return;
    }

    const placa = req.params.placa;

    Vehicles.update(req.body, {
        where: { Placa: placa }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: '¡Vehículo actualizado correctamente!'
                });
            } else {
                res.status(404).send({
                    message: '¡No se encontró el Vehículo con la Placa especificada!'
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || '¡Ocurrió un error al actualizar el Vehículo!'
            });
        });
};

// Eliminar un Vehículo por su Placa
export const remove = (req, res) => {
    const placa = req.params.placa;

    Vehicles.destroy({
        where: { Placa: placa }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: '¡Vehículo eliminado exitosamente!'
                });
            } else {
                res.status(404).send({
                    message: '¡No se encontró el Vehículo con la Placa especificada!'
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || '¡Ocurrió un error al eliminar el Vehículo!'
            });
        });
};