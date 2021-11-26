const { request, response } = require("express");
const express = require("express");
const userSchema = require("../models/user");
const router = express.Router();
// crear usuario
router.post("/users", (request, response)=>{
    const user = userSchema(request.body);
    user.save().then((data) => response.json(data)).catch((error) => response.json({message: error}));
});

// ver todos los usuarios
router.get("/users", (request, response)=>{
    userSchema.find().then((data) => response.json(data)).catch((error) => response.json({message: error}));
});

// ver un usuario
router.get("/users/:id", (request, response)=>{
    userSchema.findById(request.params.id).then((data) => response.json(data)).catch((error) => response.json({message: error}));
});

//ver usuario por nombre
router.get("/users/name/:name", (request, response)=>{
    userSchema.find({name: request.params.name}).then((data) => response.json(data)).catch((error) => response.json({message: error}));
});

//ver usuario por numero de cedula
router.get("/users/cedula/:cedula", (request, response)=>{
    userSchema.find({cedula: request.params.cedula}).then((data)=> response.json(data)).catch((error) => response.json({message: error}));
})

//ver usuario por id 
router.put("/users/:id", (request, response)=>{
    userSchema.findByIdAndUpdate(request.params.id,request.body).then((data) => response.json(data)).catch((error) => response.json({message: error}));
});

//eliminar usuario 
router.delete("/users/:id", (request, response)=>{
    userSchema.findByIdAndDelete(request.params.id).then((data) => response.json(data)).catch((error) => response.json({message: error}));
});

// modificar usuario por id
router.put("/users/:id", (request, response)=>{
    const {id} = request.params;
    const {name, age, email, dir, cedula} = request.body;
    userSchema.updateOne({_id:id},{$set:{name, age, email, dir, cedula}}).then((data)=>response.json(data)).catch((error)=>response.json({message:error}));
})

//modificar usuario por cedula
router.put("/users/cedula/:cedula", (request, response)=>{
    const {name, age, email, dir, cedula} = request.body;
    userSchema.updateOne({cedula: request.params.cedula},{$set:{name, age, email, dir, cedula}}).then((data)=>response.json(data)).catch((error)=>response.json({message:error}));
})

module.exports = router;