import React, { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <form className="w-3/12 my-36 mx-auto left-0 right-0 bg-gradient-to-b from-slate-700 to-slate-500 rounded-md flex flex-col">
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
          type="text"
          placeholder="Email address"
          className="p-2 m-6 bg-gray-100 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-6 bg-gray-100 rounded"
        />
        <button className="p-4 mx-6  text-gray-100 bg-emerald-600 rounded-md border border-gray-100">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
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
