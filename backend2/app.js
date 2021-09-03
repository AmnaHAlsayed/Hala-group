const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const formRouter = require('./routes/form-routes');
const HttpError = require('./models/http-error');

const formControllers = require('./controllers/form-controllers-2');


 mongoose.connect('mongodb+srv://amna:AmnaALsayed@cluster0.o0qrk.mongodb.net/form?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(()=>{console.log('ConectedDatA Base');}).catch(err=>{
  console.log('DataBase not conected'+err);
});


const app = express();
app.use(bodyParser.json());
// app.use('/api/form', formRouter);
app.post('/api/form', formControllers.createNewUser);
app.use((error,req,res,next) =>{
    throw new HttpError('Could Not find the form Or Something Error',422);
});
app.use((error,req,res,next) =>{
if(res.headerSent){
    return next(error);
}
res.status(error.code || 500)
res.json({message: error.message||'anknown error'});
});

//const uri = "mongodb+srv://amna:AmnaAlsayed@cluster0.o0qrk.mongodb.net/form?retryWrites=true&w=majority";

app.listen(5000);