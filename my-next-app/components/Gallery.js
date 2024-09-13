// components/Gallery.js

"use client"; // Since we are using state and event handlers

import { useState } from "react";

export default function Gallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleNextImage = () => {
    setSelectedImage((prevImage) => (prevImage + 1) % images.length); // Move to the next image
  };

  const handlePreviousImage = () => {
    setSelectedImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    ); // Move to the previous image
  };

  return (
    <div className="relative">
      <img
        src={images[selectedImage]}
        alt={`Product Image ${selectedImage + 1}`}
        className="w-full h-64 object-contain rounded-lg"
      />

      {/* Previous Button */}
      {images.length > 1 && (
        <button
          onClick={handlePreviousImage}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          &larr;
        </button>
      )}

      {/* Next Button */}
      {images.length > 1 && (
        <button
          onClick={handleNextImage}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          &rarr;
        </button>
      )}

      {/* Thumbnails */}
      <div className="flex space-x-2 mt-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setSelectedImage(index)}
            className={` h-16 object-contain rounded-lg cursor-pointer ${
              selectedImage === index ? "border-2 border-black" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}
