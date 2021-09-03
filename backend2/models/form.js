
 const mongoose = require("mongoose");
 const Schema = mongoose.Schema;

 
 const formSchema = new mongoose.Schema({

  fullName : {
     type: String ,
     required: true
   } ,
  address : {
    type: String ,
    required: true
  },
  email: {
    type: String ,
    required: true
  },
  mobile : {
    type:Number,
   
    required: [true, 'User phone number required']
  
  },
  cv : {
    type : String ,
    required: false
  }
 }
 ,{
  collection: 'forms'
});



 module.exports  = mongoose.model('Forms', formSchema);
  