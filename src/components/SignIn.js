import React from "react";
import Form from "./Form";
import SocialSignIn from "./SocialSignIn";
import Leftside from "../assests/Left side.png";
import vector from "../assests/Vector 7.png";
import subtract from "../assests/Subtract.png";
import responsiveIcons from "../assests/responsiveIcons.png";
import Icons from "../assests/SocialMedia_Icons.png";
import Ellipse from "../assests/Elli.png"

const SignIn = () => {
  return (
    <div className="flex flex-row justify-center items-center bg-gray-100 sm:my-14 ">
      <div  style={{backgroundImage: `url(${Leftside})`, backgroundSize:"cover",backgroundRepeat: "no-repeat",}} className="h-[80vh] w-[35vw] bg-[#F8FAFF]  max-sm:hidden">
        <div className="flex felx-row justify-start items-center px-6 h-[20%] w-full " > 
          <div className="" >  <img src={subtract} alt="vector" height='60px' width='60px' />  </div>
         </div>
        <div className="h-[60%] w-full text-white text-5xl font-bold flex flex-col justify-center items-center " > BASE </div>
        <div className="h-[20%] w-full flex flex-row justify-center items-center " > <img src={Icons} alt="icons" /> </div>

      
        {/* <img src={Leftside} alt="Left-Side-Background" className="h-full w-full "  /> */}
      </div>
      <div className="flex flex-col justify-center items-center h-[80vh] w-[35vw] px-8 pb-8 bg-[#F8FAFF] max-sm:w-full max-sm:h-[100vh] max-sm:px-0 max-sm:pb-0">
        <div className=" flex flex-row justify-start items-center px-4 max-sm:w-full max-sm:h-[80px] max-sm:bg-[#605BFF] " >
          <img src={subtract} alt="logo" /><span className=" text-white font-normal text-xl mx-[15px] " >Base  </span>
        </div>
        <div className=" h-[70%] w-[80%] bg-[#F8FAFF] max-sm:h-full max-sm:w-[90%] max-sm:py-5" >
          <h2 className="text-2xl font-bold">Sign in</h2>
          <h1 className="text-xs font-semibold mb-4"> Sign in to you account</h1>
          <SocialSignIn />
          <Form />
          <div className="text-center mt-4">
            Don't have an account?{" "}
            <span className="text-[#346BD4] ">
              Register here
            </span>
            <div className="max-sm:w-full  sm:hidden my-6 flex flex-row justify-center items-center h-9"> 
            <img src={responsiveIcons} alt="Icons"  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
