const { v4: uuidv4 } = require('uuid');
const { valditionResult } = require('express-validator');
const Forms = require('../models/form');
const mongoose = require('mongoose');
const HttpError = require('../models/http-error');

mongoose.connect('mongodb+srv://amna:AmnaALsayed@cluster0.o0qrk.mongodb.net/form?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});
let user = [{
    id: 'p1',
    firstName: 'amna',
    lastName: 'nnna',
    address: 'abudhabi',
    mobileNo: '045555'
    , cv: 'file.txt'
}];



const getformById = (req, res, next) => {
    const formid = req.params.pid;
    const form = user.find(p => {
        return p.id === formid;
    })

    if (!form) {
        throw new HttpError('Could not find form', 404);

    }
    res.json({ form });
};
const createNewUser = async (req, res, next) => {
    console.log("Rasssssss");
    console.log(req.body);
    console.log("Rasssssss........");
    const id = uuidv4();
    const createdUser = new Forms({
        fullName: req.body.fullName,
        address: req.body.address,
        email: req.body.email,
        mobile: req.body.mobile,
        cv: req.body.cv
    });
    try {
        createdUser.save();
    }
    catch (err) {
        const error = new HttpError('creating Form is failed ', 500);
        return next(error);
    }

    res.status(201).json({ form: createdUser });
};

exports.getformById = getformById;
exports.createNewUser = createNewUser;