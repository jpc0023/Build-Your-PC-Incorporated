const {Schema, model}= require('mongoose');

const productSchema= new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },

        description: {
            type: String,
            required: true
        },

        price: {
            type: Number, //may change type to Decimal128 for decimal accuracy
            required: true
        },

        category: {
            type: String,
            required: true
        }
    },

    {
        toJSON: {
            virtuals: true
        }
    }
);

const Product= model('Product', productSchema);

module.exports= Product;