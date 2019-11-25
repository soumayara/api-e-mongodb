const express = require("express")
const router = express.Router()
const controller = require("../controllers/clientesController")

/**
 * @api {get} /clientes
 * @apiGroup Clientes
 * *
 * @apiSucess
 */


router.post("/", controller.postClientes)
router.get("/", controller.getClientes)
router.get("/compradores", controller.getCompradores)
router.get("/:cpf", controller.getCpf) //chamamos com : quando o retorno é variavel como id ou cpf, que é um número diferente para cada pessoa
router.put("/:cpf", controller.update)
router.delete("/:cpf", controller.delete)

module.exports = router