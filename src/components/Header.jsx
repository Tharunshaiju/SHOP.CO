import React, { useState } from 'react';
import { ShoppingCart, CircleUserRound, Search, Menu } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './Modal';
import Login from './Login';
import Register from './Register';
import { setSearchTerm } from '../redux/productSlice';

const CartIcon = ({ count }) => (
  <Link to="/cart" className="relative">
    <ShoppingCart className="cursor-pointer hover:text-black transition" />
    {count > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-600 rounded-full text-white text-xs w-5 h-5 flex items-center justify-center">
        {count}
      </span>
    )}
  </Link>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [searchText, setSearchText] = useState('');
  const products = useSelector(state => state.cart.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(searchText));
    navigate('/filter-data');
  };

  const openSignUp = () => {
    setIsLogin(false);
    setIsModelOpen(true);
  };

  const openLogin = () => {
    setIsLogin(true);
    setIsModelOpen(false);
  };

  return (
    <section className="w-full h-20 flex justify-between items-center px-6 md:px-8 shadow-md bg-white z-50 relative">

      <div className="hidden md:flex w-full justify-between items-center">
        <div className="flex items-center gap-12">
          <Link to="/" className="text-2xl font-bold">SHOP.CO</Link>

          <nav>
            <ul className="flex gap-8 text-gray-600">
              <li><Link to="/" className="hover:text-black">Home</Link></li>
              <li><Link to="/shop" className="hover:text-black">New Arrivals</Link></li>
              <li><Link to="/" className="hover:text-black">Contact</Link></li>
              <li><Link to="/" className="hover:text-black">About</Link></li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="border rounded-full pl-10 pr-10 py-2 w-64 h-10 focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Search..."
            />
            {searchText.length === 0 && (
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            )}
            {searchText.length > 0 && (
              <button
                type="button"
                onClick={() => setSearchText('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 font-bold"
              >
                ×
              </button>
            )}
          </form>

          <CartIcon count={products.length} />
          <button className="hidden md:block" onClick={() => setIsModelOpen(true)}>
            Login | Register
          </button>
        </div>
      </div>

      <div className="flex w-full justify-between items-center md:hidden">
        <Menu className="cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />
        <Link to="/" className="text-2xl font-bold">SHOP.CO</Link>
        <div className="flex gap-4 items-center">
          <Search className="cursor-pointer" />
          <CartIcon count={products.length} />
          <CircleUserRound className="cursor-pointer" />
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md py-4 px-6 md:hidden z-40">
          <ul className="flex flex-col gap-4 text-gray-700">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/shop" onClick={() => setMenuOpen(false)}>New Arrivals</Link></li>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>About</Link></li>
          </ul>
        </div>
      )}

      <Modal setIsModelOpen={setIsModelOpen} isModelOpen={isModelOpen}>
        {isLogin ? <Login openSignUp={openSignUp} /> : <Register openLogin={openLogin} />}
      </Modal>
    </section>
  );
};

export default Header;