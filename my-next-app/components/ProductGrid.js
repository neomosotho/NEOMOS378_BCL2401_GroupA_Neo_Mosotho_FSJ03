"use client";

import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import LoadingSpinner from "./LoadingSpinner";
import Pagination from "./Pagination";
import { fetchProducts } from "@/lib/products/api";
import { useSearchParams } from "next/navigation";

export default function ProductGrid({ products: initialProducts, totalProducts }) {
  const [products, setProducts] = useState(initialProducts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  const searchParams = useSearchParams();

  useEffect(() => {
    const page = parseInt(searchParams.get("page")) || 1;
    setCurrentPage(page);
  }, [searchParams]);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <div>
      {products && products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">No products found.</div>
      )}
      {totalProducts > productsPerPage && (
        <Pagination
          currentPage={currentPage}
          totalProducts={totalProducts}
          productsPerPage={productsPerPage}
        />
      )}
    </div>
  );
}