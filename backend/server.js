const express = require("express")
const dotenv = require("dotenv")
dotenv.config()

const cors = require("cors")

const usuarioModel = require("./models/usuario")

const usuarioRoute = require("./routes/usuarios")

const app = express()
app.use(cors())
app.use(express.json())

const mongoose = require("mongoose")

mongoose.connect(process.env.URI).then(() => {
    console.log("Conectado ao MongoDB com sucesso")

    app.listen(process.env.PORT || 3000, (error) => {
        if (error) console.error(error)
            console.log(`Servidor rodando com sucesso na porta ${process.env.PORT}`)
    });
}).catch((error) => {
    console.error("Erro de conexão ao banco: ", error)
});

app.use(usuarioRoute)