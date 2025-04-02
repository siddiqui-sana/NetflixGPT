import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const email = useRef(null); // this referce created, we will refer (pass it as ref) to the email input field as prop.
  const password = useRef(null); //will pass it as ref to the password input field as prop.

  const handleButtonClick = () => {
    //Validate the form
    const message = checkValidate(email.current.value, password.current.value);
    console.log(email.current.value, password.current.value); //This will print the value of email and password that was typed in the input field.
    setErrorMessage(message); //This will set the error message that was returned from the checkValidate function.
    console.log("Message", message); //This will print the message that was returned from the checkValidate function.

    //Sign In or Sign Up
  };
  return (
    <div class="w-screen h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg')] bg-cover bg-center flex items-center justify-center">
      <Header />
      <div className="flex items-center justify-center w-3/122">
        <form
          onSubmit={(e) => e.preventDefault()} //This will prevent the form from getting submitted.
          className="bg-black bg-opacity-80 p-8 rounded-lg"
        >
          <h1 className="text-white font-bold text-3xl py-2 pb-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              id="full name"
              className="rounded-sm bg-black border border-gray-300 text-sm  w-full p-4 dark:bg-black-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Full Name"
              required
            />
          )}
          <div className="py-3">
            <input
              ref={email} //This email is the reference to the email input field.
              type="text"
              id="email"
              className="rounded-sm bg-black border border-gray-300 text-sl  w-full p-4 dark:bg-black-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Email"
              required
            />
          </div>
          <div className="py-3">
            <input
              ref={password} //This password is the reference to the password input field. This will help to get reference to this input field.
              type="text"
              id="password"
              className="rounded-sm bg-black border border-gray-300 text-sm  w-full p-4 dark:bg-black-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Password"
              required
            />
            <p className="text-red-500">{errorMessage}</p>
          </div>
          <div className="py-3">
            <button
              type="submit"
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-sm text-sm w-full sm:w-auto px-24 py-4 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              onClick={handleButtonClick}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
          </div>
          <p
            className="text-white py-4 curson-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign up now"
              : "Already a member? Sign in now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
