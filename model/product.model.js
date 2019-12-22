var mongoose = require('mongoose'); // use mongoose db

var productSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
}); // ghi lai nhung truong co trong database 

var Product = mongoose.model('Product',productSchema,'products') // luu vao citys o db.json //products ở đây là collection trong mongobd

module.exports = Product;