import pkg from 'sequelize';
const { DataTypes } = pkg;
import sequelize from '../database.js';

// Definir el modelo para la tabla 'Clientes'
const Clients = sequelize.define('clientes', {
    Id_Cliente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    Nombres: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    Apellidos: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    Cédula: {
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: true
    },
    Contacto: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    Correo: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },
    Fecha_Nacimiento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    Contraseña: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    Dirección: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    Tipo_Usuario: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'clientes',
    timestamps: false
});

export default Clients;