import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Package, Heart, Award } from 'lucide-react';
import Button from '../components/ui/Button';
import ProductCard from '../components/product/ProductCard';
import { products, categories } from '../data/products';
import heroImg from '../assets/hero-img.png';
import jellyImg from '../assets/products/jelly.png';

const HomePage = () => {
  const bestSellers = products.filter((p) => p.bestseller).slice(0, 4);
  const newArrivals = products.filter((p) => p.newArrival).slice(0, 4);
  const featuredProducts = products.filter((p) => p.featured).slice(0, 8);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="bg-white py-16 md:py-24 overflow-hidden relative"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-white/40"></div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-primary-lighter text-primary px-4 py-2 rounded-full mb-6 animate-scale-in">
                <Sparkles size={16} />
                <span className="text-sm font-semibold">New Arrivals Just Dropped!</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-primary leading-tight mb-6">
                THE HAPPY<br />WAY TO<br />SNACK
              </h1>

              <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Little bites.<br />Big happiness.
              </p>

              <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto lg:mx-0">
                Discover premium candies and treats made with love, real ingredients,
                and a whole lot of flavor.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/collections/all">
                  <Button size="large" className="group">
                    Shop Now
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Button>
                </Link>
                <Link to="/collections/all">
                  <Button size="large" variant="secondary">
                    Explore Collections
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-primary-lighter py-10">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center flex-shrink-0">
                <Award size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">Premium Quality</p>
                <p className="text-xs text-gray-600">Finest ingredients</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center flex-shrink-0">
                <Package size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">Fresh Quality</p>
                <p className="text-xs text-gray-600">Always fresh</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">Made with Love</p>
                <p className="text-xs text-gray-600">Real ingredients</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center flex-shrink-0">
                <Sparkles size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">Premium Taste</p>
                <p className="text-xs text-gray-600">Unforgettable flavors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From chewy jellies to rich chocolates, find your perfect sweet treat
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/collections/${category.slug}`}
                className="group block"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-gray-50 border-2 border-gray-100 group-hover:border-primary transition-colors">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-lg">{category.name}</h3>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  <span>Explore</span>
                  <ArrowRight size={18} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-primary mb-2">
                Best Sellers
              </h2>
              <p className="text-lg text-gray-600">
                Customer favorites you'll absolutely love
              </p>
            </div>
            <Link
              to="/collections/best-sellers"
              className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
            >
              View All
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              to="/collections/best-sellers"
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
            >
              View All Best Sellers
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-20 md:py-28 bg-primary text-white overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl font-black mb-6">
                Sweet Deals<br />Every Week!
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join our newsletter and get exclusive discounts, new product alerts,
                and first access to limited editions.
              </p>
              <a href="#newsletter">
                <Button variant="secondary" size="large">
                  Sign Me Up
                </Button>
              </a>
            </div>
            <div className="relative">
              <img
                src={jellyImg}
                alt="Sweet deals"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-primary mb-2">
                New Arrivals
              </h2>
              <p className="text-lg text-gray-600">
                Fresh flavors just for you
              </p>
            </div>
            <Link
              to="/collections/new-arrivals"
              className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
            >
              View All
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">
              Sweet Moments, Made Simple
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              At Sweet Bites, we believe life's best moments deserve the best treats.
              That's why we craft every candy with premium ingredients, real fruit
              flavors, and a whole lot of love. From our kitchen to your happy place.
            </p>
            <Link to="/our-story">
              <Button size="large" variant="outline">
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
