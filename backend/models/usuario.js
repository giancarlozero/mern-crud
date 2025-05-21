const mongoose = require("mongoose")

const usuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    idade: {
        type: Number
    }
});

const Usuario = mongoose.model("Usuario", usuarioSchema);

model.exports = Usuario;