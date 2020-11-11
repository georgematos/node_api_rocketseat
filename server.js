const express = require('express'); // gerenciamento das rotas REST da aplicacao
const cors = require('cors');
const mongoose = require('mongoose'); // ORM Javascript
const requireDir = require('require-dir');

// Iniciando o App
const app = express();
app.use(express.json()) // permite enviar dados em formato JSON para a aplicacao
app.use(cors());

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