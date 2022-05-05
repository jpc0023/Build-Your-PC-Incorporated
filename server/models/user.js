const {Schema, model}= require('mongoose');
const productSchema= require('./Product');

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
            type: true,
            required: ture
        },

        savedProducts: [productSchema]
    },
    
    {
        toJSON: {
            virtuals: true
        }
    }
);

//maybe add password authentication below

const User= model('User', userSchema);

module.exports= {User};