import { Suspense } from 'react';
import SearchBar from '@/components/SearchBar';
import { fetchProducts, fetchCategories } from '@/lib/products/api';
import ProductGrid from '@/components/ProductGrid';
import Pagination from '@/components/Pagination';
import CombinedFilterSort from '@/components/CombinedFilterSort';
import LoadingSpinner from '@/components/LoadingSpinner'; // Assume you have this component

export default async function HomePage({ searchParams }) {
  const currentPage = searchParams.page ? parseInt(searchParams.page, 10) : 1;
  const productsPerPage = 20;
  const skip = (currentPage - 1) * productsPerPage;
  const searchQuery = searchParams.search || '';
  const selectedCategory = searchParams.category || '';
  const sortOrder = searchParams.sortOrder || '';

  let categories = [];
  let products = [];
  let total = 0;
  let error = null;

  try {
    // Fetch categories
    categories = await fetchCategories();

    // Fetch products
    const result = await fetchProducts(productsPerPage, skip, searchQuery, selectedCategory, sortOrder);
    products = result.products;
    total = result.total;
  } catch (err) {
    console.error('Error fetching data:', err);
    error = 'Failed to load data';
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <Suspense fallback={<LoadingSpinner />}>
        <SearchBar categories={categories} />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <CombinedFilterSort />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <ProductGrid 
          products={products} 
          initialPage={currentPage}
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          sortOrder={sortOrder}
        />
      </Suspense>
      {total > productsPerPage && (
        <Pagination 
          currentPage={currentPage}
          totalProducts={total}
          productsPerPage={productsPerPage}
        />
      )}
    </div>
  );
}