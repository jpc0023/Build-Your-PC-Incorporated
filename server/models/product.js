const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);

<<<<<<< HEAD
        category: {
            type: String,
            required: true
        }
    }
);

const Product= model('Product', productSchema);

module.exports= Product;
=======
module.exports = Product;
>>>>>>> 367cdd00b1cd23a658714f56fb7fc8ec014ac433
