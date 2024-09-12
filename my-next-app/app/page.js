// app/page.js
import { fetchProducts } from '@/lib/api'
import ProductGrid from '@/components/ProductGrid'
import Pagination from '@/components/Pagination'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <ProductGrid />
    </div>
  )
}