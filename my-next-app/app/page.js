import SearchBar from '@/components/SearchBar'
import { fetchProducts } from '@/lib/products/api'
import ProductGrid from '@/components/ProductGrid'
import Pagination from '@/components/Pagination'

export default async function HomePage({ searchParams }) {
  const currentPage = searchParams.page ? parseInt(searchParams.page, 10) : 1
  const productsPerPage = 20
  const skip = (currentPage - 1) * productsPerPage
  const searchQuery = searchParams.search || ''

  // Fetch products with skip and search query
  const { products, total } = await fetchProducts(productsPerPage, skip, searchQuery)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <SearchBar />
      <ProductGrid 
      products={products} 
      initialPage={currentPage}
      searchQuery= {searchQuery}
      />
      <Pagination 
        currentPage={currentPage}
        totalProducts={total}
        productsPerPage={productsPerPage}
      />
    </div>
  )
}