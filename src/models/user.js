const mongoose = require ("mongoose");
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    age: {
        type: Number,
        require: false
    },
    email: {
        type: String,
        require: false
    }
});

module.exports = mongoose.model("User", userSchema);