const express = require('express');

const app = express();
/**
 * Parametros
 * req: cabecalho, corpo, usuario, autenticacao, etc
 * res: resposta ao usuario
 */
app.get('/', (req, res) => {
  res.send("Hello Rocketseat")
})

app.listen(3001);