import React from "react";

function Container({data}) {
  return (
    <div className="container w-[85%] mx-auto p-4 bg-[#F5F5F5] rounded-lg shadow-md">
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-200 text-gray-600">
            <th className="px-4 py-2 text-start">SI No.</th>
            <th className="px-4 py-2 text-start">Links</th>
            <th className="px-4 py-2 text-start">Prefix</th>
            <th className="px-4 py-2 text-start">Add Tags</th>
            <th className="px-4 py-2 text-start">Selected Tags</th>
          </tr>
        </thead>
        <tbody>
          {/* Placeholder for data rendering */}
          {data.map((item, index) => (
            <tr key={index} className="even:bg-gray-100 hover:bg-gray-200">
              <td className="px-4 py-2 text-start">{index + 1}</td>
              <td className="px-4 py-2 text-start">{item.links}</td>
              <td className="px-4 py-2 text-start">{item.prefix}</td>
              <td className="px-4 py-2 text-start">...</td>
              <td className="px-4 py-2 text-start">...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Container;
