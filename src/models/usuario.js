const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        senha: {
            type: Number,
            required: true
        }
    },
    { timestamps: true })

const Cargo = mongoose.model('cargo', schema)

module.exports = Cargo
