const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
  /*useNewUrlParser: true, --> a
  useUnifiedTopology: true, --> b
  useCreateIndex: true, --> c
  useFindAndModify: false, --> d  */
  
  //the code above is commented out because a,b,c are true (by default) and d is false (by default)
  //according to the documents for mongoose 6.0 and up 
});

module.exports = mongoose.connection;
