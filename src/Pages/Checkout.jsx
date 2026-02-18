import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = ({ setOrder }) => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('cod');

  const [shippingInfo, setShippingInfo] = useState({
    address: '',
    city: '',
    zip: '',
  });

  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleOrder = () => {
    const newOrder = {
      products: cart.products,
      orderNumber: Math.floor(Math.random() * 1000000),
      shippingInformation: shippingInfo,
      totalPrice: cart.totalPrice,
    };
    setOrder(newOrder);
    navigate('/order-confirmation');
  };

  return (
    <div className="checkout-container">
      <h3 className="checkout-heading">
        CHECKOUT
        <span className="heading-underline"></span>
      </h3>

      <div className="checkout-content">
        {/* Left Side: Forms */}
        <div className="checkout-forms">
          {/* Billing Info */}
          <div className="checkout-section">
            <div
              className="section-header"
              onClick={() => setBillingToggle(!billingToggle)}
            >
              <h3 className="section-title">Billing Information</h3>
              {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            <div className={`section-content ${billingToggle ? '' : 'hidden'}`}>
              {['Name', 'Email', 'Phone'].map((field) => (
                <div key={field} className="input-group">
                  <label className="input-label">{field}</label>
                  <input
                    type={field === 'Email' ? 'email' : 'text'}
                    name={field.toLowerCase()}
                    placeholder={`Enter ${field}`}
                    className="input-field"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Shipping Info */}
          <div className="checkout-section">
            <div
              className="section-header"
              onClick={() => setShippingToggle(!shippingToggle)}
            >
              <h3 className="section-title">Shipping Information</h3>
              {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            <div className={`section-content ${shippingToggle ? '' : 'hidden'}`}>
              {['address', 'city', 'zip'].map((field) => (
                <div key={field} className="input-group">
                  <label className="input-label">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type="text"
                    name={field}
                    placeholder={`Enter ${field}`}
                    className="input-field"
                    onChange={(e) => setShippingInfo({ ...shippingInfo, [field]: e.target.value })}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Payment Method */}
          <div className="checkout-section">
            <div
              className="section-header"
              onClick={() => setPaymentToggle(!paymentToggle)}
            >
              <h3 className="section-title">Payment Method</h3>
              {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            <div className={`section-content ${paymentToggle ? '' : 'hidden'}`}>
              <div className="radio-group">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'cod'}
                  onChange={() => setPaymentMethod('cod')}
                />
                <label>Cash on Delivery</label>
              </div>

              <div className="radio-group">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'dc'}
                  onChange={() => setPaymentMethod('dc')}
                />
                <label>Debit Card</label>
              </div>

              {paymentMethod === 'dc' && (
                <div className="payment-card">
                  <h3 className="payment-card-title">Debit Card Information</h3>
                  {['Card Number', 'Card Holder Name'].map((label, idx) => (
                    <div className="input-group" key={idx}>
                      <label className="input-label">{label}</label>
                      <input
                        type="text"
                        placeholder={`Enter ${label.toLowerCase()}`}
                        className="input-field"
                        required
                      />
                    </div>
                  ))}

                  <div className="card-details-grid">
                    <div className="input-group">
                      <label className="input-label">Expire Date</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="input-field"
                        required
                      />
                    </div>
                    <div className="input-group">
                      <label className="input-label">CVV</label>
                      <input
                        type="text"
                        placeholder="CVV"
                        className="input-field"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Side: Order Summary */}
        <div className="order-summary">
          <h3 className="summary-title">Order Summary</h3>
          <div className="products-list">
            {cart.products.map((product) => (
              <div key={product.id} className="product-item">
                <div className="product-image-container">
                  {/* thumb-sm: locked 56×56px square, object-fit:cover */}
                  <div className="thumb-sm">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="product-details">
                    <h4 className="product-name">{product.name}</h4>
                    <p className="product-quantity">₹{product.price} x {product.quantity}</p>
                  </div>
                </div>
                <div className="product-price">
                  ₹{(product.price * product.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className="total-price-container">
            <span>Total Price:</span>
            <span className="total-price">₹{cart.totalPrice.toFixed(2)}</span>
          </div>

          <button
            className="place-order-btn"
            onClick={handleOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;