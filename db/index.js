const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/products',{useMongoClient:true});
// db.on('error', console.error('connection error'));
// db.on('open', function() {
//   console.log('Successfully connected');
// })

module.exports = db;