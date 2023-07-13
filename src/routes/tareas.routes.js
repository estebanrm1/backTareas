import { Router } from "express";
import { borrarTarea, crearTarea, obtenerTareas } from "../controllers/tareas.controllers";

const router = Router();

router.route('/tareas').get(obtenerTareas).post(crearTarea);
router.route('/tareas/:id').delete(borrarTarea)

export default router