import pkg from 'sequelize';
const { DataTypes } = pkg;
import sequelize from '../database.js';

// Definir el modelo para la tabla 'Tipo_Usuarios'
const asUsers = sequelize.define('tipoUsuario', {
    Id_Usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    Tipo_Usuario: {
        type: DataTypes.STRING(30),
        allowNull: false,
        validate: {
            isIn: [['Administrador', 'Ascesor', 'Empleado', 'Cliente']]
        },
        unique: true
    }
}, {
    sequelize,
    tableName: 'TipoUsuario',
    timestamps: false
});

export default asUsers;