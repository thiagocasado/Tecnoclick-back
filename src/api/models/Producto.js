import db from "../database/db.js";

async function obtenerTodos(){
    const [productos] = await db.query(
        "select * from productos"
    );
    return productos;
}
async function obtenerActivos(){
    const [productos] = await db.query(
        "select * from productos where activo = 1"
    );
    return productos;
}

/*
async function probarProductos(){
    try {
        const productos = await obtenerTodos();
        console.table(productos);
    }catch(error){
        console.error(error);
    }finally{
        await db.end();
    }
}

probarProductos();*/
export default{
    obtenerTodos,
    obtenerActivos
}