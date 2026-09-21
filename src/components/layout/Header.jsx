import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X, ChevronDown } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import logo from '../../assets/logo-main.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { getCartCount, openCart } = useCart();

  const navLinks = [
    { name: 'Shop', path: '/collections/all' },
    { name: 'Collections', path: '/collections' },
    { name: 'Best Sellers', path: '/collections/best-sellers' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className="sticky top-0 z-30 bg-white">
      {/* Main Header */}
      <div className="border-b border-border">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-primary hover:bg-primary-lighter rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="flex items-center hover:opacity-90 transition-opacity"
            >
              <img
                src={logo}
                alt="Sweet Bites - Little Bites, Big Happiness"
                className="h-12 lg:h-16 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-900 font-semibold hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="w-10 h-10 flex items-center justify-center text-primary hover:bg-primary-lighter rounded-lg transition-colors"
              >
                <Search size={20} />
              </button>

              {/* Account */}
              <Link
                to="/account"
                className="hidden md:flex w-10 h-10 items-center justify-center text-primary hover:bg-primary-lighter rounded-lg transition-colors"
              >
                <User size={20} />
              </Link>

              {/* Cart */}
              <button
                onClick={openCart}
                className="relative w-10 h-10 flex items-center justify-center text-primary hover:bg-primary-lighter rounded-lg transition-colors"
              >
                <ShoppingCart size={20} />
                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="border-b border-border bg-gray-50 animate-slide-in-left">
          <div className="container-custom py-4">
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search for sweet treats..."
                className="w-full px-6 py-3 pl-12 border-2 border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                autoFocus
              />
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-primary"
              />
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-b border-border bg-white animate-slide-in-left">
          <nav className="container-custom py-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-semibold text-gray-900 hover:text-primary transition-colors py-2"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/account"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-semibold text-gray-900 hover:text-primary transition-colors py-2 flex items-center gap-2"
              >
                <User size={20} />
                Account
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
