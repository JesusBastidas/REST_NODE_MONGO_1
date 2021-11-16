const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 9000;
const userRoutes = require("./routes/user");

//middleware
app.use(express.json());
app.use("/api", userRoutes);


//rutas 
app.get("/", (require, response)=>{
    response.send("Bienvenido a mi API");
} );

//mongodb conection 
mongoose.connect(process.env.mongodb_URI).then(()=> console.log("Conectado a la base de datos"))
.catch((error)=> console.error(error));
app.listen(port, () => console.log("server listening on port", port));