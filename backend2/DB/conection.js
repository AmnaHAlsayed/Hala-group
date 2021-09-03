const mongoose = require('mongoose');

const url = "mongodb+srv://amna:AmnaAlsayed@cluster0.o0qrk.mongodb.net/form?retryWrites=true&w=majority";

const connectDB = async() =>{
await mongoose.connect(url , {useUnifiedTopology : true ,useNewUrlParser:true});
console.log('db Connected');
};
module.exports =connectDB;