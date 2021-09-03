const express = require('express');
const { check } = require('express-validator');

const formControllers = require('../controllers/form-controllers');

const router = express.Router();
router.get('/:pid', formControllers.getFormById);


router.post(
  '/',
  [
    check('firstName')
      .not()
      .isEmpty(),
      check('lastName')
      .not()
      .isEmpty(),
    check('email').isLength({ min: 5 }),
    check('address')
      .not()
      .isEmpty()
      ,
      check('address')
      .not()
      .isEmpty()
  ],
  formControllers.createForm
);
module.exports = router;


