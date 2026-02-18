import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, Menu, X, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './Modal';
import Login from './Login';
import Register from './Register';
import { setSearchTerm } from '../redux/productSlice';

const CartIcon = ({ count }) => (
  <Link to="/cart" className="relative p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
    <ShoppingCart size={22} className="text-gray-700" />
    {count > 0 && (
      <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1 leading-none"
        style={{ animation: 'scaleIn 0.2s ease both' }}>
        {count}
      </span>
    )}
  </Link>
);

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'New Arrivals' },
  { to: '/', label: 'Contact' },
  { to: '/', label: 'About' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const products = useSelector(state => state.cart.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchText.trim()) return;
    dispatch(setSearchTerm(searchText));
    navigate('/filter-data');
    setMenuOpen(false);
  };

  const openSignUp = () => { setIsLogin(false); setIsModelOpen(true); };
  const openLogin = () => { setIsLogin(true); setIsModelOpen(false); };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300"
        style={{
          height: '72px',
          boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : '0 1px 0 #E5E0D8',
        }}
      >
        <div className="h-full flex items-center justify-between"
          style={{ padding: '0 clamp(1rem, 4vw, 3rem)' }}>

          {/* Logo */}
          <Link to="/" className="text-2xl font-extrabold tracking-tighter text-black flex-shrink-0"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.04em' }}>
            SHOP.CO
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ to, label }) => (
              <Link key={label} to={to}
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors duration-200 relative group">
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full rounded-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search products..."
                className="pl-10 pr-8 py-2 text-sm w-56 rounded-full border border-gray-200 bg-gray-50 focus:outline-none focus:border-black focus:bg-white transition-all duration-200"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              {searchText && (
                <button type="button" onClick={() => setSearchText('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors font-bold text-lg leading-none">
                  ×
                </button>
              )}
            </form>

            <CartIcon count={products.length} />

            <button
              onClick={() => setIsModelOpen(true)}
              className="ml-2 px-4 py-2 text-sm font-semibold text-white bg-black rounded-full hover:bg-gray-800 transition-colors duration-200"
            >
              Sign In
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-1">
            <CartIcon count={products.length} />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-30"
          onClick={() => setMenuOpen(false)}
          style={{ animation: 'fadeIn 0.2s ease' }}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className="fixed top-0 left-0 bottom-0 z-50 bg-white w-72 max-w-full flex flex-col md:hidden"
        style={{
          transform: menuOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: menuOpen ? '4px 0 24px rgba(0,0,0,0.15)' : 'none',
        }}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 h-[72px] border-b border-gray-100">
          <span className="text-xl font-extrabold tracking-tighter"
            style={{ fontFamily: 'var(--font-display)' }}>SHOP.CO</span>
          <button onClick={() => setMenuOpen(false)} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Drawer Search */}
        <div className="px-6 pt-5">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2.5 text-sm rounded-full border border-gray-200 bg-gray-50 focus:outline-none focus:border-black focus:bg-white transition-all duration-200"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          </form>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 px-4 pt-4 overflow-y-auto">
          {navLinks.map(({ to, label }, i) => (
            <Link
              key={label}
              to={to}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between px-3 py-3.5 rounded-xl text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-black transition-all duration-200"
              style={{ animation: `fadeInUp 0.3s ease both`, animationDelay: `${i * 0.05 + 0.1}s` }}
            >
              {label}
              <ChevronRight size={16} className="text-gray-400" />
            </Link>
          ))}
        </nav>

        {/* Drawer Footer */}
        <div className="px-6 pb-8 pt-4 border-t border-gray-100">
          <button
            onClick={() => { setIsModelOpen(true); setMenuOpen(false); }}
            className="w-full py-3 text-sm font-semibold text-white bg-black rounded-full hover:bg-gray-800 transition-colors"
          >
            Sign In / Register
          </button>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div style={{ height: '72px' }} />

      <Modal setIsModelOpen={setIsModelOpen} isModelOpen={isModelOpen}>
        {isLogin ? <Login openSignUp={openSignUp} /> : <Register openLogin={openLogin} />}
      </Modal>
    </>
  );
};

export default Header;
