const express = require("express")
const router = express.Router()

const AutenticacaoController = require("../controllers/AutenticacaoControle")
const {validarUsuario} = require("../validators/AuteticacaoValidetors")

router.post("/auth/register", validarUsuario, AutenticacaoController.registrar)

module.exports = router