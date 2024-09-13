// app/products/[id]/page.js
import { fetchProductById } from '@/lib/product/api';
import LoadingSpinner from '@/components/LoadingSpinner';
import Gallery from '@/components/Gallery';
import BackButton from '@/components/BackButton';

export default async function ProductPage({ params }) {
  const { id } = params;
  const product = await fetchProductById(id);

  if (!product) {
    return <div className="text-red-500">Failed to load product details.</div>;
  }

  const { title, description, category, price, images, rating, tags, stock, availability } = product;

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <BackButton /> {/* Use the BackButton here */}

      <h1 className="text-3xl font-semibold mb-4">{title}</h1>
      <Gallery images={images} />
      <p className="text-gray-500 text-md mb-2">Category: {category}</p> {/* Display category here */}
      <p className="text-lg mt-4">{description}</p>
      <p className="text-xl font-bold mt-4">Price: ${price.toFixed(2)}</p>
      <div className="flex items-center mt-2">
        {/* Display star rating */}
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < rating.rate ? 'text-yellow-500' : 'text-gray-300'}>
            ★
          </span>
        ))}
        <span className="ml-2 text-gray-500">({rating.count} reviews)</span>
      </div>

      {/* Display Tags */}
      {tags && tags.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Tags:</h2>
          <ul className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <li key={index} className="px-3 py-1 bg-gray-200 text-sm rounded-md">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      )}

       {/* Display Stock and Availability */}
       <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Stock & Availability</h2>
        <p className="text-lg">Stock: {stock > 0 ? `${stock} items available` : 'Out of stock'}</p>
        <p className="text-lg">Availability: {availability ? 'In Stock' : 'Out of Stock'}</p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
        {/* Placeholder for reviews */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-gray-700">"Amazing product, highly recommend!"</p>
          <p className="text-gray-500 text-sm mt-1">- User123</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg mt-4">
          <p className="text-gray-700">"Good value for money!"</p>
          <p className="text-gray-500 text-sm mt-1">- User456</p>
        </div>
      </div>
    </div>
  );
}
