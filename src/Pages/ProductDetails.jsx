import React, { useEffect, useState } from 'react';
import { Truck, RotateCcw, Shield, Star, ShoppingCart, Check } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice';

const ProductDetails = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.product.products);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [added, setAdded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products?.length > 0) {
      setProduct(products.find(p => p.id === parseInt(id)) || null);
    }
  }, [id, products]);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-10 h-10 border-2 border-black border-t-transparent rounded-full mx-auto mb-4"
            style={{ animation: 'spin 0.8s linear infinite' }} />
          <p className="text-gray-500 text-sm">Loading product...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-8 md:py-14">
      <div className="container-app">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8" style={{ animation: 'fadeIn 0.4s ease' }}>
          <Link to="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-black transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">

          {/* Product Image */}
          <div
            className="relative overflow-hidden rounded-2xl bg-gray-50"
            style={{
              aspectRatio: '4/5',
              animation: 'slideInLeft 0.6s ease both',
            }}
          >
            {!imgLoaded && <div className="absolute inset-0 skeleton" />}
            <img
              src={product.image}
              alt={product.name}
              loading="eager"
              decoding="async"
              onLoad={() => setImgLoaded(true)}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              style={{ opacity: imgLoaded ? 1 : 0, transition: 'opacity 0.4s ease, transform 0.5s ease' }}
            />
            {product.tag && (
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full"
                  style={{
                    background: product.tag === 'New' ? '#D1FAE5' : '#FEF3C7',
                    color: product.tag === 'New' ? '#065F46' : '#92400E',
                  }}>
                  {product.tag}
                </span>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col" style={{ animation: 'slideInRight 0.6s ease both' }}>
            <div className="mb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                {product.category}
              </span>
            </div>

            <h1
              className="font-black text-black mb-3"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                letterSpacing: '-0.04em',
                lineHeight: '1.1',
              }}
            >
              {product.name}
            </h1>

            {/* Rating */}
            {product.rating && (
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[1,2,3,4,5].map(star => (
                    <Star key={star} size={15}
                      className={star <= Math.round(product.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-200 fill-gray-200'} />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-700">{product.rating}</span>
                <span className="text-sm text-gray-400">(128 reviews)</span>
              </div>
            )}

            <div className="flex items-baseline gap-3 mb-5">
              <span
                className="font-black text-black"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', letterSpacing: '-0.03em' }}
              >
                ${product.price}
              </span>
              <span className="text-base font-medium text-gray-400 line-through">
                ${(product.price * 1.2).toFixed(2)}
              </span>
              <span className="px-2 py-0.5 text-xs font-bold text-green-700 bg-green-50 rounded-full">
                -17% OFF
              </span>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              {product.description || 'A premium quality garment crafted with attention to detail, designed to elevate your everyday style.'}
            </p>

            {/* Size selector */}
            {product.sizes?.length > 0 && (
              <div className="mb-6">
                <p className="text-sm font-bold uppercase tracking-wider text-gray-700 mb-3">Choose Size</p>
                <div className="flex gap-2 flex-wrap">
                  {product.sizes.map(size => (
                    <button key={size}
                      className="w-11 h-11 rounded-lg border-2 border-gray-200 text-sm font-semibold text-gray-700 hover:border-black hover:text-black transition-all duration-200 focus:border-black">
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity + Add to cart */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center border-2 border-gray-200 rounded-full overflow-hidden">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-11 h-11 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                  aria-label="Decrease"
                >
                  −
                </button>
                <span className="px-4 font-semibold text-base min-w-[2rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-11 h-11 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                  aria-label="Increase"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 h-11 rounded-full font-semibold text-sm tracking-wide text-white flex items-center justify-center gap-2 transition-all duration-300"
                style={{
                  background: added ? '#16A34A' : '#111',
                  boxShadow: added ? '0 4px 16px rgba(22, 163, 74, 0.3)' : '0 4px 16px rgba(0,0,0,0.2)',
                  transform: added ? 'scale(0.98)' : 'scale(1)',
                }}
              >
                {added ? <Check size={16} /> : <ShoppingCart size={16} />}
                {added ? 'Added to cart!' : 'Add to Cart'}
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-gray-100">
              {[
                { Icon: Truck, title: 'Free Delivery', sub: 'On orders over $50' },
                { Icon: RotateCcw, title: '30-Day Returns', sub: 'Easy returns' },
                { Icon: Shield, title: 'Secure Payment', sub: '100% protected' },
              ].map(({ Icon, title, sub }) => (
                <div key={title} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
                  <Icon size={18} className="text-black mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-black">{title}</p>
                    <p className="text-xs text-gray-500">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
