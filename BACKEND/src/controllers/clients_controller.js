import Clients from "../models/clients_model.js";
import bcrypt from 'bcrypt';

// Crear y guardar un nuevo Cliente
export const createClientController = async(req, res) => {
    // Validar la solicitud
    if (!req.body.Nombres || !req.body.Apellidos || !req.body.Cédula || !req.body.Contacto || !req.body.Correo || !req.body.Fecha_Nacimiento || !req.body.Contraseña || !req.body.Dirección || !req.body.Tipo_Usuario) {
        res.status(400).send({
            message: '¡Faltan datos en la solicitud!'
        });
        return;
    }

    try {
        const userFound = await Clients.findOne({where: {Correo: req.body.Correo}});
        if (userFound) {
            res.status(400).send({
                message: '¡El Correo ya está registrado!'
            });
            return;
        }
        
        // Crear un Cliente
        const client = {
            Nombres: req.body.Nombres,
            Apellidos: req.body.Apellidos,
            Cédula: req.body.Cédula,
            Contacto: req.body.Contacto,
            Correo: req.body.Correo,
            Fecha_Nacimiento: req.body.Fecha_Nacimiento,
            Contraseña: bcrypt.hashSync(req.body.Contraseña, 10),
            Dirección: req.body.Dirección,
            Tipo_Usuario: req.body.Tipo_Usuario
        };

        const user = await Clients.create(client);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send({
            message: error.message || '¡Ocurrió un error al guardar el Cliente!'
        });
    }

    // Guardar Cliente en la base de datos
    Clients.create(client)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || '¡Ocurrió un error al guardar el Cliente!'
            });
        });
};

// Obtener todos los Clientes de la base de datos
export const getAllClientsController = async(req, res) => {
    try{
        const response = await Clients.findAll();
        res.status(200).json(response);
    }
    catch (err){
        res.status(500).send({
            message: err.message || '¡Ocurrió un error al obtener los Clientes!'
        });
    }
};

// Obtener un Cliente por su Id
export const getOneClientController = async(req, res) => {
    const id = req.params.id;
    try {
        const response = await Clients.findOne({id});
        res.status(200).json(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || '¡Ocurrió un error al obtener el Cliente!'
        });  
    }
}

// Actualizar un Cliente por su Id
export const updateClientController = async(req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: '¡Faltan datos en la solicitud!'
        });
        return;
    }

    const id = req.params.id;

    try {
        const status = await Clients.update(req.body, {where:{ Id_Usuario: id }});
        if (status != 1) {
            res.status(404).send({
                message: `¡No se pudo actualizar el Cliente con el Id=${id}!`
            });
        }

        res.status(200).json(status);
        
    } catch (error) {
        res.status(500).send({
            message: error.message || '¡Ocurrió un error al actualizar el Cliente!'
        });
    }
};

// Eliminar un Cliente por su Id
export const deleteClientController = async(req, res) => {
    const id = req.params.id;

    try {
        const userFound = await Clients.findOne({where: {Id_Usuario: id}});

        if (!userFound) {
            res.status(404).send({
                message: `¡No se pudo encontrar el Cliente con el Id=${id}!`
            });
            return;
        }

        const status = await Clients.destroy({where: {Id_Usuario: id}});
        if (status != 1) {
            res.status(404).send({
                message: `¡No se pudo eliminar el Cliente con el Id=${id}!`
            });
        }

        res.status(200).json(status);
    } catch (error) {
        res.status(500).send({
            message: error.message || '¡Ocurrió un error al eliminar el Cliente!'
        });
    }
};