"use client";
import { useState } from "react";
import React from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center">
      <p>{count}</p>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        Add 1
      </button>
    </div>
  );
}

export default Counter;
