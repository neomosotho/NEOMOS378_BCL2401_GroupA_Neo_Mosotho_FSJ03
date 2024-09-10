// components/ProductCard.js
export default function ProductCard({ product }) {
    return (
      <div className="border rounded-lg overflow-hidden shadow-lg">
        <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="font-bold text-xl mb-2 truncate">{product.title}</h2>
          <p className="text-gray-700 text-base mb-2 truncate">{product.description}</p>
          <p className="text-gray-900 font-bold">${product.price.toFixed(2)}</p>
        </div>
      </div>
    )
  }