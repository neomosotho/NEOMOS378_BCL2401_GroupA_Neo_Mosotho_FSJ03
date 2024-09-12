export async function fetchProducts(limit, offset) {
    const res = await fetch(`https://next-ecommerce-api.vercel.app/products?limit=${limit}&offset=${offset}`);
    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }
    const data = await res.json();
    console.log(data); // Log API response
    return {
        products: data, // Ensure this is correct based on API structure
        total: data || 0, // Ensure this is correct
    };
}
