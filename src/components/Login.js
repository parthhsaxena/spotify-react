import React, { useState, useRef } from "react";
import { checkValidData } from "../utils/validation";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      //SignUp Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "- " + errorMessage);
        });
    } else {
      // SignIn Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "- " + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 my-36 mx-auto left-0 right-0 bg-gradient-to-b from-stone-300 to-stone-400 rounded-md flex flex-col"
      >
        <h1 className="text-stone-800 p-2 ml-4 mt-2 text-2xl font-bold">
          {isSignInForm ? "Sign In Now" : "Sign Up Now"}
        </h1>
        {/* This input field will only be shown on Signup */}
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Username"
            className="p-2 m-6 bg-stone-100 rounded"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-2 m-6 bg-stone-100 rounded"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-6 bg-stone-100 rounded"
        />
        <button
          className="p-4 mx-6 bg-stone-300 text-stone-800 hover:bg-stone-600 hover:text-[#ffb400] rounded-md border border-stone-100"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-red-600 mx-6 mt-1 text-sm font-semibold">
          {errorMessage}
        </p>
        <p
          className="p-4 mb-2 mx-2 text-stone-800 hover:text-[#ffb400] cursor-pointer"
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
