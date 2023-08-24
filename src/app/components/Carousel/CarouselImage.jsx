import React from "react";

function CarouselImage({ src, alt }) {
  return (
    <div className="relative h-full overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="absolute left-0 top-0 h-full w-full object-contain"
      />
    </div>
  );
}

export default CarouselImage;
