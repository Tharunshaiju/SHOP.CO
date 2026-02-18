import React, { useEffect } from 'react';
import { setProducts } from '../redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { mockData } from '../Data/mockData';
import ProductCard from '../components/ProductCard';
import Arrivals from './Arrivals';
import Hero from '../components/Hero';
import Feedbacks from '../components/Feedbacks';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product);

  useEffect(() => {
    dispatch(setProducts(mockData));
  }, [dispatch]);

  return (
    <div className="bg-white">
      <Hero />

      {/* Top Selling Section */}
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
              TOP SELLING
            </h2>
            <Link
              to="/shop"
              className="flex items-center gap-1.5 text-sm font-semibold text-black hover:gap-2.5 transition-all duration-200 group"
            >
              View all
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {products.products.slice(0, 5).map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, #E5E0D8, transparent)', margin: '0 2rem' }} />

      {/* New Arrivals Section */}
      <Arrivals preview limit={5} />

      {/* Feedbacks */}
      <Feedbacks />
    </div>
  );
};

export default Home;
