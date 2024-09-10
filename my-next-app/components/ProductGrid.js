import { useState, useEffect } from 'react'

export default function ProductGrid() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadproducts() {
            try {
                const data = await fetchProducts()
                setProducts(data);
                setLoading(false);
                } catch (error) {
                    setError(err.message);
                    setLoading(false);
            }
        }
        loadproducts()
    }, [])

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => ( 
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}