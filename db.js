var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');
var db = low(adapter);
db.defaults({ citys: [], sessions: [] }) // tao mac dinh cho file db.json  // luu sessionId vao database
  .write()
  

  module.exports = db;