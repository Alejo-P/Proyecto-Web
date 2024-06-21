import Maintenance from "../models/maintenance_model.js";

// Crear y guardar un nuevo Mantenimiento
export const createMaintenanceController = (req, res) => {
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
export const getAllMaintenancesController = async (req, res) => {
    try {
        const maintenances = await Maintenance.findAll();
        res.status(200).json(maintenances);
    } catch (error) {
        res.status(500).send({
            message: error.message || '¡Ocurrió un error al obtener los Mantenimientos!'
        });
    }
};

// Obtener un Mantenimiento por su Id
export const getOneMaintenanceController = async (req, res) => {
    const id = req.params.id;

    try {
        const maintenance = await Maintenance.findOne({ where: {Id_Mantenimiento: id} });
        if (!maintenance) {
            res.status(404).send({
                message: '¡No se encontró el Mantenimiento con el Id especificado!'
            });
            return;
        }
        res.status(200).json(maintenance);
    } catch (error) {
        res.status(500).send({
            message: error.message || '¡Ocurrió un error al obtener el Mantenimiento!'
        });
    }
}

// Actualizar un Mantenimiento por su Id
export const updateMaintenanceController = async (req, res) => {
    if (!req.body.Placa || !req.body.Fecha_Mantenimiento || !req.body.Descripcion || !req.body.Costo || !req.body.Garantia || !req.body.Fecha_Siguiente_Mantenimiento) {
        res.status(400).send({
            message: '¡Faltan datos en la solicitud!'
        });
        return;
    }

    const id = req.params.id;
    const {
        Placa,
        Fecha_Mantenimiento,
        Descripcion,
        Costo,
        Garantia,
        Fecha_Siguiente_Mantenimiento
    } = req.body;

    try {
        const maintenance = await Maintenance.findOne({ where: { Id_Mantenimiento: id } });
        if (!maintenance) {
            res.status(404).send({
                message: '¡No se encontró el Mantenimiento con el Id especificado!'
            });
            return;
        }

        const updateMaintenance = {
            Placa,
            Fecha_Mantenimiento,
            Descripcion,
            Costo,
            Garantia,
            Fecha_Siguiente_Mantenimiento
        };

        const [updated] = Maintenance.update(updateMaintenance, {where: { Id_Mantenimiento: id }});
        if (updated) {
            res.status(200).send(updateMaintenance);
        } else {
            res.status(404).send({
                message: '¡No se pudo actualizar el Mantenimiento con el Id especificado!'
            });
        }
    } catch (error) {
        res.status(500).send({
            message: error.message || '¡Ocurrió un error al actualizar el Mantenimiento!'
        });
    }
};

// Eliminar un Mantenimiento por su Id
export const deleteMaintenanceController = async (req, res) => {
    const id = req.params.id;

    try {
        const maintenance = await Maintenance.findOne({ where: { Id_Mantenimiento: id } });
        if (!maintenance) {
            res.status(404).send({
                message: '¡No se encontró el Mantenimiento con el Id especificado!'
            });
            return;
        }

        const deleted = await Maintenance.destroy({ where: { Id_Mantenimiento: id } });
        if (deleted) {
            res.status(200).send({
                message: '¡Mantenimiento eliminado exitosamente!'
            });
        } else {
            res.status(404).send({
                message: '¡No se pudo eliminar el Mantenimiento con el Id especificado!'
            });
        }
    } catch (error) {
        res.status(500).send({
            message: error.message || '¡Ocurrió un error al eliminar el Mantenimiento!'
        });  
    }
};