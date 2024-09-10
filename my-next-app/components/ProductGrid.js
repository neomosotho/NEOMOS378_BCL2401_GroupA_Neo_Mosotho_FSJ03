// components/ProductGrid.js
'use client'

import { useState, useEffect } from 'react'
import ProductCard from './ProductCard';
import LoadingSpinner from './LoadingSpinner';
import { fetchProducts } from '@/lib/api';

export default function ProductGrid() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadproducts() {
            try {
                const data = await fetchProducts()
                setProducts(data);
                setLoading(false);
                } catch (error) {
                    setError(error.message);
                    setLoading(false);
            }
        }
        loadproducts()
    }, [])

    if (loading) return <LoadingSpinner />
    if (error) return <div className="text-red-500">Error: {error}</div>

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => ( 
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}