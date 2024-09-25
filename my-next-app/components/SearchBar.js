'use client'

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState('');

  useEffect(() => {
    // Set the initial query from the URL when the component mounts
    const initialQuery = searchParams.get('search') || '';
    setQuery(initialQuery);
  }, [searchParams]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/?search=${encodeURIComponent(query.trim())}`);
    } else {
      router.push('/'); // If the search is empty, go to the home page without query
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
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          type="submit" 
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;