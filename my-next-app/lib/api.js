export async function fetchProducts(limit = 20, skip = 0) {
    try {
    const res = await fetch(`https://next-ecommerce-api.vercel.app/products?limit=${limit}&offset=${offset}`);
    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }
    const data = await res.json();
    
    return {
        products: data.products, // Ensure this is correct based on API structure
        total: data.total, // Ensure this is correct
    }
} catch (error) {
  throw new Error(error.message || 'An error occurred while fetching products')
    }
} 
