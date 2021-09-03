const uuid = require('uuid/v4');

const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');

const Form = require('../models/form-model');

let DUMMY_PLACES = [
  {
    id: 'p1',
    firstName:'Amna',
    lastName:'Alsayed',
    email:'amna@smd.com',
    address: 'tulkarm',
   mobileNo:'056465'
  }
];

const getFormById = (req, res, next) => {
  const formId = req.params.pid; // { pid: 'p1' }

  const form = DUMMY_PLACES.find(p => {
    return p.id === formId;
  });

  if (!form) {
    throw new HttpError('Could not find a place for the provided id.', 404);
  }

  res.json({ form }); // => { place } => { place: place }
};

// function getPlaceById() { ... }
// const getPlaceById = function() { ... }


const createForm = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  const { firstName, lastName, email, address,mobileNo } = req.body;

  

  // const title = req.body.title;
  const createdForm = new Form({
    firstName,
    lastName,
    email,
  address,
  mobileNo
  });

  try {
    await createdForm.save();
  } catch (err) {
    const error = new HttpError(
      'Creating place failed, please try again.',
      500
    );
    return next(error);
  }
  
  res.status(201).json({ form: createdForm });
};


exports.getFormById = getFormById;

exports.createForm = createForm;

