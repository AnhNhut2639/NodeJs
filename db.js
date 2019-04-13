var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');
var db = low(adapter);
db.defaults({ citys: []}) // tao mac dinh cho file db.json
  .write()
  

  module.exports = db;