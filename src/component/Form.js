import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const submitHandel = () => {
    alert(name);
  };
  return (
    <div>
      <form onSubmit={submitHandel}>
        <h1>Registration Form</h1>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
        ></input>
        <input type="submit" placeholder="Submit Now"></input>
      </form>
      <h1>{name}</h1>
    </div>
  );
}
