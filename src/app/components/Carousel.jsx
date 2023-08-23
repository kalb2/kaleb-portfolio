"use client"
import React, { useState } from "react";

const slides = [
  "/Code.png",
  "/next.svg",
  "/Code.png",
  "/next.svg",
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative text-white">
      <img
        src={slides[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="w-full h-auto"
      />
      <div className=" flex items-center justify-center absolute bottom-2 left-1/2 transform -translate-x-1/2">
        {currentIndex !== 0 && (
          <button
            onClick={prevSlide}
            className="arrow-button bg-white p-2 rounded-full mr-2"
          >
            <img
              src="/arrow-left-circle.svg"
              alt="Previous"
              className="w-4 h-4"
            />
          </button>
        )}
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`dot w-2 h-2 rounded-full ${index === currentIndex ? "bg-gray-400" : "bg-white"}`}
            ></button>
          ))}
        </div>
        {currentIndex !== slides.length - 1 && (
          <button
            onClick={nextSlide}
            className="arrow-button bg-white p-2 rounded-full ml-2"
          >
            <img
              src="/arrow-right-circle.svg"
              alt="Next"
              className="w-4 h-4"
            />
          </button>
        )}
      </div>
    </div>
  );
}

export default Carousel;
