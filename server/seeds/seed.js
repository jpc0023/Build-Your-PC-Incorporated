const db = require('../config/connection');
const { User, Product } = require('../models');

const userData = require('./userData.json');
const productData = require('./productData.json');

//need to add cpu, motherboard, and case data to productData

db.once('open', async () => {
  // clean database
  await User.deleteMany({});
  await Product.deleteMany({});
  
  // create each model
  const users = await User.insertMany(userData);
  const products = await Product.insertMany(productData);
  

  let temp= products[0].category; //temporary variable to store product category
  let productType= []; //array to seperate products by category
  let tempArr=[]; //array to store products of 1 category

  //seperate products by category
  for (let i= 0; i < products.length ; i++)
  {
    
    if (temp !== products[i].category)
    {
        productType.push(tempArr);
        temp= products[i].category;
        tempArr= [];
        
    }
    tempArr.push(products[i]);  
  }
  //add last category to category array
  productType.push(tempArr);
  

  //function to get list of randomized products based on category
  function getSavedList()
  {
    let productList= [];
    for (let k= 0; k < productType.length; k++)
    {
          productList.push(productType[k][Math.floor(Math.random()* productType[k].length)]);
    }

    return productList;
  }


  //give each user a list of products
  for (let j= 0; j < users.length; j++)
  {
    users[j].savedProducts.push(getSavedList());  
  }


  console.log('all data added to database!');
  process.exit(0);
});
