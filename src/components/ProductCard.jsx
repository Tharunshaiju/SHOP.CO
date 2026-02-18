import React, { useState } from 'react';
import { addToCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';

const ProductCard = ({ product, index = 0 }) => {
  const dispatch = useDispatch();
  const [added, setAdded]       = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const tagStyle = {
    New:       { bg: '#D1FAE5', color: '#065F46' },
    Bestseller:{ bg: '#FEF3C7', color: '#92400E' },
    Limited:   { bg: '#FEE2E2', color: '#991B1B' },
    Sale:      { bg: '#EDE9FE', color: '#5B21B6' },
  };
  const tag = tagStyle[product.tag] ?? tagStyle.Bestseller;

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      style={{
        animation: 'fadeInUp 0.4s ease both',
        animationDelay: `${index * 0.06}s`,
      }}
    >
      <div
        className="bg-white rounded-2xl overflow-hidden border border-gray-100
                   transition-all duration-300
                   group-hover:shadow-xl group-hover:-translate-y-1"
        style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
      >

        {/*
          ══════════════════════════════════════════════
          IMAGE CONTAINER
          ══════════════════════════════════════════════
          • "product-card-img-wrap" class (defined in index.css) locks
            every card to a 4:5 aspect ratio — portrait, landscape and
            square source images all render the same height.
          • The <img> inside fills the box via object-fit: cover so
            no white space appears and nothing is squished/stretched.
          • object-position: center top keeps the garment/subject visible.
        */}
        <div className="product-card-img-wrap">

          {/* Skeleton shimmer shown until image fires onLoad */}
          {!imgLoaded && (
            <div
              className="absolute inset-0 skeleton"
              aria-hidden="true"
            />
          )}

          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            decoding="async"
            onLoad={() => setImgLoaded(true)}
            style={{
              opacity: imgLoaded ? 1 : 0,
              transform: 'scale(1)',   /* base for group-hover override */
            }}
            className="group-hover:scale-105"
          />

          {/* Tag badge */}
          {product.tag && (
            <div className="absolute top-3 left-3 z-10">
              <span
                className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider rounded-full"
                style={{ background: tag.bg, color: tag.color }}
              >
                {product.tag}
              </span>
            </div>
          )}

          {/* Add-to-cart overlay slides up on card hover */}
          <div
            className="absolute inset-x-0 bottom-0 p-3
                       translate-y-full group-hover:translate-y-0
                       transition-transform duration-300"
          >
            <button
              onClick={handleAddToCart}
              className="w-full py-2.5 font-semibold text-sm rounded-xl
                         text-white flex items-center justify-center gap-2
                         transition-all duration-200"
              style={{ background: added ? '#16A34A' : '#111111' }}
            >
              <ShoppingCart size={15} />
              {added ? 'Added!' : 'Add to Cart'}
            </button>
          </div>
        </div>
        {/* ══ end image container ══ */}

        {/* Product info */}
        <div className="p-4">
          <h3
            className="font-semibold text-gray-900 mb-1 truncate
                       group-hover:text-black transition-colors"
            style={{ fontSize: '0.9375rem', letterSpacing: '-0.01em' }}
          >
            {product.name}
          </h3>

          {product.rating && (
            <div className="flex items-center gap-1 mb-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={12}
                    className={
                      star <= Math.round(product.rating)
                        ? 'text-amber-400 fill-amber-400'
                        : 'text-gray-200 fill-gray-200'
                    }
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500 font-medium">
                {product.rating}
              </span>
            </div>
          )}

          <p
            className="font-bold text-black"
            style={{ fontSize: '1.0625rem', letterSpacing: '-0.02em' }}
          >
            ${product.price}
          </p>
        </div>

      </div>
    </Link>
  );
};

export default ProductCard;
