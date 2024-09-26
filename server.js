//Importa a biblioteca do Express
import express from 'express'
import connection from './src/db.js'
import * as dotenv from "dotenv";

const app = express()
dotenv.config()
app.use(express.json())

app.get("/", (req, res) => {
   connection.connect( function (err) {
   if (err) console.log(err)
   });
   console.log("Requisição realizada no endpoint /")
})

app.get("/Clientes", (req, res) => {
   connection.connect( function (err) { 
      if (err) console.log(err)
         connection.query("SELECT * FROM Clientes", function (err,result,fields){
            console.log(result)
            res.send(result)
         })
   });
   
})

app.post("/Cliente", (req, res) => {
   connection.connect( function (err) { 
      if (err) console.log(err)
   });

   //pega os valores no body da requisição
   const cliente = req.body

   //opção usando string composta simples
   // const sql = 'insert into Clientes values ('+ cliente.cpf +','+ cliente.nome +','+ cliente.idade +')'
   //opção usando stringLiterals ao invés de uma string composta simples
   const sql = `INSERT INTO Clientes values ( ${cliente.cpf}, ${cliente.nome}, ${cliente.idade})`
   connection.query(sql, function (error,result,fields){
      if (error){throw(error)}
      console.log("Número de registros adicionados" + result.affectedRows);
      res.status(200).send("Registro adicionado com sucesso")
   })
})

app.listen(3000, () => console.log("Servidor rodando na porta 3000"))