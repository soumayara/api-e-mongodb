const app = require("./src/app")
const port = 3003

app.listen(port, function() { //escuta as requisições
  console.log(`app está rodando na porta ${port}`)
})
