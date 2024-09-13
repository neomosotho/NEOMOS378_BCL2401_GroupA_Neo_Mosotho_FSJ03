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

  const { title, description, category, price, images, rating, tags, stock, availability, reviews } = product;

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <BackButton /> {/* Use the BackButton here */}

      <h1 className="text-3xl font-semibold mb-4">{title}</h1>
      <Gallery images={images} />
      
      
      <p className="text-gray-500 text-md mb-2">Category: {category}</p> {/* Display category here */}
      <p className="text-lg mt-4">{description}</p>
      <p className="text-xl font-bold mt-4">Price: ${price.toFixed(2)}</p>
      

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
        <p className="text-lg">Stock: {stock > 0 ? `${stock} items available` : 'No items available'}</p>
        <p className="text-lg">Availability: {stock ? 'In Stock ' : 'Out of Stock'}</p>
        <span className="`"></span>
      </div>

      {/* Display Customer Reviews */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
        {reviews && reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
              <div className="flex items-center mb-2">
                <span className="font-bold mr-2">{review.name}</span>
                <span className="text-gray-500 text-sm">{new Date(review.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center mb-2">
                {/* Display star rating for review */}
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < review.rating ? 'text-yellow-500' : 'text-gray-300'}>
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No reviews yet.</p>
        )}
      </div>
    </div>
  );
}
