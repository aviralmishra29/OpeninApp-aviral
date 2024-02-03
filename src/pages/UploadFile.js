import React, { useCallback } from "react";
import Sidebar from "../components/Sidebar";
import Profile from "../assests/Profile.png";
import Container from "../components/DataContainer";
import Button from "../components/Button";
import MyDropzone from "../components/Dropzone";
import { GoUpload } from "react-icons/go";
import { IoNotificationsOutline } from "react-icons/io5";
import Sidebar_logo from "../assests/Sidebar_logo.png";
import { Link } from "react-router-dom";
import Papa from "papaparse";
import { useState } from "react";

const UploadFile = () => {
  const [data, setData] = useState({});
  const [tableData, setTableData] = useState();

  const handleUpload = useCallback(() => {
    const file = data.acceptedFiles[0];

    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: (result) => {
        const jsonData = result.data;
        setTableData(jsonData);
      },
      error: (error) => {
        console.error("Papa Parse error:", error.message);
      },
    });
  }, [data, tableData]);

  return (
    <div className="flex flex-row justify-start ">
      <div className="max-sm:hidden">
        <Sidebar />
      </div>
      <div className="flex flex-col gap-y-6 justify-center w-full bg-[#F8FAFF] ">
        <div className="flex flex-row justify-between px-5 py-3 items-center mt-5 w-auto  bg-[#F8FAFF] text-black font-bold max-sm:w-full">
          <div className="max-sm:flex max-sm:flex-row max-sm:justify-evenly max-sm:items-center max-sm:w-[150px] ">
            <div className="w-auto  max-sm:hidden">Upload CSV</div>
            <div className="sm:hidden">
              {" "}
              <Link to="/sidebar"> = </Link>{" "}
            </div>
            <div className="flex flex-row justify-center gap-x-3 items-center sm:hidden">
              <span>
                <img src={Sidebar_logo} alt="Logo" />
              </span>
              <span className="text-black font-semibold">BASE</span>
            </div>
          </div>
          <div className="flex flex-row w-[10%] justify-evenly items-center max-sm:w-[150px] ">
            <IoNotificationsOutline size="24px" />
            <img src={Profile} alt="Profile" />
          </div>
        </div>

        <div className=" flex flex-col rounded-lg justify-center items-center h-full bg-[#F8FAFF] max-sm:w-full  ">
          <div className="flex flex-col rounded-lg justify-start items-center h-[367px] w-[596px] bg-white py-6 px-4 max-sm:w-full max-sm:px-8">
            <MyDropzone setData={setData} accept=".csv" />
            <Button
              disabled={!Object.keys(data).length}
              className="flex flex-row text-white py-4 justify-center items-center w-full rounded-lg mt-4 gap-x-2"
              onClick={handleUpload}
            >
              {" "}
              <GoUpload />
              Upload
            </Button>
          </div>
        </div>

        {tableData && (
          <div className="w-full ">
            <Container data={tableData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadFile;
