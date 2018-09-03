var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  imagePath: {type: String, required: true},
  title: {type: String, required: true},
  description: {type: String, required: true},
  price: {type: Number, requied: true}
});

/*
  mongoose will create our collection as lowercase plural of model name.
  EX: below creates `products` collection, containing `product` documents.
*/
module.exports = mongoose.model('Product', schema);
