'use client'

import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import LoadingSpinner from "./LoadingSpinner";
import Pagination from "./Pagination";
import { fetchProducts } from "@/lib/products/api";
import { useRouter } from 'next/navigation';

export default function ProductGrid({ initialPage, searchQuery }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalProducts, setTotalProducts] = useState(0);
  const productsPerPage = 20;
  const router = useRouter();

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const skip = (currentPage - 1) * productsPerPage;
        const { products, total } = await fetchProducts(productsPerPage, skip, searchQuery);
        setProducts(products);
        setTotalProducts(total);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error.message || "An error occurred while fetching products");
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [currentPage, searchQuery]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= Math.ceil(totalProducts / productsPerPage)) {
      setCurrentPage(newPage);
      const params = new URLSearchParams({ page: newPage.toString() });
      if (searchQuery) {
        params.append('search', searchQuery);
      }
      router.push(`/?${params.toString()}`);
    }
  };

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
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}