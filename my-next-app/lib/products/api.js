export async function fetchProducts(productsPerPage, skip = 0) {
    try {
      const res = await fetch(`https://next-ecommerce-api.vercel.app/products?limit=${productsPerPage}&skip=${skip}`);
      if (!res.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await res.json();
      return {
        products: data, 
        total: data.total, 
      };
    } catch (error) {
      console.error('Error fetching products:', error);
      return { products: [], total: 0 };
    }
  } 
