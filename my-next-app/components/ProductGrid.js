// components/ProductGrid.js
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
    const [currentPage, setCurrentPage] = useState(1)
    const [totalProducts, setTotalProducts] = useState(0)
    const productsPerPage = 20

    useEffect(() => {
        async function loadproducts() {
            setLoading(true)
            try {
                const data = await fetchProducts(productsPerPage, (currentPage - 1) * productsPerPage)
                setProducts(data.products);
                setTotalProducts(data.products);
                setLoading(false);
                } catch (error) {
                    setError(error.message);
                    setLoading(false);
            }
        }
        loadproducts()
    }, [currentPage])

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage)
    }

    if (loading) return <LoadingSpinner />
    if (error) return <div className="text-red-500">Error: {error}</div>

    return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => ( 
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    <Pagination
        currentPage={currentPage}
        totalProducts={totalProducts}
        productsPerPage={productsPerPage}
        onPageChange={handlePageChange}
    />
    </div>
    )
}