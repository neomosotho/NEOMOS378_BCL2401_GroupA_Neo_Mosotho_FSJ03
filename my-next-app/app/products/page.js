// app/products/[id]/page.js

import { fetchProductById } from '@/lib/products/api';
import LoadingSpinner from '@/components/LoadingSpinner';

export default async function ProductDetails({ params }) {
  const { id } = params;
  const product = await fetchProductById(id);

  if (!product) {
    return <div className="text-red-500">Product not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <img src={product.image} alt={product.title} className="w-64 h-64 object-cover" />
      <p className="text-gray-600 mt-4">{product.description}</p>
      <p className="text-lg font-semibold mt-2">Price: ${product.price}</p>
    </div>
  );
}
