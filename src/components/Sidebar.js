import React from "react";
import Sidebar_logo from "../assests/Sidebar_logo.png";
import Category from "../assests/Category.png";
import Analytics from "../assests/Analytics.png";
import Invoice from "../assests/Invoice.png";
import Schedule from "../assests/Schedule.png";
import Notification from "../assests/Notification.png";
import Setting from "../assests/Settings.png"
import Calendar from "../assests/Group 7564.png"

const Sidebar = () => {
  return (
    <div className="w-[15vw] h-[100vh] flex flex-col gap-y-6 ">
      <div className="flex flex-row justify-center gap-x-3 items-center mt-3 py-2">
        <span>
          <img src={Sidebar_logo} alt="Logo" />
        </span>
        <span className="text-black font-semibold">BASE</span>
      </div>
      <div className=" bg-white  ">
        <ul className="flex flex-col gap-y-6 justify-center items-center py-4 ">
          <li className="flex flex-row justify-start gap-x-3 px-5 w-full " >
  <img src={Category} alt="" width='24px' height='24px' />
            Dashboard
          </li>
          <li className="flex flex-row justify-start gap-x-3 px-5 py-3  w-full " >
            <img src={Analytics} alt="" />
          </li>
          <li className="flex flex-row justify-start gap-x-3 px-5 py-3  w-full " >
            <img src={Invoice} alt="" />
          </li>
          <li className="flex flex-row justify-start gap-x-3 px-5 py-3  w-full " >
            {" "}
            <img src={Schedule} alt="" />
          </li>
          <li className="flex flex-row justify-start gap-x-3 px-5 py-3  w-full " >
            <img src={Calendar} alt="" />
          </li>
          <li className="flex flex-row justify-start gap-x-3 px-5 py-3  w-full " >
            {" "}
            <img src={Notification} alt="" />
          </li>
          <li className="flex flex-row justify-start gap-x-3 px-5 py-3  w-full " >
            {" "}
            <img src={Setting} alt="" /> 
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
