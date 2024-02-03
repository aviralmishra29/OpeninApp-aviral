import React from 'react';
import Button from './Button';
import googleIcon from '../assests/google-icon 1.png'
import appleIcon from '../assests/apple 1.png'

const SocialSignIn = () => {
  return (
    <div className="flex justify-center items-center mt-4">
      <Button className="flex flex-row justify-around items-center w-full bg-white  font-light py-2 px-2 rounded-xl focus:outline-none focus:shadow-outline mr-1 text-xs">
        <img src={googleIcon} alt='googleIcon' />
        Sign in with Google
      </Button>
      <Button className="flex flex-row justify-around items-center w-full  bg-white font-light py-2 px-2 rounded-xl focus:outline-none focus:shadow-outline text-xs">
        <img src={appleIcon} alt='appleIcon' />
        Sign in with Apple{" "}
      </Button>
    </div>
  );
};

export default SocialSignIn;
