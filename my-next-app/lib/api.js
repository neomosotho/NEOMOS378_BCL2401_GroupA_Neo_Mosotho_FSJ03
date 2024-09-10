// lib/api.js
export async function fetchProducts(limit = 20, skip = 0) {
  const response = await fetch(`https://next-ecommerce-api.vercel.app/products?limit=${limit}&skip=${skip}`)
  if (!response.ok) {
    throw new Error('Failed to fetch products')
  }
  const data = await response.json()
  return {
    products: data.products,
    total: data.total
  }
}