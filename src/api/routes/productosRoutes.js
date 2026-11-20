import { Router } from "express";
import { listarProductos } from "../controllers/productosController.js";
const router = Router();
router.get("/", listarProductos);
export default router;
