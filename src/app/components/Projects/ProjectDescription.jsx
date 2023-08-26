import React from "react";

export default function ProjectDescription({description}) {
  return (
    <div className="w-1/3 grow p-3">
      <p className="text-sm">
        {description}
      </p>
    </div>
  );
}
