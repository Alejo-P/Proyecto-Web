import asUsers from "../models/asUsers_model.js";

// Obtener todos los tipos de usuarios registrados en la base de datos
export const getAllAsUsersController = async (req, res) => {
    try {
        const asUsersList = await asUsers.findAll();
        res.status(200).json(asUsersList);
    } catch (error) {
        res.status(500).send({
            message: error.message || '¡Ocurrió un error al obtener los Tipos de Usuarios!'
        });
    }
};