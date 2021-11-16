const express = require("express");
const userSchema = require("../models/user");
const router = express.Router();
// crear usuario
router.post("/users", (request, response)=>{
    const user = userSchema(require.body);
    user.save().then((data) => response.json(data)).catch((error) => response.json({message: error}));
});

module.exports = router;