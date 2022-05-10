const { json } = require('express');
const {Schema, model}= require('mongoose');
const Product= require('./Product');

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
            }        ],
    },
    
    {
        toJSON: {
            virtuals: true
        }
    }
);

//maybe add password authentication below

const User= model('User', userSchema);

module.exports= User;