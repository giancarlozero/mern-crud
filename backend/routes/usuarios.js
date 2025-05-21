const express = require("express")
const mongoose = require("mongoose")
const Usuario = require("../models/usuario")

const router = express.Router()

// POST - Rota '/' - Cadastrar um novo usuário
router.post("/", async(req, res) => {
    const { nome, email, idade } = req.body;

    try {
        const usuarioAdicionado = await Usuario.create({
            nome: nome,
            email: email,
            idade: idade
        });

        res.status(201).json(usuarioAdicionado);
    } catch(error) {
        res.status(400).json({ error: error.message });
        console.log("Ocorreu um erro: ", error);
    }
});

// GET - Rota '/' - Listar todos os usuários cadastrados
router.get("/", async (req, res) => {
    try {
        const todosOsUsuarios = await Usuario.find();
        res.status(201).json(todosOsUsuarios)
    } catch(error) {
        res.status(400).json({ error: error.message });
    }
});

// GET - Rota '/:id' - Procurar um usuário com base no seu ID
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const usuario = await Usuario.findById(id);
        if (!usuario) {
            return res.status(404).json({ error: "Usuário não encontrado." });
        }
        res.status(200).json(user);
    } catch(error) {
        res.status(400).json({ error: error.message });
    }
});

// DELETE - Rota '/:id' - Procurar um usuário com base no seu ID e apagar esse usuário do banco
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const todosUsuarios = await Usuario.findById({ _id: id });
        const usuarioDeletado = await Usuario.findByIdAndDelete(id);
        res.status(201).json(todosUsuarios);
    } catch(error) {
        res.status(400).json({ error: error.message });
    }
});

// PATCH - Rota '/:id' - Procurar um usuário com base no seu ID e atualizar os dados desse usuário
router.patch("/:id", async (req, res) => {
    const { id } = req.params;

    const { nome, email, idade } = req.body;

    try {
        const editarUsuario = await Usuario.findByIdAndUpdate(id, req.body, { new: true });
        res.status(201).json(editarUsuario);
    } catch(error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
