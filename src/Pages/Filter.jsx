import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';


const Filter = () => {
  const filterProducts = useSelector((state) => state.product.filteredData);

  return (
    <div className="mx-auto py-20 px-4 md:px-16 lg:px-24">
      {filterProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filterProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-10 space-y-4">
    <svg 
      className="w-48 h-48 text-gray-300" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={1} 
        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
      />
    </svg>
    <p className="text-gray-500 text-lg">No matching products found</p>
  </div>
      )}
    </div>
  );
};

export default Filter;

