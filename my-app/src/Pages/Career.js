import React, { useCallback, useReducer } from 'react';

import Input from '../compnents/Input';
import Button from '../compnents/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_EMAIL,VALIDATOR_FILE
} from '../util/Validators';
import Footr from '../compnents/Footr';



import './Career.css'



const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid }
        },
        isValid: formIsValid
      };
    default:
      return state;
  }
};
const Career = () =>{
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      fullName: {
        value: '',
        isValid: false
      },
     address: {
        value: '',
        isValid: false
      },
      email: {
        value: '',
        isValid: false
      }
      ,
      mobile: {
        value: '',
        isValid: false
      },
      address: {
        value: '',
        isValid: false
      },
      cv: {
        value: '',
        isValid: false
      },

    },
    isValid: false
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: 'INPUT_CHANGE',
      value: value,
      isValid: isValid,
      inputId: id
    });
  }, []);

  const formSubmitHandler =async (event) => {
    alert("You are submitting >>8888" + formState.inputs.fullName.value);
    event.preventDefault();
    try {
      const bodyData = {
        'fullName': formState.inputs.fullName.value,
        "email": formState.inputs.email.value,
        "address" :formState.inputs.address.value,
        "mobile": formState.inputs.mobile.value,
        "cv": "formState.inputs.cv.value"
      }

      console.log("Body dsts in FE");
      console.log(JSON.stringify(bodyData))
      const responseData = await fetch('http://localhost:5000/api/form/', {
        crossDomain: true,
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
            'fullName': "formState.inputs.cv.value"
          }
        )
      })
      .then(res => res)
      .then(data => console.log(data)); 

       alert("You are submitting lsdje");
       console.log(responseData);
     console.log("finish execute");
    } catch (err) {
      console.log(err);
    } // send this to the backend!
  };

    return (
      <div  className="bg-dark container-fluid  ">
      <div className="Career">
<h2 >Sorry! We Dont Have Career yet. </h2>
<br/>
<h3 >You can fill the form and if we have career we contact with you.</h3>


    <form className="place-form" onSubmit={formSubmitHandler}>
      <Input
        id="fullName"
        element="input"
        type="text"
        label="Full Name"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid Name."
        onInput={inputHandler}
      />
      <Input
        id="address"
        element="input"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid address."
        onInput={inputHandler}
      />
      <Input
        id="email"
        element="input"
        label="Email"
        validators={[VALIDATOR_EMAIL()]}
        errorText="Please enter a valid Email."
        onInput={inputHandler}
      />
       <Input
        id="mobile"
        element="input"
        label="Mobile"
        validators={[VALIDATOR_MAXLENGTH(10)]}
        errorText="Please enter a valid mobile number."
        onInput={inputHandler}
      />
        <Input
        id="cv"
        element="input"
        type="file"
        label="CV"
        validators={[VALIDATOR_FILE()]}
        errorText="Please enter a valid CV."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        Submit
      </Button>
    </form>


</div>
    <Footr/>
   </div> );

};
export default Career ;