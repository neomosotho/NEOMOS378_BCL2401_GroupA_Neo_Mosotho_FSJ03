// components/ProductCard.js
import { useState } from 'react';
import Link from "next/link";

export default function ProductCard({ product }) {
  const { title, description, category, price, images = [product.image], rating } = product; 
  // Use images if available, fallback to product.image

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = (e) => {
    e.preventDefault(); // Prevent the Link from being triggered while navigating images
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = (e) => {
    e.preventDefault();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Link href={`/products/${product.id}`} passHref>
      <div className="border rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-lg">
        {/* Image Carousel */}
        <div className="relative w-full h-48">
          {images.length > 1 ? (
            <>
              <img
                src={images[currentImageIndex]}
                alt={product.title}
                className="w-full h-48 object-contain"
              />
              {/* Left Arrow */}
              <button
                onClick={handlePrevImage}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow"
              >
                ◀
              </button>
              {/* Right Arrow */}
              <button
                onClick={handleNextImage}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow"
              >
                ▶
              </button>
            </>
          ) : (
            <img src={images[0]} alt={product.title} className="w-full h-48 object-contain" />
          )}
        </div>

        <div className="p-4">
          <h2 className="font-bold text-xl mb-2 truncate">{title}</h2>
          <p className="text-md text-gray-500 mt-1">Category: {category}</p> {/* Display category */}
          <p className="text-gray-700 text-base mb-2 truncate">{description}</p>
          <p className="text-gray-900 font-bold">${price.toFixed(2)}</p>
          

          <div className="flex items-center mb-2">
                {/* Display star rating for review */}
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < Math.round(rating) ? 'text-yellow-500' : 'text-gray-300'}>
                    ★
                  </span>
                  
                ))}
                <p className="text-gray-900 font-bold">{rating.toFixed(1)}</p>
              </div>
        </div>
      </div>
    </Link>
  );
}
