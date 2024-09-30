'use client'

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { fetchCategories } from '@/lib/products/api';

const CombinedFilterSort = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    const getCategories = async () => {
      try {
        const fetchedCategories = await fetchCategories();
        console.log('Fetched categories:', fetchedCategories);
        setCategories(fetchedCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    getCategories();
  }, []);

  useEffect(() => {
    const category = searchParams.get('category') || '';
    const sort = searchParams.get('sortOrder') || '';
    setSelectedCategory(category);
    setSortOrder(sort);
  }, [searchParams]);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    updateQueryParams(category, sortOrder);
  };

  const handleSortChange = (e) => {
    const sort = e.target.value;
    setSortOrder(sort);
    updateQueryParams(selectedCategory, sort);
  };

  const updateQueryParams = (category, sort) => {
    const params = new URLSearchParams(searchParams);
    if (category) {
      params.set('category', category);
    } else {
      params.delete('category');
    }
    if (sort) {
      params.set('sortOrder', sort);
    } else {
      params.delete('sortOrder');
    }
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="mb-8 flex space-x-4">
      <div>
        <label htmlFor="category" className="mr-2">Category:</label>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category.slug} value={category.slug}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="sort" className="mr-2">Sort by price:</label>
        <select id="sort" value={sortOrder} onChange={handleSortChange}>
          <option value="">Default</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default CombinedFilterSort;