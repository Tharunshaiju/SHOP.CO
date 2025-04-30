import React from 'react';
import { useNavigate } from 'react-router-dom';

const Order = ({ order }) => {
    const navigate = useNavigate();
  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
      <h2 className="text-2xl font-semibold mb-2 text-green-600">Thank you for your order!</h2>
      <p className="mb-6 text-gray-700">Your order has been placed successfully. You will receive a confirmation email shortly.</p>
      
      <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
        <div>
          <h3 className="text-lg font-bold mb-2">Order Summary</h3>
          <p className="text-gray-700">Order Number: <span className="font-medium">{order.orderNumber}</span></p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">Shipping Information</h3>
          <p className="text-gray-700">{order.shippingInformation.address}</p>
          <p className="text-gray-700">{order.shippingInformation.city}</p>
          <p className="text-gray-700">{order.shippingInformation.zip}</p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">Products Ordered</h3>
          <div className="space-y-2">
            {order.products.map((product, index) => (
              <div key={index} className="flex justify-between text-gray-800">
                <p>{product.name} × {product.quantity}</p>
                <p>₹{product.price * product.quantity}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between font-semibold text-lg border-t pt-4">
          <span>Total Price:</span>
          <span>₹{order.totalPrice}</span>
        </div>

        <div className="flex gap-4 mt-6">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Track Order</button>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition" onClick={() => navigate('/')}>Continue Shopping</button>
        </div>
      </div>
    </div>
  );
};

export default Order;
