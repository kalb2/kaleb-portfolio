import React from "react";

function CarouselControls({
  hasPrev,
  hasNext,
  onPrev,
  onNext,
  dots,
  currentIndex,
}) {
  return (
    <div className="absolute bottom-2 left-1/2 hidden -translate-x-1/2 transform items-center justify-center group-hover:flex">
      <button
        onClick={onPrev}
        disabled={!hasPrev}
        className={`arrow-button mr-2 rounded-full bg-black p-2 ${
          !hasPrev ? "opacity-50" : ""
        }`}
      >
        <img src="/arrow-left-circle.svg" alt="Previous" className="h-4 w-4" />
      </button>
      <div className="flex space-x-2">{dots}</div>
      <button
        onClick={onNext}
        disabled={!hasNext}
        className={`ml-2 rounded-full bg-black p-2 ${
          !hasNext ? "opacity-50" : ""
        }`}
      >
        <img src="/arrow-right-circle.svg" alt="Next" className="h-4 w-4" />
      </button>
    </div>
  );
}

export default CarouselControls;
