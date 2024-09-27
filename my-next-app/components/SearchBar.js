// components/SearchBar.js
'use client'

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const initialQuery = searchParams.get('search') || '';
    setQuery(initialQuery);
  }, [searchParams]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/?search=${encodeURIComponent(query.trim())}`);
    } else {
      router.push('/'); // Go to home page if search is empty
    }
  };

  return (
    <form onSubmit={handleSearch} className="mb-8">
      <div className="flex">
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-black"
        />
        <button 
          type="submit" 
          className="px-4 py-2 bg-black text-white rounded-r-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
