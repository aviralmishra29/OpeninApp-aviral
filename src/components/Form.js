import React from "react";
import { Link } from "react-router-dom";
import UploadFile from "../pages/UploadFile";

const Form = () => {
  return (
    <form className="mb-4 rounded-lg bg-white flex flex-col justify-center items-center py-2 px-1 mt-4">
      <div className="mb-4 w-[80%]">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Email address
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className=" appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4 w-[80%]">
        <label
          htmlFor="password"
          className="block text-gray-700 font-medium mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6 w-[80%] text-[#346BD4] ">Forgot Password</div>
      <Link
        to="/uploadFile"
        className="border w-[80%] bg-[#605BFF] text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
      >
        <button
          type="submit"
          className="w-full"
        >
          Sign In 
        </button>
      </Link>
    </form>
  );
};

export default Form;