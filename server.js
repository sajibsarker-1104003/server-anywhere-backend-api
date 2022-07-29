require('dotenv/config');

 const mongoose = require('mongoose');
 const app=require('./app');
 mongoose.connect(process.env.MONGODB_URL)
 .then(()=>console.log('Connected To MongoDB'))
 .catch(err=>console.error('MongoDB Connection Failed!!'));

 const port=process.env.PORT||3001;
 app.listen(port,()=>{
  console.log(`Running on port ${port}`);
 });


