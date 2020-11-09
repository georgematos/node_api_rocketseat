const express = require('express');
const mongoose = require('mongoose');

// Iniciando o App
const app = express();

// Iniciando o BD
mongoose.connect('mongodb://localhost:27017/nodeapi', {
  useUnifiedTopology: true,
  useNewUrlParser: true 
})

/**
 * Primeira rota
 * Parametros
 * req: cabecalho, corpo, usuario, autenticacao, etc
 * res: resposta ao usuario
 */
app.get('/', (req, res) => {
  res.send("Hello Rocketseat")
})

app.listen(3001);