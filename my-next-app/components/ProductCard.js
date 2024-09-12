// components/ProductCard.js

import Link from "next/link";

export default function ProductCard({ product }) {
    return (
    <Link href={`/products/${product.id}`} passHref>
      <div className="border rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-lg">
        <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="font-bold text-xl mb-2 truncate">{product.title}</h2>
          <p className="text-gray-700 text-base mb-2 truncate">{product.description}</p>
          <p className="text-gray-900 font-bold">${product.price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
    );
  }