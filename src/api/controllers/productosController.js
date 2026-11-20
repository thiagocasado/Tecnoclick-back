import Producto from "../models/Producto.js";

async function listarProductos(req,res) {
    try {
        const productos = await Producto.obtenerActivos();
        res.json(productos);
    } 
    
    catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje:"No se pudieron obtener los productos"
        })

    }
}
export {listarProductos};