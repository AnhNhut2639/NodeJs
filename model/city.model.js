var mongoose = require('mongoose'); // use mongoose db

var citySchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    password: String,
    avatar: String
}); // ghi lai nhung truong co trong database 

var City = mongoose.model('City',citySchema,'citys') // luu vao citys o db.json

module.exports = city;