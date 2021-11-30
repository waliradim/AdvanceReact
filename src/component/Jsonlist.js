import React from "react";

export default function Jsonlist() {
  const myList = [
    {
      id: 1,
      name: "Sm Ashraf Ali",
      home: "kandalonka",
    },
    {
      id: 2,
      name: "Sm Mahmud wali",
      home: "kandalonka",
    },
    {
      id: 3,
      name: "Champa Ali",
      home: "Gala",
    },
    {
      id: 4,
      name: "Sonali Ali",
      home: "Gala",
    },
    {
      id: 5,
      name: "Shampa Ali",
      home: "Goalbag",
    },
  ];

  const dataItems = myList.map((data) => {
    return (
      <>
        <li>{data.name}</li>
        <li>{data.home}</li>
      </>
    );
  });
  return (
    <div>
      <ul>{dataItems}</ul>
    </div>
  );
}
