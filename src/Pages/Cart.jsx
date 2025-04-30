import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FaTrashAlt, FaPlus, FaMinus } from 'react-icons/fa';
import Modal from '../components/Modal';
import ChangeAddress from '../components/ChangeAddress';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/cartSlice';
import './Cart.css'; // Custom CSS for reusable styles

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const [address, setAddress] = useState('Main Street, Porur, Chennai');
    const [isModelOpen, setIsModelOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="min-h-screen pt-30 bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            {cart.products.length > 0 ? (
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Cart Items */}
                        <div className="lg:w-2/3">
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <h1 className="text-2xl font-bold text-gray-900 mb-6">Your Shopping Bag</h1>
                                <div className="divide-y divide-gray-200">
                                    {cart.products.map((product) => (
                                        <div key={product.id} className="py-6 flex flex-col sm:flex-row gap-4">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full sm:w-32 h-32 object-cover rounded-lg"
                                            />
                                            <div className="flex-1">
                                                <div className="flex justify-between">
                                                    <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                                                    <button
                                                        className="text-gray-400 hover:text-red-500 transition-colors"
                                                        onClick={() => dispatch(removeFromCart(product.id))}
                                                    >
                                                        <FaTrashAlt />
                                                    </button>
                                                </div>
                                                <p className="text-gray-500 mt-1">${product.price.toFixed(2)}</p>
                                                <div className="mt-4 flex items-center">
                                                    <div className="flex items-center border border-gray-300 rounded-md">
                                                        <button
                                                            className="quantity-btn px-3 py-1 text-gray-600"
                                                            onClick={() => dispatch(decreaseQuantity(product.id))}
                                                        >
                                                            <FaMinus size={12} />
                                                        </button>
                                                        <span className="px-4 py-1 text-center">{product.quantity}</span>
                                                        <button
                                                            className="quantity-btn px-3 py-1 text-gray-600"
                                                            onClick={() => dispatch(increaseQuantity(product.id))}
                                                        >
                                                            <FaPlus size={12} />
                                                        </button>
                                                    </div>
                                                    <div className="ml-auto">
                                                        <p className="text-lg font-medium">
                                                            ${(product.quantity * product.price).toFixed(2)}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:w-1/3">
                            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
                                <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
                                <div className="space-y-4">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Subtotal</span>
                                        <span>${cart.totalPrice.toFixed(2)}</span>
                                    </div>
                                    <div className="border-t border-gray-200 pt-4">
                                        <div className="flex justify-between mb-2">
                                            <span className="text-gray-600">Shipping</span>
                                            <span className="text-green-600">Free</span>
                                        </div>
                                        <div className="address-block">
                                            <p>Delivering to:</p>
                                            <p className="font-medium">{address}</p>
                                            <button
                                                onClick={() => setIsModelOpen(true)}
                                                className="text-blue-500 hover:text-blue-700 mt-1"
                                            >
                                                Change address
                                            </button>
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-200 pt-4 flex justify-between font-bold text-lg">
                                        <span>Total</span>
                                        <span>${cart.totalPrice.toFixed(2)}</span>
                                    </div>
                                    <button
                                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium mt-6"
                                        onClick={() => navigate('/checkout')}
                                    >
                                        Checkout Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Modal for Changing Address */}
                    <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
                        <ChangeAddress setAddress={setAddress} setIsModelOpen={setIsModelOpen} />
                    </Modal>
                </div>
            ) : (
                <div className="max-w-md mx-auto text-center bg-white rounded-xl shadow-sm p-8">
                    <div className="flex justify-center mb-6">
                        <img
                            src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif"
                            alt="Empty cart"
                            className="empty-cart-img"
                        />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Your cart is empty</h2>
                    <p className="text-gray-600 mb-6">Looks like you haven't added any items to your cart yet</p>
                    <Link
                        to="/"
                        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg"
                    >
                        Start Shopping
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Cart;
