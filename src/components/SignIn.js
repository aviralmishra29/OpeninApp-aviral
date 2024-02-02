import React from "react";
import Form from "./Form";
import SocialSignIn from "./SocialSignIn";
import Leftside from "../assests/Left side.png";
import vector from "../assests/Vector 7.png"

const SignIn = () => {
  return (
    <div className="flex flex-row justify-center items-center bg-gray-100">
      <div className="h-[80vh] w-[35vw] bg-[#F8FAFF] ">
        <img src={vector} alt="vector" className="" />
        <img src={Leftside} alt="Left-Side-Background" class="h-full w-full" />
      </div>
      <div className="flex flex-col justify-center items-center h-[80vh] w-[35vw] px-8 pb-8 bg-[#F8FAFF]">
        <div className=" h-[70%] w-[80%] bg-[#F8FAFF]" >
          <h2 className="text-2xl font-bold">Sign in</h2>
          <h1 className="text-sm font-semibold mb-4"> Sign in to you account</h1>
          <SocialSignIn />
          <Form />
          <div className="text-center mt-4">
            Don't have an account?{" "}
            <span className="text-[#346BD4]">
              Register here
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
