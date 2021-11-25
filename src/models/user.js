const mongoose = require ("mongoose");
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dir: {
        type: String,
        required: true
    },
    cedula: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("User", userSchema);