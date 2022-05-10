const { json } = require('express');
const {Schema, model}= require('mongoose');
const Product= require('./Product');
const bcrypt= require('bcrypt');

const userSchema= new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },

        email: {
            type: String,
            required: true,
            match: [/.+@.+\..+/, 'Wrong input']
        },

        password: {
            type: String,
            required: true
        },

        //a list of the user's saved products will be saved here
        savedProducts: [
            {
                type: Schema.Types.Array,
                ref: 'Product'
            }        
        ],
    },
    
    {
        toJSON: {
            virtuals: true
        }
    }
);

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // compare the incoming password with the hashed password
  userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
  };

const User= model('User', userSchema);

module.exports= User;