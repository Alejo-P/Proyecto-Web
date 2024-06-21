import pkg from 'sequelize';
const { DataTypes } = pkg;
import sequelize from '../database.js';

// Definir el modelo para la tabla 'Mantenimientos'
const Maintenance = sequelize.define('mantenimiento', {
    Id_Mantenimiento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    Placa: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    Fecha_Mantenimiento: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
    Descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    Costo: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false
    },
    Garantia: {
        type: DataTypes.STRING(5),
        allowNull: false,
        validate: {
            isIn: [['si', 'no']]
        }
    },
    Fecha_Siguiente_Mantenimiento: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'mantenimiento',
    timestamps: false
});

export default Maintenance;