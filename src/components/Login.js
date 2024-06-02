import React, { useState, useRef } from "react";
import { checkValidData } from "../utils/validation";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 my-36 mx-auto left-0 right-0 bg-gradient-to-b from-slate-700 to-slate-500 rounded-md flex flex-col"
      >
        <h1 className="text-gray-100 p-2 ml-4 mt-2 text-2xl font-bold">
          {isSignInForm ? "Sign In Now" : "Sign Up Now"}
        </h1>
        {/* This input field will only be shown on Signup */}
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Username"
            className="p-2 m-6 bg-gray-100 rounded"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-2 m-6 bg-gray-100 rounded"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-6 bg-gray-100 rounded"
        />
        <button
          className="p-4 mx-6  text-gray-100 bg-emerald-600 rounded-md border border-gray-100"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-red-500 mx-6 mt-1 text-sm font-semibold">
          {errorMessage}
        </p>
        <p
          className="p-4 mb-2 mx-2 text-gray-100 cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New here? Signup Now."
            : "Already a User? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
