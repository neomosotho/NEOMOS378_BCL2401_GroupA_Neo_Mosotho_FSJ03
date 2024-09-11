// lib/api.js
export async function fetchProducts(limit = 20, skip = 0) {
  try {
    const response = await fetch(`https://next-ecommerce-api.vercel.app/products?limit=${limit}&skip=${skip}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    console.log('API Response:', data) // Log the entire response
    return data // Return the entire data object
  } catch (error) {
    console.error('Error in fetchProducts:', error)
    throw error
  }
}