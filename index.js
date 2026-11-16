import sequelize from "./src/api/database/db.js"
import environments from "./src/api/config/environments.js";
import express from "express";
import cors from "cors";


//===============================================================
//const express = require("express");

const app = express();
const PORT = environments.port;

app.use(cors());
app.use(express.json()); //middleware

app.get("/api/prueba", function(req,res){
    res.json({
        mensaje: "Backend de Technoclick funcionando"
    })
});


//=============================================================

try {
    await sequelize.authenticate();
    console.log("Conexion con la bdd exitosa");
    
    app.listen(3000, function(){
        console.log(`servidor iniciado en http://localhost:${PORT}`)
    });

}catch (error){
    console.log("error al conectaro con la bdd", error)
}