import pkg from 'sequelize';
const { DataTypes } = pkg;
import sequelize from '../database.js';

// Definir el modelo para la tabla 'Vehiculos'
const Vehicles = sequelize.define('Vehiculos', {
    Placa: {
        type: DataTypes.STRING(10),
        primaryKey: true,
        allowNull: false
    },
    Marca: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    Modelo: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    Año: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Color: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    Id_Cliente: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'Vehiculos',
    timestamps: false
});

export default Vehicles;