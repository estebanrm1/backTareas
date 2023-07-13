import express from "express";
import cors from 'cors';
import morgan from "morgan";
import path from 'path';
import 'dotenv/config';
import './src/database/bdConnection'
import tareasRouter from './src/routes/tareas.routes'

const app = express()

app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), ()=>{
    console.log('Estoy en el puerto '+app.get('port'));
})

app.use(cors()); //permitir conexiones remotas
app.use(express.json()); //permite a mi app recibir objetos en formato json en los request
app.use(morgan('dev')) //muestra en consola info extra de las solicitudes
app.use(express.static(path.join(__dirname, '/public')))

app.use('apitareas', tareasRouter)