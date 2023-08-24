"use client";
import React, { useState } from "react";
import CarouselControls from "./CarouselControls";
import CarouselImage from "./CarouselImage";

const slides = ["/Code.png", "/next.svg", "/Code.png", "/next.svg"];

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

  const dots = slides.map((_, index) => (
    <button
      key={index}
      onClick={() => goToSlide(index)}
      className={` h-2 w-2 rounded-full ${
        index === currentIndex ? "bg-gray-400" : "bg-black"
      }`}
    ></button>
  ));

  const hasPrev = currentIndex !== 0;
  const hasNext = currentIndex !== slides.length - 1;

  return (
    <div className="group relative h-full w-full">
      <CarouselImage src={slides[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      <CarouselControls
        hasPrev={hasPrev}
        hasNext={hasNext}
        onPrev={prevSlide}
        onNext={nextSlide}
        dots={dots}
        currentIndex={currentIndex}
      />
    </div>
  );
}

export default Carousel;


{
  /* <div className="relative h-full overflow-hidden">
<img
  src={slides[currentIndex]}
  alt={`Image ${currentIndex + 1}`}
  className="absolute left-0 top-0 h-full w-full object-contain"
/>
</div> */
}
