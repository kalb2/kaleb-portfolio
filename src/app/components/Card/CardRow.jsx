import React from "react";

export default function CardRow({children}) {
  return (
    <div className="p-10 flex flex-wrap justify-evenly gap-10 border-b">
      {children}
    </div>
  );
}
