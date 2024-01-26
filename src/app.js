import express from 'express';
import morgan from 'morgan';
import { config } from 'dotenv';
import productsRouter from './routes/products.routes.js';

config();//para usar las variables de entorno

const app = express();

//Settings------
app.set('view engine','ejs');



//Middlewares---------
app.use(express.json());//leer json
app.use(express.urlencoded({extended: false}));//para recibir datos del formulario
app.use(morgan('dev'));
app.use('/api/products', productsRouter);


export default app;