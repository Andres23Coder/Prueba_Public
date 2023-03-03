import express from 'express';


const app = express();

//Middleware para que express interprete objetos JSON
app.use(express.json())


export default app