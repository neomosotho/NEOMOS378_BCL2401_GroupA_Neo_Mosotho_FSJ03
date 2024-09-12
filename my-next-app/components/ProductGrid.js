'use client'

import { useState, useEffect } from 'react'
import ProductCard from './ProductCard';
import LoadingSpinner from './LoadingSpinner';
import Pagination from './Pagination';
import { fetchProducts } from '@/lib/api';

export default function ProductGrid() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalProducts, setTotalProducts] = useState(0);
    const productsPerPage = 20;

    useEffect(() => {
        async function loadProducts() {
            setLoading(true);
            setError(null);
            try {
                const { products, total } = await fetchProducts(productsPerPage, (currentPage - 1) * productsPerPage);
                setProducts(products);
                setTotalProducts(total); // Set total number of products
            } catch (error) {
                console.error('Error fetching products:', error);
                setError(error.message || 'An error occurred while fetching products');
                setProducts([]);
            } finally {
                setLoading(false);
            }
        }
        loadProducts();
    }, [currentPage]);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= Math.ceil(totalProducts / productsPerPage)) {
            setCurrentPage(newPage);
        }
    };

    if (loading) return <LoadingSpinner />;
    if (error) return <div className="text-red-500">Error: {error}</div>;

    return (
        <div>
            {products && products.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
