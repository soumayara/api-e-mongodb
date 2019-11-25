//import { Mongoose } from "mongoose";
const mongoose = require('mongoose');

const clientesSchema = new mongoose.Schema({
    nome: { type: String},
    email: {type: String},
    cpf: {type: Number},
    dataNascimento: {type: Date},
    estadoCivil: {type: String},
    telefone: {type: Number},
    comprou: {type: Boolean},
//required: true
},{
    versionKey: false
})

const clientes = mongoose.model('Clientes', clientesSchema); // dentro do model existe essa
//quem quiser consumir o bd terá que chamar dessa forma 'Alunas'
module.exports = clientes;