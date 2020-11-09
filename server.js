const express = require('express'); // gerenciamento das rotas REST da aplicacao
const mongoose = require('mongoose'); // ORM Javascript
const requireDir = require('require-dir'); // importa todos os arquivos de um diretorio

// Iniciando o App
const app = express();

// Iniciando o BD
mongoose.connect('mongodb://localhost:27017/nodeapi', {
  useUnifiedTopology: true,
  useNewUrlParser: true 
});
requireDir('./src/models');

const Product = mongoose.model('Product');

/**
 * Primeira rota
 * Significado dos parametros
 * req: cabecalho, corpo, usuario, autenticacao, etc
 * res: resposta ao usuario
 */
app.get('/', (req, res) => {
  Product.create({
    title: 'React Native',
    description: 'Build native apps with React',
    url: 'http://github.com/facebook/react-native'
  })
  
  return res.send("Hello Rocketseat")
})

app.listen(3001);