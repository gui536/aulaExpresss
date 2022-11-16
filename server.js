//Importa a biblioteca do Express
import express from 'express'
import connection from './src/db.js'
import cors from 'cors'

const app = express()
const corsOptions = {
   origin: "http://localhost:80"
 }

app.use(cors(corsOptions))

app.get("/", (req, res) => {
   console.log("Bateu aqui")
   res.send("Oie")
})

app.get("/Clientes", (req, res) => {
   console.log("Bateu aqui em clientes")
   res.send("Oie")
})

app.get("/Carros", (req, res) => {
   console.log("Bateu aqui em carros")
   res.send("Oie")
})

connection.connect( (err) => { if (err) console.log(err)});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"))