import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var product = new Schema({
  productName: {
    type: String,
    required: [true, "This is a required field"],
    maxlength: [50, "Product name cannot be greater than 50 chars"],
    minlength: [3, "Product name cannot be smaller than 3 chars"]
  },
  productDescription: {
    type: String,
    required: true,
    maxlength: [500, "Product description cannot be greater than 300 chars"],
    minlength: [10, "Product description cannot be smaller than 10 chars"]
  },
  productImage:{
    type: String,
  },
  productPrice: {
    type: Number,
    required: [true, "This is a required field"]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

mongoose.models = {};

var Product = mongoose.model('Product', product);

export default Product;