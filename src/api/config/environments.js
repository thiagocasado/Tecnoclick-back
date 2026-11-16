import dotenv from "dotenv";
//carga variables en node js
dotenv.config();

//exporta valores
export default{
    port: process.env.PORT,
    database:{
        host:process.env.DB_HOST,
        user:process.env.DB_USER,
        name:process.env.DB_NAME,
        password:process.env.DB_PASSWORD
    }
}