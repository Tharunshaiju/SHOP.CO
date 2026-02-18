import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Arrivals = ({ preview = false, limit = null }) => {
  const products = useSelector((state) => state.product.products);
  const displayProducts = limit ? products.slice(0, limit) : products;

  return (
    <section className="py-16 bg-white">
      <div className="container-app">
        <div className="flex items-end justify-between mb-10">
          <h2
            className="font-black text-black"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              letterSpacing: '-0.04em',
              lineHeight: '1',
            }}
          >
            NEW ARRIVALS
          </h2>
          {preview && (
            <Link
              to="/shop"
              className="flex items-center gap-1.5 text-sm font-semibold text-black hover:gap-2.5 transition-all duration-200 group"
            >
              View all
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {displayProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Arrivals;
