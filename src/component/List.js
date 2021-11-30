import React from "react";

export default function List() {
  const dropDownList = (data) => {
    return <option>{data}</option>;
  };

  const country = [
    "bangladesh",
    "india",
    "pakistan",
    "napal",
    "vutan",
    "maldip",
  ];
  const dataItem = country.map(dropDownList);

  return (
    <div>
      <select>{dataItem}</select>
      {/* <ul>{dataItem}</ul> */}
    </div>
  );
}
