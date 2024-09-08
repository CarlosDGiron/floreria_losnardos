require("dotenv").config();
const express= require("express");
const app = express();
const floresRouter= require("./api/flores/flores.router");

app.use(express.json());

app.use("/api/flores",floresRouter);

app.listen(process.env.APP_PORT,()=>{
    console.log("Servidor escuchando en el puerto ",process.env.APP_PORT);
});