const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Category } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    products: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Product.find(params).populate('category');
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate('category');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;

// const {User, Product}= require('../models');


// const resolvers= {
//     Query: {
//         //get current user
//         me: async () => 
//         {
//             //may not work, propable need auth to make to fesiable
//             return User.findOne({createdAt: -1})
//                 .select('-__v -password')
//                 .populate('savedProducts');
//         },

//         //get all users
//         users: async () =>
//         {
//             return User.find()
//                 .select('-__v -password')
//                 .populate('savedProducts');
//         },

//         //get a user with specific username
//         user: async (parent, {username}) =>
//         {
//             return User.findOne({username})
//                 .select('-__v -password')
//                 .populate('savedProducts');
//         },

//         //get all products
//         products: async () =>
//         {
//             return Product.find();
//         },

//         //get a specific user, either by category or name
//         product: async (parent, {name, category}) =>
//         {
//             if (name)
//             {
//                 return Product.findOne({name});
//             }

//             return Product.findOne({category});
//         },

//         //add mutation here
//     }
// };

// module.exports= resolvers;