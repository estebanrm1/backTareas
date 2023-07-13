import express from "express";
import cors from 'cors';
import morgan from "morgan";
import path from 'path';
import 'dotenv/config';

const app = express()

app.set('port', process.env.PORT || 4000);