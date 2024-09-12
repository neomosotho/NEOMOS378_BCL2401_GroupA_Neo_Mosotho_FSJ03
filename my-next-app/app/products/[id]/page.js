// app/products/[id]/page.js
import { fetchProductById } from '@/lib/product/api';
import LoadingSpinner from '@/components/LoadingSpinner';

export default async function ProductPage({ params }) {
  const { id } = params;

  const product = await fetchProductById(id);

  if (!product) {
    return <div className="text-red-500">Failed to load product details.</div>;
  }

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img src={product.image} alt={product.title} className="w-full h-96 object-cover" />
        <div>
          <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
          <p className="text-lg text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl font-semibold mb-4">Price: ${product.price}</p>
        </div>
      </div>
    </div>
  );
}
