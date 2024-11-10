const express = require("express");
const router = require("./routes/movieRouter");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

//! Middlewares pre-build
app.use(morgan("dev"));
app.use(cors({origin: ['http://localhost:8080', 'http://127.0.0.1:8080']}));//Permite o restringe el acceso a nuestro servidor.
app.use(express.json());// Convierte automáticamente  las solicitudes de formato JSON a objetos JavaScript.

//! Middleware realizado por mi
app.use((req,res,next)=>{
    console.log("Estamos pasando por mi propio middleware");
    next();
});

app.use((err,req,res,next)=>{
    res.status(err.statusCode || 500).json({error:err.message});
});

app.use(router);

module.exports = app;