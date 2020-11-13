const express = require('express'); // gerenciamento das rotas REST da aplicacao
const cors = require('cors');
const mongoose = require('mongoose'); // ORM Javascript
const requireDir = require('require-dir');

// Iniciando o App
const app = express();

app.use(express.json()) // permite enviar dados em formato JSON para a aplicacao

app.use((req, res, next) => { // Middleware CORS
  //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
  res.header("Access-Control-Allow-Origin", "*");
  //Quais são os métodos que a conexão pode realizar na API
  res.header("Access-Control-Allow-Methods", 'GET, PUT, POST, DELETE');
  app.use(cors());
  next();
}

);

// Iniciando o BD (conexao com o banco de dados)
mongoose.connect('mongodb://localhost:27017/nodeapi', {
  useUnifiedTopology: true,
  useNewUrlParser: true 
});
requireDir('./src/models');

/**
 * app.use recebe qualquer tipo de requisicao REST e repassa pra o arquivo de rotas
 */
app.use('/api', require("./src/routes"))

app.listen(3001);