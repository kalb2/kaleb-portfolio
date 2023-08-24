import React from "react";

function CarouselDots({ slides, currentIndex, goToSlide }) {
  const dots = slides.map((_, index) => (
    <button
      key={index}
      onClick={() => goToSlide(index)}
      className={` h-2 w-2 rounded-full ${
        index === currentIndex ? "bg-gray-400" : "bg-black"
      }`}
    ></button>
  ));

  return <div className="flex space-x-2">{dots}</div>;
}

export default CarouselDots;
