const express = require('express');
const {check} =require('express-validator')
const formControllers = require('../controllers/form-controllers');
const Form = require('../models/form');
const mongoose = require('mongoose');

const router = express.Router();


router.get('/:id' , formControllers.getformById);


// router.post('/',[
// check('firstName').not().isEmpty(),
// check('lastName').not().isEmpty(),
// check('mobile').not().isEmpty(),
// check('address').not().isEmpty(),
// check('email').normalizeEmail().isEmpty(),
// check('cv').not().isEmpty(),], formControllers.createNewUser);

router.post('/',(req, res) => {
    console.log("******* data")
    console.log(req.body);
    console.log("******* data")
    formControllers.createNewUser(req, res);
});


module.exports = router;
