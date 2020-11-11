const mongoose = require('mongoose'); // ORM Javascript

// importacao do model de Product
const Product = mongoose.model('Product');

module.exports = {
  async index(req, res) {
    // busca todos os registros de Product
    const products = await Product.find();

    return res.json(products);
  },

  async show(req, res) {
    const product = await Product.findById(req.params.id);

    return res.json(product)
  },

  async store(req, res) {
    // criando instancia do model no BD
    const product = await Product.create(req.body)

    return res.json(product)
  },

  async update(req, res) {
    const product = await Product.findByIdAndUpdate(
      req.params.id, // id do produto
      req.body, // produto modificado vindo do clinete
      // new: true => retorna o produto atualizado
      { new: true }
    );

    return res.json(product);
  },

  async destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id);

    return res.send()
  }
};