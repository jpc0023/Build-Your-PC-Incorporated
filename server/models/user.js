<<<<<<< HEAD
const { json } = require('express');
const {Schema, model}= require('mongoose');
const Product= require('./Product');
=======
const mongoose = require('mongoose');
>>>>>>> 367cdd00b1cd23a658714f56fb7fc8ec014ac433

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Order = require('./Order');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  orders: [Order.schema]
});

<<<<<<< HEAD
        password: {
            type: String,
            required: true
        },

        //a list of the user's saved products will be saved here
        savedProducts: [
            {
                type: Schema.Types.Array,
                ref: 'Product'
            }        ],
    },
    
    {
        toJSON: {
            virtuals: true
        }
    }
);
=======
// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});
>>>>>>> 367cdd00b1cd23a658714f56fb7fc8ec014ac433

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

<<<<<<< HEAD
module.exports= User;
=======
module.exports = User;
>>>>>>> 367cdd00b1cd23a658714f56fb7fc8ec014ac433
