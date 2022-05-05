const db = require('../config/connection');
const { User, Product } = require('../models');

const userData = require('./userData.json');
const productData = require('./productData.json');

//need to add cpu, motherboard, and case data to productData

db.once('open', async () => {
  // clean database
  await User.deleteMany({});
  await Product.deleteMany({});
  await Professor.deleteMany({});

  // create each model
  const users = await User.insertMany(userData);
  const products = await Product.insertMany(productData);
  

  console.log('all data added to database!');
  process.exit(0);
});
