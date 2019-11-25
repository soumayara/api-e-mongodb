const Clientes = require ('../model/clientes');
//const Joi = require()

exports.postClientes = (req, res) =>{
    let cliente = new Clientes(req.body)//criar um novo pacote de cliente
    cliente.save(function (err){
        if(err){
            return res.status(500).send(err)
        }
        return res.status(201).send({
            status: "true",
            mensagem: "Aluna incluida com sucesso"

        })
    })
}

 exports.get = (req, res) =>{
     Clientes.find(function (error, clientes){
         if (error) res.status(500).send(error)
         res.status(200).send(clientes)
     })
 }

 exports.getClientes = (req, res) => {
     Clientes.find(function (error, clientes){
        if (error) res.status(500).send(error)
        res.status(200).send(clientes)
     })
 }

 exports.getCompradores = (req, res) => {
    Clientes.find({comprou:true},function (error, clientes){
        if (error) res.status(500).send(error);
        const clientesRetorno = clientes.map(cliente => { //filtrar um mapa pra mostrar só oque queremos ver da array
            return{
                nome: cliente.nome,
                email: cliente.email,
            }
        })

        res.status(200).send(clientesRetorno)
    })
 }

 exports.getCpf = (req, res) => {
     const cpf = req.params.cpf; //colocamos como params pq ja demos o valor 'cpf' na rota
     Clientes.find({ cpf }), function (error, cliente) {
         if (error) res.status(500).send(error);
         res.status(200).send(cliente);
     }
 }

 exports.update = (req, res) => {
    if(!validaFormulario(req.body)) return res.status(400).send({mensagem:"campos invalidos"})

     Clientes.updateOne(
         {cpf: req.params.cpf},
         {$set: req.body},
         {upsert: true},
         function (error){
             if (error) return res.status(500).send(error)
             res.status(200).send({message : "Atualizado com sucesso"})
         })
 }

 const validaFormulario= (campos) => {

    const schema = {
        nome: Joi.string().min(1).required(), //npm install joi, quantidade minima de caracteres, 
        email: Joi.string().min(1).required(),
    }
    const validation= Joi.validate(campos, schema);
    if (validation.error){
        return false;
    }
    return true;
 }

  exports.delete = (req, res) => {
      const cpf = req.params.cpf;

     Clientes.findOne({ cpf }, function (error, cliente) {
          if (error) return res.status(500).send(error);

         if(!cliente) {
              return res.status(200).send({ message: `infelizmente não localizamos esse cpf`})
         }

          cliente.remove(function (error){
            if (!error){
                 res.status(200).send({message: "Cliente removido com sucesso"})
             }

          })
      })
 }