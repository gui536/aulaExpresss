import mysql from 'mysql2'
import * as dotenv from "dotenv"; // importar o dotenv para localizar as variáveis de ambiente

dotenv.config()

const connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

export default connection; //exportar
