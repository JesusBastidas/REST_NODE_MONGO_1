const express = require("express");
const userSchema = require("../models/user");
const router = express.Router();
// crear usuario
router.post("/users", (request, response)=>{
    const user = userSchema(request.body);
    user.save().then((data) => response.json(data)).catch((error) => response.json({message: error}));
});

router.get("/users", (request, response)=>{
    userSchema.find().then((data) => response.json(data)).catch((error) => response.json({message: error}));
});

router.get("/users/:id", (request, response)=>{
    userSchema.findById(request.params.id).then((data) => response.json(data)).catch((error) => response.json({message: error}));
});

router.get("/users/name/:name", (request, response)=>{
    userSchema.find({name: request.params.name}).then((data) => response.json(data)).catch((error) => response.json({message: error}));
});

router.put("/users/:id", (request, response)=>{
    userSchema.findByIdAndUpdate(request.params.id,request.body).then((data) => response.json(data)).catch((error) => response.json({message: error}));
});
router.delete("/users/:id", (request, response)=>{
    userSchema.findByIdAndDelete(request.params.id).then((data) => response.json(data)).catch((error) => response.json({message: error}));
});

module.exports = router;