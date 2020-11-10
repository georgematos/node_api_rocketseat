const mongoose = require('mongoose'); // ORM Javascript

// importacao do model de Product
const Product = mongoose.model('Product');

// criando instancia do model no BD
// Product.create({
//   title: 'React Native',
//   description: 'Build native apps with React',
//   url: 'http://github.com/facebook/react-native'
// })

module.exports = {
  async index(req, res) {
    // busca todos os registros de Product
    const products = await Product.find();

    return res.json(products);
  }
};