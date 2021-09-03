const mongoose =require('mongoose');
const Schema = mongoose.Schema;
const formSchema = new Schema({
 firstName: {type:  String , required:true},
 lasttName: {type:  String , required:true},
 email: {type:  String , required:true},
 address: {type:  String , required:true},
 mobileNo: {type:  Number , required:true},
});
module.exports = mongoose.model('Form',formSchema);