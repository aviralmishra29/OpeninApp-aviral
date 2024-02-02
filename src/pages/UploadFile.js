import React, {useCallback} from 'react';
import Sidebar from "../components/Sidebar";
import Profile from "../assests/Profile.png";
import Ring from "../assests/Rign.png";
import Button from "../components/Button";
import MyDropzone from "../components/Dropzone";

const UploadFile = () => {
  return (
    <div className="flex flex-row justify-start ">
      <Sidebar />
      <div className="flex flex-col gap-y-6 justify-start w-full bg-[#F8FAFF] ">

        <div className="flex flex-row justify-between px-5 py-3 items-center mt-5 w-auto  bg-[#F8FAFF] text-black font-bold">
          <div className="w-[60%]">Upload CSV</div>
          <div className="flex flex-row w-[10%] justify-evenly ">
            <img src={Ring} alt="ring" />
            <img src={Profile} alt="Profile" />
          </div>
        </div>

        <div className=" flex flex-col justify-center items-center h-full bg-[#F8FAFF]  ">
            <div className="flex flex-col justify-center items-center h-[367px] w-[596px] bg-white" >
            
            <MyDropzone />
                
            {/* <Button>Upload</Button> */}
            </div>
        </div>

      </div>
    </div>
  );
};

export default UploadFile;
