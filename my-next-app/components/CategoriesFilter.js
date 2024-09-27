// components/CategoriesFilter.js
'use client'

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { fetchCategories } from '@/lib/products/api'; // Ensure this function fetches category data

const CategoriesFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const getCategories = async () => {
      const fetchedCategories = await fetchCategories();
      setCategories(fetchedCategories); // Adjust based on the response structure
    };

    getCategories();
  }, []);

  useEffect(() => {
    const category = searchParams.get('category') || '';
    setSelectedCategory(category);
  }, [searchParams]);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    const params = new URLSearchParams();
    if (category) {
      params.set('category', category);
    }
    router.push(`/?${params.toString()}`);
  };

  return (
    <select value={selectedCategory} onChange={handleCategoryChange} className="mb-8">
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategoriesFilter;
