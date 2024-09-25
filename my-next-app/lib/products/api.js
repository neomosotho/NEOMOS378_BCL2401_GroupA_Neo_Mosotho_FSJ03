// lib/products/api.js

export async function fetchProducts(limit = 20, skip = 0, searchQuery = '') {
  try {
    let url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
    
    if (searchQuery) {
      url = `https://dummyjson.com/products/search?q=${encodeURIComponent(searchQuery)}&limit=${limit}&skip=${skip}`;
    }

    const response = await fetch(url);
    const data = await response.json();

    return {
      products: data.products,
      total: data.total
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

export async function fetchProductById(id) {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
}