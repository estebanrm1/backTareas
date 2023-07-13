import { Schema, model } from "mongoose";

const tareaShema = new Schema({
    contenidoTarea:{
        type: String,
        minLength:5,
        required: true
    }
});

const Tarea = model('tarea', tareaShema);

export default Tarea;