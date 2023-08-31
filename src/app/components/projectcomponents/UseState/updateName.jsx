"use client";
import { useState } from "react";

const nameList = ["Sam", "Kaleb", "Alex", "Sean"];

export default function UpdateName() {
  const [name, setName] = useState(nameList);

  function changeName() {
    setName((currentName) => {
      return currentName.slice(1);
    });
  }

  return (
    <div className="flex flex-col items-center">
      <button onClick={changeName}>Change Name</button>
      <br></br>
      <h1>{name}</h1>
    </div>
  );
}
