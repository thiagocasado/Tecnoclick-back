import { DataTypes } from "sequelize";
import sequelize from "../database/db.js";

const Producto = sequelize.define("Producto", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    image:{
        type:DataTypes.STRING(300)
    },
    categoria:{
        type: DataTypes.STRING(50),
        allowNull:false
    },
    precio:{
        type:DataTypes.DECIMAL(10 ,2),
        allowNull:false
    },

    active: {
        type: DataTypes.BOOLEAN,
        default:true,
    }
},
{
    tableName:"productos",
    timestamps:false
});

module.exports = Producto;