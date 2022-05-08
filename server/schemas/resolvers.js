const {User, Product}= require('../models');


const resolvers= {
    Query: {
        //get current user
        me: async () => 
        {
            //may not work, propable need auth to make to fesiable
            return User.findOne({createdAt: -1})
                .select('-__v -password')
                .populate('products');
        },

        //get all users
        users: async () =>
        {
            return User.find()
                .select('-__v -password')
                .populate('products');
        },

        //get a user with specific username
        user: async (parent, {username}) =>
        {
            return User.findOne({username})
                .select('-__v -password')
                .populate('products');
        },

        //get all products
        products: async () =>
        {
            return Product.find();
        },

        //get a specific user, either by category or name
        product: async (parent, {name, category}) =>
        {
            if (name)
            {
                return Product.findOne({name});
            }

            return Product.findOne({category});
        },

        //add mutation here
    }
};

module.exports= resolvers;