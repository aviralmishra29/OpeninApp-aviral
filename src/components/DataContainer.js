import React, { useState } from "react";

function Container({ data }) {
  data.map((row, i) => {
    if (data[i]["selected tags"]) {
      data["selectedTags"] = data[i]["selected tags"].split(", ");
    }
  });
  const [selectedTags, setSelectedTags] = useState({});

  const tagSelected = (event) => {
    const value = event.target.value;
    const index_tag = value.split("_");
    const index = index_tag[0];
    const tag = index_tag[1];

    if (selectedTags[index]) {
      const tempArr = selectedTags[index];
      tempArr.push(tag);
      setSelectedTags({
        ...selectedTags,
        [index]: tempArr,
      });
    } else {
      setSelectedTags({
        ...selectedTags,
        [index]: [tag],
      });
    }
  };

  return (
    <div className="container w-[85%] mx-auto p-4 bg-[#F5F5F5] rounded-lg shadow-md mb-16">
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
          {data.map((item, index) => (
            <tr key={index} className="even:bg-gray-100 hover:bg-gray-200">
              <td className="px-4 py-2 text-start">{item.id}</td>
              <td className="px-4 py-2 text-start">{item.links}</td>
              <td className="px-4 py-2 text-start">{item.prefix}</td>
              <td className="px-4 py-2 text-start">
                <label>
                  <select id="tags" name="tags" onChange={tagSelected}>
                    {item["select tags"].split(", ").map((tag) => (
                      <option value={`${index}_${tag}`} key={tag}>
                        {tag}
                      </option>
                    ))}
                  </select>
                </label>
              </td>
              <td className="px-4 py-2 text-start">
                {selectedTags[index] &&
                  selectedTags[index].map((tag) => (
                    <span className="p-[4px] mx-[2px] rounded-sm bg-[#605BFF] text-white">
                      {tag} 
                    </span>
                  ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Container;
