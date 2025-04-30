import React, { useEffect, useState } from 'react';
import { FaCarSide, FaQuestion } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice'; // Make sure to import this action

const ProductDetails = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.product.products);
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
  };

  useEffect(() => {
    if (products && products.length > 0) {
      const newProduct = products.find(
        (product) => product.id === parseInt(id)
      );
      setProduct(newProduct);
    }
  }, [id, products]);

  if (!product) {
    return <div className="text-center py-20 text-gray-500">Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[450px] object-cover rounded-xl shadow-lg"
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
          <p className="text-2xl text-black font-semibold">${product.price}</p>

          <div className="flex items-center gap-4">
            <input
              id="quantity"
              type="number"
              min="1"
              defaultValue="1"
              className="border border-gray-300 rounded-md px-4 py-2 w-20 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button 
              onClick={(e) => handleAddToCart(e, product)} 
              className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>
          </div>

          <div className="flex flex-col gap-4 text-gray-600 text-sm mt-6">
            <div className="flex items-center gap-3">
              <FaCarSide className="text-lg" />
              <span>Free delivery & 30-day return policy</span>
            </div>
            <div className="flex items-center gap-3">
              <FaQuestion className="text-lg" />
              <span>Have questions? Contact support</span>
            </div>
          </div>

          <div className="pt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Product Description</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Product description will go here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
