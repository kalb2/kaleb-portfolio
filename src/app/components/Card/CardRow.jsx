import React from "react";
import cardboard from "../../assets/cardboard.png"

export default function CardRow({children}) {
  return (
    <div className="min-h-[calc(100vh-7rem)] p-10 flex overflow-x-scroll overscroll-x-contain snap-start snap-mandatory scroll-p-1  gap-10 border-b -z-30 items-center group" 
    style={{backgroundImage: `url(${cardboard.src})`, backgroundRepeat: "repeat",}}
    >
      {children}
    </div>
  );
}
