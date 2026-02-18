import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import Modal from '../components/Modal';
import ChangeAddress from '../components/ChangeAddress';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/cartSlice';
import './Cart.css';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const [address, setAddress] = useState('Main Street, Porur, Chennai');
  const [isModelOpen, setIsModelOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="cart-page">
      {cart.products.length > 0 ? (
        <div className="max-w-6xl mx-auto">
          <h1
            className="font-black text-black mb-8"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              letterSpacing: '-0.04em',
            }}
          >
            Your Shopping Bag
            <span className="ml-3 text-base font-semibold text-gray-400" style={{ fontFamily: 'var(--font-body)', letterSpacing: 'normal' }}>
              ({cart.products.length} {cart.products.length === 1 ? 'item' : 'items'})
            </span>
          </h1>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Cart Items */}
            <div className="lg:flex-[2]">
              <div className="cart-items-card">
                {cart.products.map((product, idx) => (
                  <div key={product.id} className="cart-item" style={{ animationDelay: `${idx * 0.07}s` }}>
                    {/* thumb-square: locked 1:1, object-fit:cover — no distortion */}
                    <div className="thumb-square">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="cart-item-details flex-1">
                      <div className="flex justify-between items-start gap-4">
                        <h3 className="cart-item-name">{product.name}</h3>
                        <button
                          className="remove-btn flex-shrink-0"
                          onClick={() => dispatch(removeFromCart(product.id))}
                          aria-label="Remove item"
                        >
                          <Trash2 size={17} />
                        </button>
                      </div>
                      <p className="cart-item-price-unit">${product.price.toFixed(2)} each</p>

                      <div className="cart-item-controls">
                        <div className="quantity-control">
                          <button
                            className="quantity-btn"
                            onClick={() => dispatch(decreaseQuantity(product.id))}
                            aria-label="Decrease quantity"
                          >
                            <Minus size={13} />
                          </button>
                          <span className="quantity-display">{product.quantity}</span>
                          <button
                            className="quantity-btn"
                            onClick={() => dispatch(increaseQuantity(product.id))}
                            aria-label="Increase quantity"
                          >
                            <Plus size={13} />
                          </button>
                        </div>
                        <span className="cart-item-subtotal">
                          ${(product.quantity * product.price).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:flex-[1] min-w-[280px]">
              <div className="order-summary-card">
                <h2 className="summary-title">Order Summary</h2>

                <div className="summary-row">
                  <span className="summary-row-label">Subtotal</span>
                  <span className="summary-row-value">${cart.totalPrice.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-row-label">Shipping</span>
                  <span className="summary-row-free">Free</span>
                </div>
                <div className="summary-row">
                  <span className="summary-row-label">Tax</span>
                  <span className="summary-row-value">—</span>
                </div>

                <div className="summary-divider" />

                {/* Delivery address */}
                <div className="address-block">
                  <p>Delivering to</p>
                  <p className="address-text">{address}</p>
                  <button onClick={() => setIsModelOpen(true)}>Change address</button>
                </div>

                <div className="summary-divider" />

                <div className="summary-total-row">
                  <span className="summary-total-label">Total</span>
                  <span className="summary-total-value">${cart.totalPrice.toFixed(2)}</span>
                </div>

                <button className="checkout-btn" onClick={() => navigate('/checkout')}>
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-cart-container">
          <div className="flex justify-center">
            <ShoppingBag size={72} className="text-gray-200" style={{ animation: 'pulse-soft 2s ease infinite' }} />
          </div>
          <h2 className="empty-cart-title">Your cart is empty</h2>
          <p className="empty-cart-text">Looks like you haven't added any items yet. Let's change that!</p>
          <Link to="/" className="start-shopping-btn">
            Start Shopping
          </Link>
        </div>
      )}

      <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
        <ChangeAddress setAddress={setAddress} setIsModelOpen={setIsModelOpen} />
      </Modal>
    </div>
  );
};

export default Cart;
