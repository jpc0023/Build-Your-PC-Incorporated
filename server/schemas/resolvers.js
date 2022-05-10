const {User, Product}= require('../models');
const {AuthenticationError}= require('apollo-server-express');
const {signToken}= require('../utils/auth');

const resolvers= {
    Query: {
        //get current user
        me: async (parent, current, context) => 
        {
            if (context.user)
            {
                const userData= await User.findOne({_id: context.user._id})
                    .select('-__v -password')
                    .populate('savedProducts');
                
                return userData;
            }

            throw new AuthenticationError('Not loged in!');
        },

        //get all users
        users: async () =>
        {
            return await User.find()
                .select('-__v -password')
                .populate('savedProducts');
        },

        //get a user with specific username
        user: async (parent, {username}) =>
        {
            return await User.findOne({username})
                .select('-__v -password')
                .populate('savedProducts');
        },

        //get all products
        products: async () =>
        {
            return await Product.find({});
        },

        //get a specific user, either by category or name
        product: async (parent, {name}) =>
        {
           
            return await Product.findOne({name});    
        },

        //get all products by specific category
        productGroup: async (parent, {category}) =>
        {
            return await Product.find({category});
        }

    },

    //add mutations here
    Mutation: {
        login: async (parent, {email, password}) => 
        {
            const user= await User.findOne({email});
            if (!user)
            {
                throw new AuthenticationError('Wrong login info!');
            }

            const currentPW= await user.isCorrectPassword(password);
            if (!currentPW)
            {
                throw new AuthenticationError('Wrong login info!')
            }

            const token= signToken(user);
            return {user, token};
        },

        addUser: async (parent, args) => 
        {
            const user= await User.create(args);
            const token= signToken(user);

            return {user, token};
        },

        addProduct: async (parent, input) =>
        {
            const product= await Product.create(input);
            return product;
        }
    }
};

module.exports= resolvers;