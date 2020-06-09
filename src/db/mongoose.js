
var mongoose = require('mongoose');
//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1:27017/Tasker';
mongoose.connect(mongoDB, { useNewUrlParser: true ,useUnifiedTopology:true,useCreateIndex:true});
  
 
//   const me = new User({
//       name:'mGoodluck',
//       age:921
//   })

//   me.save().then((result) => {
//       console.log(result)
//   }).catch((err) => {
//       console.log('dead end')
//   });




