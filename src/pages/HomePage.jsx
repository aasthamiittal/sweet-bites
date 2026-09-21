import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Package, Heart, Award, Globe } from 'lucide-react';
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
        className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden relative min-h-[500px] sm:min-h-[600px] flex items-center"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-white/40"></div>
        <div className="container-custom relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary-lighter text-primary px-4 py-2 rounded-full animate-scale-in">
                <Sparkles size={16} />
                <span className="text-sm font-semibold">New Arrivals Just Dropped!</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-primary leading-[1.1]">
                THE HAPPY WAY TO SNACK
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
                Little bites. Big happiness.
              </p>

              <p className="text-base sm:text-lg text-gray-700 max-w-md mx-auto lg:mx-0 leading-relaxed">
                Discover premium candies and treats made with love, real ingredients, and a whole lot of flavor.
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
      <section className="bg-primary-lighter py-8 sm:py-10">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary text-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                <Award size={20} className="sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0">
                <p className="font-bold text-gray-900 text-xs sm:text-sm truncate">Premium Quality</p>
                <p className="text-[10px] sm:text-xs text-gray-600 truncate">Finest ingredients</p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary text-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                <Package size={20} className="sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0">
                <p className="font-bold text-gray-900 text-xs sm:text-sm truncate">Fresh Quality</p>
                <p className="text-[10px] sm:text-xs text-gray-600 truncate">Always fresh</p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary text-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                <Heart size={20} className="sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0">
                <p className="font-bold text-gray-900 text-xs sm:text-sm truncate">Made with Love</p>
                <p className="text-[10px] sm:text-xs text-gray-600 truncate">Real ingredients</p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary text-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                <Globe size={20} className="sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0">
                <p className="font-bold text-gray-900 text-xs sm:text-sm truncate">Worldwide Shipping</p>
                <p className="text-[10px] sm:text-xs text-gray-600 truncate">Ships globally</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary">
              Shop by Category
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              From chewy jellies to rich chocolates, find your perfect sweet treat
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
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
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-12 md:mb-16">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary">
                Best Sellers
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">
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
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-primary text-white overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight">
                Sweet Deals Every Week!
              </h2>
              <p className="text-base sm:text-lg md:text-xl opacity-90 leading-relaxed">
                Join our newsletter and get exclusive discounts, new product alerts, and first access to limited editions.
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
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-12 md:mb-16">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary">
                New Arrivals
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">
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
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary">
              Sweet Moments, Made Simple
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed px-4">
              At Sweet Bites, we believe life's best moments deserve the best treats. That's why we craft every candy with premium ingredients, real fruit flavors, and a whole lot of love. From our kitchen to your happy place.
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
