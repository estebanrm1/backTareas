import Tarea from "../models/tarea";

export const crearTarea = async (req, res)=>{
    try {
        const tareaNueva = new Tarea(req.body);
        await tareaNueva.save();
        res.status(201).json({
            mensaje:'La tarea se creo correctamente'
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al crear la tarea'
        });
    }
};

export const obtenerTareas = async (req, res)=>{
    try {
        const tareas = await Tarea.find();
        res.status(200).json(tareas);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje:'Error al buscar la lista de tareas'
        });
    }
};

export const borrarTarea = async (req, res)=>{
    try {
        await Tarea.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje:'La tarea fue eliminada correctamente'
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje:'Error, no se pudo eliminar la tarea'
        });
    }
};