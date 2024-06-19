import Maintenance from "../models/maintenance_model.js";

// Crear y guardar un nuevo Mantenimiento
export const create = (req, res) => {
    // Validar la solicitud
    if (!req.body.Placa || !req.body.Fecha_Mantenimiento || !req.body.Descripcion || !req.body.Costo || !req.body.Garantia || !req.body.Fecha_Siguiente_Mantenimiento) {
        res.status(400).send({
            message: '¡Faltan datos en la solicitud!'
        });
        return;
    }

    // Crear un Mantenimiento
    const maintenance = {
        Placa: req.body.Placa,
        Fecha_Mantenimiento: req.body.Fecha_Mantenimiento,
        Descripcion: req.body.Descripcion,
        Costo: req.body.Costo,
        Garantia: req.body.Garantia,
        Fecha_Siguiente_Mantenimiento: req.body.Fecha_Siguiente_Mantenimiento
    };

    // Guardar Mantenimiento en la base de datos
    Maintenance.create(maintenance)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || '¡Ocurrió un error al guardar el Mantenimiento!'
            });
        });
};

// Obtener todos los Mantenimientos de la base de datos
export const findAll = (req, res) => {
    Maintenance.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || '¡Ocurrió un error al obtener los Mantenimientos!'
            });
        });
};

// Obtener un Mantenimiento por su Id
export const findOne = (req, res) => {
    const id = req.params.id;

    Maintenance.findById(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: '¡No se encontró el Mantenimiento con el Id especificado!'
                });
            } else {
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || '¡Ocurrió un error al obtener el Mantenimiento!'
            });
        });
}

// Actualizar un Mantenimiento por su Id
export const update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: '¡Faltan datos en la solicitud!'
        });
        return;
    }

    const id = req.params.id;

    Maintenance.update(req.body, {
        where: { Id_Mantenimiento: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: '¡Mantenimiento actualizado correctamente!'
                });
            } else {
                res.status(404).send({
                    message: '¡No se encontró el Mantenimiento con el Id especificado!'
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || '¡Ocurrió un error al actualizar el Mantenimiento!'
            });
        });
};

// Eliminar un Mantenimiento por su Id
export const remove = (req, res) => {
    const id = req.params.id;

    Maintenance.destroy({
        where: { Id_Mantenimiento: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: '¡Mantenimiento eliminado exitosamente!'
                });
            } else {
                res.status(404).send({
                    message: '¡No se encontró el Mantenimiento con el Id especificado!'
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || '¡Ocurrió un error al eliminar el Mantenimiento!'
            });
        });
};