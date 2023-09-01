import React from "react";

export default function Concepts({ project }) {
  return (
    <div className="flex gap-5 flex-wrap">
      <ul className="font-bold uppercase">Concepts used:</ul>
      {project.conceptsUsed && project.conceptsUsed.length > 0 ? (
        project.conceptsUsed.map((concept, index) => (
          <li key={index}>{concept}</li>
        ))
      ) : (
        <>
          <li>Next.Js</li>
          <li>TailwindCSS</li>
          <li>Dynamic Routes</li>
        </>
      )}
    </div>
  );
}
