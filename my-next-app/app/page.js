import SearchBar from '@/components/SearchBar';
import { fetchProducts, fetchCategories } from '@/lib/products/api';
import ProductGrid from '@/components/ProductGrid';
import Pagination from '@/components/Pagination';

export default async function HomePage({ searchParams }) {
  const currentPage = searchParams.page ? parseInt(searchParams.page, 10) : 1;
  const productsPerPage = 20;
  const skip = (currentPage - 1) * productsPerPage;
  const searchQuery = searchParams.search || '';
  const selectedCategory = searchParams.category || ''; // Get selected category from searchParams

  // Fetch categories (from API)
  const categories = await fetchCategories();

  // Fetch products with skip, search query, and selected category
  const { products, total } = await fetchProducts(productsPerPage, skip, searchQuery, selectedCategory); // Pass the selected category

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <SearchBar categories={categories} /> {/* Ensure categories are passed to SearchBar */}
      <ProductGrid 
        products={products} 
        initialPage={currentPage}
        searchQuery={searchQuery}
      />
      <Pagination 
        currentPage={currentPage}
        totalProducts={total}
        productsPerPage={productsPerPage}
      />
    </div>
  );
}
