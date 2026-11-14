// importando o modulo do mysql para conectar ao banco de dados
const mysql = require("mysql2/promise") 

// Cria uma pool de conexão, para evitar erros no banco por supelotação
const pool = mysql.createPool(
    { host: process.env.DB_HOST, // onde o banco esta hospedado
      user: process.env.DB_USER,  // USUARIO QUE FARA A CONEXAO
      password: process.env.DB_PASSWORD, // SENHA DO USUARIO 
      database: process.env.DB_NAME,    // BANCO AO QUAL SE DESEJA CONECTAR

      // se todos estivram ocupados , deixam um esperando , sem dar erro
     waitForConnections: true, 

     // quantidade  máxima de conexões 
     connectionLimit: 10, 

     queueLimit: 0  // lista ilimitada  - maximo de lista de espera 
 }
)




// exportão da pool 
module.exports = pool