import React from "react";
import Card from "./Card/Card";

export default function CardRow({children}) {
  return (
    <div className="p-5 flex gap-10">
      {children}
    </div>
  );
}
