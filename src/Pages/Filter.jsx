import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { SearchX } from 'lucide-react';
import { Link } from 'react-router-dom';

const Filter = () => {
  const filterProducts = useSelector((state) => state.product.filteredData);
  const searchTerm = useSelector((state) => state.product.searchTerm);

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container-app">
        <div className="mb-8" style={{ animation: 'fadeInUp 0.4s ease both' }}>
          <p className="text-sm text-gray-500 uppercase font-semibold tracking-wider mb-1">Search results</p>
          <h1
            className="font-black text-black"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
              letterSpacing: '-0.03em',
            }}
          >
            {searchTerm ? `"${searchTerm}"` : 'All Results'}
          </h1>
          {filterProducts.length > 0 && (
            <p className="text-gray-500 text-sm mt-1">{filterProducts.length} products found</p>
          )}
        </div>

        {filterProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {filterProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div
            className="flex flex-col items-center justify-center py-24 text-center"
            style={{ animation: 'scaleIn 0.4s ease both' }}
          >
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-6">
              <SearchX size={36} className="text-gray-300" />
            </div>
            <h2 className="text-xl font-bold text-black mb-2" style={{ letterSpacing: '-0.02em' }}>
              No products found
            </h2>
            <p className="text-gray-500 text-sm mb-8 max-w-xs">
              We couldn't find any products matching your search. Try different keywords.
            </p>
            <Link
              to="/"
              className="px-6 py-3 bg-black text-white font-semibold text-sm rounded-full hover:bg-gray-800 transition-all duration-200"
            >
              Browse all products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
