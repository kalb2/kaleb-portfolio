"use client";
import React from "react";
import { useState, useEffect } from "react";

const ChangeAge = () => {
  const [name, setName] = useState("Kaleb");
  const [age, setAge] = useState(0);

  useEffect(() => {
    console.log("Age Changed", age);
  }, [age]);

  return (
    <div className="flex flex-col items-center h-full justify-evenly">
      <div>
        <input
          type="text"
          placeholder="Type Name Here"
          value={name}
          maxLength={15}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div className="flex w-full justify-evenly">
        <button onClick={() => setAge((currentCount) => currentCount - 1)}>
          -
        </button>
        <p>
          {age}
          </p>
        <button onClick={() => setAge((currentCount) => currentCount + 1)}>
          +
        </button>
      </div>
      
        <p className="px-1">
          My name is <span className="underline">{name}</span> and I am {age} years old
        </p>
      
    </div>
  );
};

export default ChangeAge;
