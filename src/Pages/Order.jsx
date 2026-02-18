import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CheckCircle, Package, MapPin, ShoppingBag } from 'lucide-react';

const Order = ({ order }) => {
  const navigate = useNavigate();

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center p-8">
          <Package size={48} className="text-gray-200 mx-auto mb-4" />
          <p className="text-gray-500 mb-4">No order found.</p>
          <Link to="/" className="px-6 py-3 bg-black text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12" style={{ animation: 'fadeIn 0.4s ease' }}>
      <div className="container-app max-w-2xl">

        {/* Success Header */}
        <div className="text-center mb-10" style={{ animation: 'fadeInUp 0.5s ease both' }}>
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle size={42} className="text-green-500" />
          </div>
          <h1
            className="font-black text-black mb-2"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', letterSpacing: '-0.04em' }}
          >
            Order Confirmed!
          </h1>
          <p className="text-gray-500 text-base">
            Thank you for your purchase. Your order has been placed successfully.
          </p>
        </div>

        {/* Order Card */}
        <div
          className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
          style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.06)', animation: 'fadeInUp 0.5s ease 0.1s both' }}
        >
          {/* Order Number */}
          <div className="px-6 py-5 bg-black text-white flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-0.5">Order Number</p>
              <p className="text-lg font-bold">#{order.orderNumber}</p>
            </div>
            <Package size={28} className="text-gray-400" />
          </div>

          <div className="p-6 space-y-6">
            {/* Shipping Info */}
            {(order.shippingInformation?.address || order.shippingInformation?.city) && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={16} className="text-black" />
                  <h3 className="font-bold text-sm uppercase tracking-wider text-black">Shipping Address</h3>
                </div>
                <div className="pl-6 text-sm text-gray-600 space-y-1">
                  {order.shippingInformation.address && <p>{order.shippingInformation.address}</p>}
                  {order.shippingInformation.city && <p>{order.shippingInformation.city}</p>}
                  {order.shippingInformation.zip && <p>{order.shippingInformation.zip}</p>}
                </div>
              </div>
            )}

            {/* Products */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag size={16} className="text-black" />
                <h3 className="font-bold text-sm uppercase tracking-wider text-black">Items Ordered</h3>
              </div>
              <div className="pl-6 space-y-3">
                {order.products.map((product, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* thumb-sm: locked 56×56, object-fit:cover */}
                      <div className="thumb-sm">
                        <img
                          src={product.image}
                          alt={product.name}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-black">{product.name}</p>
                        <p className="text-xs text-gray-500">Qty: {product.quantity}</p>
                      </div>
                    </div>
                    <p className="text-sm font-bold text-black">
                      ₹{(product.price * product.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <span className="font-bold text-base text-black">Total</span>
              <span className="font-black text-xl text-black" style={{ letterSpacing: '-0.02em' }}>
                ₹{order.totalPrice.toFixed ? order.totalPrice.toFixed(2) : order.totalPrice}
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6" style={{ animation: 'fadeInUp 0.5s ease 0.2s both' }}>
          <button
            className="flex-1 py-3.5 bg-black text-white font-semibold text-sm rounded-full hover:bg-gray-800 transition-all duration-200"
            style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}
          >
            Track Order
          </button>
          <button
            className="flex-1 py-3.5 bg-gray-100 text-black font-semibold text-sm rounded-full hover:bg-gray-200 transition-all duration-200"
            onClick={() => navigate('/')}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
