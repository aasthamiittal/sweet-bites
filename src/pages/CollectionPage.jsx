import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import ProductCard from '../components/product/ProductCard';
import { products, categories } from '../data/products';

const CollectionPage = () => {
  const { handle } = useParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100]);

  // Get collection info
  const collection = categories.find((c) => c.slug === handle);
  const isAllProducts = handle === 'all';
  const isBestSellers = handle === 'best-sellers';
  const isNewArrivals = handle === 'new-arrivals';

  // Filter products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by collection type
    if (!isAllProducts) {
      if (isBestSellers) {
        filtered = filtered.filter((p) => p.bestseller);
      } else if (isNewArrivals) {
        filtered = filtered.filter((p) => p.newArrival);
      } else if (collection) {
        filtered = filtered.filter((p) => p.category === collection.name);
      }
    }

    // Filter by selected categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) =>
        selectedCategories.includes(p.category)
      );
    }

    // Filter by price range
    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Sort products
    switch (sortBy) {
      case 'price-low-high':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name-a-z':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-z-a':
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Featured - already in default order
        break;
    }

    return filtered;
  }, [
    handle,
    selectedCategories,
    priceRange,
    sortBy,
    collection,
    isAllProducts,
    isBestSellers,
    isNewArrivals,
  ]);

  const handleCategoryToggle = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 100]);
  };

  const pageTitle = collection?.name || (isBestSellers ? 'Best Sellers' : isNewArrivals ? 'New Arrivals' : 'All Products');
  const pageDescription = collection?.description || 'Discover our full collection of premium sweet treats';

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-primary-lighter py-12 md:py-16">
        <div className="container-custom text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-4">
            {pageTitle}
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {pageDescription}
          </p>
          <p className="text-sm text-gray-600 mt-4">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>
        </div>
      </div>

      <div className="container-custom py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Filters Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 shadow-lg">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-black text-primary">Filters</h3>
                {(selectedCategories.length > 0 ||
                  priceRange[0] !== 0 ||
                  priceRange[1] !== 100) && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-primary hover:text-primary-dark font-semibold"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Category Filter */}
              {isAllProducts && (
                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-4">Category</h4>
                  <div className="space-y-3">
                    {['Jellies', 'Gummies', 'Chocolates', 'Candy'].map(
                      (category) => (
                        <label
                          key={category}
                          className="flex items-center gap-3 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCategoryToggle(category)}
                            className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary"
                          />
                          <span className="text-gray-700">{category}</span>
                        </label>
                      )
                    )}
                  </div>
                </div>
              )}

              {/* Price Filter */}
              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4">Price Range</h4>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], parseInt(e.target.value)])
                    }
                    className="w-full accent-primary"
                  />
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-12 gap-4">
              {/* Mobile Filter Button */}
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                <SlidersHorizontal size={18} />
                Filters
              </button>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-3 ml-auto">
                <label className="text-sm font-semibold text-gray-700 hidden sm:block">
                  Sort by:
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary font-semibold"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="name-a-z">Name: A to Z</option>
                  <option value="name-z-a">Name: Z to A</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600 mb-4">
                  No products found matching your filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="text-primary hover:text-primary-dark font-semibold"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="fixed left-0 top-0 h-full w-full max-w-xs sm:max-w-sm bg-white shadow-2xl z-50 lg:hidden animate-slide-in-left overflow-y-auto">
            <div className="p-4 sm:p-8">
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-black text-primary">Filters</h3>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Category Filter */}
              {isAllProducts && (
                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-4">Category</h4>
                  <div className="space-y-3">
                    {['Jellies', 'Gummies', 'Chocolates', 'Candy'].map(
                      (category) => (
                        <label
                          key={category}
                          className="flex items-center gap-3 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCategoryToggle(category)}
                            className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary"
                          />
                          <span className="text-gray-700">{category}</span>
                        </label>
                      )
                    )}
                  </div>
                </div>
              )}

              {/* Price Filter */}
              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4">Price Range</h4>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], parseInt(e.target.value)])
                    }
                    className="w-full accent-primary"
                  />
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={clearFilters}
                className="w-full py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CollectionPage;
