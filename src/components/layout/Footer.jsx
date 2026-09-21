import { Link } from 'react-router-dom';
import { Share2, Mail, MessageCircle } from 'lucide-react';
import Button from '../ui/Button';
import logo from '../../assets/logo-main.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t-2 border-gray-200 mt-24">
      {/* Newsletter Section */}
      <div id="newsletter" className="bg-primary text-white py-20">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center px-4">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Join the Sweet Life!</h3>
            <p className="text-lg mb-8">
              Subscribe to get special offers, free giveaways, and exclusive deals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button variant="secondary" size="medium" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <img
                src={logo}
                alt="Sweet Bites"
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-gray-600 mb-6">
              Bringing joy one sweet bite at a time. Premium quality candies and
              treats for every occasion.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary text-white flex items-center justify-center rounded-lg hover:bg-primary-dark transition-colors"
                aria-label="Facebook"
              >
                <Share2 size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary text-white flex items-center justify-center rounded-lg hover:bg-primary-dark transition-colors"
                aria-label="Instagram"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary text-white flex items-center justify-center rounded-lg hover:bg-primary-dark transition-colors"
                aria-label="Twitter"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Shop</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/collections/all"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  to="/collections/jellies"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Jellies
                </Link>
              </li>
              <li>
                <Link
                  to="/collections/gummies"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Gummies
                </Link>
              </li>
              <li>
                <Link
                  to="/collections/chocolates"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Chocolates
                </Link>
              </li>
              <li>
                <Link
                  to="/collections/best-sellers"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Best Sellers
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Customer Service
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link
                  to="/returns"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link
                  to="/track-order"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Track Your Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/our-story"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-sm">
              © {currentYear} Sweet Bites. All rights reserved.
            </p>
            <div className="flex items-center gap-4">

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                alt="Mastercard"
                className="h-8"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                alt="PayPal"
                className="h-8"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
