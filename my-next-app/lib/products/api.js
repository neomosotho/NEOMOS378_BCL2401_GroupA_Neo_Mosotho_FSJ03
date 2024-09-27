// lib/products/api.js

export async function fetchProducts(limit = 20, skip = 0, searchQuery = '', categoryFilter = '') {
  try {
    let url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

    // Adjust the URL based on the search query or category filter
    if (searchQuery) {
      url = `https://dummyjson.com/products/search?q=${encodeURIComponent(searchQuery)}&limit=${limit}&skip=${skip}`;
    } else if (categoryFilter) {
      url = `https://dummyjson.com/products/category/${encodeURIComponent(categoryFilter)}?limit=${limit}&skip=${skip}`;
    }

    const response = await fetch(url);
    const data = await response.json();

    return {
      products: data.products || [], // Ensure it returns an empty array if products are not found
      total: data.total || 0 // Ensure total is set to 0 if not provided
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

export async function fetchCategories() {
  try {
    const res = await fetch('https://dummyjson.com/products/categories');
    const data = await res.json();

    console.log('Categories API response:', data); // Log the response

    return data; // Ensure this returns an array
  } catch (error) {
    console.error('Error fetching categories:', error);
    return []; // Return an empty array in case of an error
  }
}
