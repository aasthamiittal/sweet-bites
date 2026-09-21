import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CartDrawer from './components/cart/CartDrawer';
import HomePage from './pages/HomePage';
import CollectionPage from './pages/CollectionPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import AccountPage from './pages/AccountPage';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/collections/:handle" element={<CollectionPage />} />
              <Route path="/products/:slug" element={<ProductDetailPage />} />
              <Route path="/collections" element={<CollectionPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />

              {/* Content Pages */}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/our-story" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/shipping" element={<PlaceholderPage title="Shipping Info" />} />
              <Route path="/returns" element={<PlaceholderPage title="Returns & Refunds" />} />
              <Route path="/track-order" element={<PlaceholderPage title="Track Your Order" />} />
              <Route path="/careers" element={<PlaceholderPage title="Careers" />} />
              <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" />} />
              <Route path="/terms" element={<PlaceholderPage title="Terms of Service" />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="/search" element={<PlaceholderPage title="Search" />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
        </div>
      </Router>
    </CartProvider>
  );
}

// Simple placeholder component for unimplemented pages
const PlaceholderPage = ({ title }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-4xl font-black text-primary mb-4">{title}</h1>
        <p className="text-gray-600">This page is coming soon!</p>
      </div>
    </div>
  );
};

export default App;
