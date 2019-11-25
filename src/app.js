const express = require("express") //chamar o express, servidor
const mongoose = require ("mongoose")
const bodyParser = require("body-parser") //serve para mostrar o body do json // p/ instalar npm install body-parser
//mesma coisa do código acima do body parser


const app = express()

mongoose.connect("mongodb+srv://soumayara:admin123@cluster0-rap3a.mongodb.net/clientes", {userNewUrlParser: true, useUnifiedTopology: true  }) // linha de comandp
let db = mongoose.connection; //representação
db.on("error", console.log.bind(console, "connection error"))//espera receber do console a conexão
db.once("open", function (){
  console.log("conexão feita com sucesso")
})

const index = require ('../src/routes/index')
const clientes = require('../src/routes/clientesRoutes')

app.use(bodyParser.json())

//app.use("/", index)
app.use("/clientes", clientes)

module.exports = app