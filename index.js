import db from "./src/api/database/db.js"
import environments from "./src/api/config/environments.js";
import express from "express";
import cors from "cors";
import productosRoutes from "./src/api/routes/productosRoutes.js";

//===============================================================

const app = express();
const PORT = environments.port;

app.use(cors());
app.use(express.json()); //middleware
app.use("/api/productos",productosRoutes);
app.get("/api/prueba", function(req,res){
    res.json({
        mensaje: "Backend de Technoclick funcionando"
    })
});


//=============================================================
// conexion y arranque del sv
try {
    const conexion = await db.getConnection();
    console.log("Conexion con la bdd exitosa");
    conexion.release(); //segundo plano
    app.listen(PORT, function(){
        console.log(`servidor iniciado en http://localhost:${PORT}`)
    });

}catch (error){
    console.log("error al conectaro con la bdd", error)
}