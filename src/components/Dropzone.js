import React, { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { SiMicrosoftexcel } from "react-icons/si";

/* Accept only csv files */
function MyDropzone(props) {
  const { setData } = props;
  const { getRootProps, acceptedFiles } = useDropzone({
    maxFiles: 1,
    multiple: false,
  });
  
  let files = acceptedFiles;
  useEffect(() => {
    if (acceptedFiles.length >0) {
      setData({ acceptedFiles });
    }
  }, [acceptedFiles]);

  return (
    <section
      {...getRootProps({ className: "dropzone" })}
      className="container rounded-lg cursor-pointer border-2 border-richblack-25 border-dashed h-full w-full flex flex-col justify-center items-center outline-none"
    >
      {/* Insert icon here */}
      {!files.length ? (
        <div className="flex flex-col justify-center items-center gap-y-4">
          <SiMicrosoftexcel size="34px" color="green" />
          <p className="text-pure-greys-100 ">
            Drop your excel sheet here or
            <span className="text-blue-100"> browse</span>
          </p>{" "}
        </div>
      ) : (
        <div className="flex gap-1 flex-col justify-center items-center">
          <p className="">{files[0].path}</p>
          <SiMicrosoftexcel />
          <p className="text-red-100">Remove</p>
        </div>
      )}
    </section>
  );
}
export default MyDropzone;
