import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, Minus, Plus, ShoppingCart, ChevronRight, Check } from 'lucide-react';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import ProductCard from '../components/product/ProductCard';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetailPage = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const { addToCart, openCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
          <Link to="/" className="text-primary hover:text-primary-dark font-semibold">
            Return to homepage
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    const variant = product.variants[selectedVariant];
    addToCart(product, variant, quantity);
    openCart();
  };

  const handleBuyNow = () => {
    const variant = product.variants[selectedVariant];
    addToCart(product, variant, quantity);
    // In a real app, this would redirect to checkout
    alert('Proceeding to checkout...');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="container-custom py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-primary">
              Home
            </Link>
            <ChevronRight size={16} className="text-gray-400" />
            <Link
              to={`/collections/${product.category.toLowerCase()}`}
              className="text-gray-600 hover:text-primary"
            >
              {product.category}
            </Link>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="text-gray-900 font-semibold">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Images */}
          <div>
            {/* Main Image */}
            <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden mb-6 border-2 border-gray-100">
              {product.discount > 0 && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge variant="sale">-{product.discount}%</Badge>
                </div>
              )}
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-6">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all hover:shadow-lg ${
                    selectedImage === index
                      ? 'border-primary shadow-md'
                      : 'border-gray-200 hover:border-primary'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right - Product Info */}
          <div>
            {/* Category & Badges */}
            <div className="flex items-center gap-3 mb-4">
              <Link
                to={`/collections/${product.category.toLowerCase()}`}
                className="text-sm font-bold text-primary hover:text-primary-dark uppercase tracking-wider"
              >
                {product.category}
              </Link>
              {product.bestseller && <Badge variant="bestseller">Best Seller</Badge>}
              {product.newArrival && <Badge variant="new">New</Badge>}
            </div>

            {/* Product Name */}
            <h1 className="text-4xl font-black text-gray-900 mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={
                      i < Math.floor(product.rating)
                        ? 'fill-yellow-500 text-yellow-500'
                        : 'text-gray-300'
                    }
                  />
                ))}
              </div>
              <span className="text-gray-600">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl font-black text-primary">
                ${product.variants[selectedVariant].price.toFixed(2)}
              </span>
              {product.variants[selectedVariant].originalPrice >
                product.variants[selectedVariant].price && (
                <span className="text-2xl text-gray-500 line-through">
                  ${product.variants[selectedVariant].originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-900 mb-3">
                Select Size:
              </label>
              <div className="grid grid-cols-3 gap-3">
                {product.variants.map((variant, index) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(index)}
                    className={`px-4 py-3 border-2 rounded-lg font-semibold transition-all ${
                      selectedVariant === index
                        ? 'border-primary bg-primary text-white'
                        : 'border-gray-300 hover:border-primary'
                    }`}
                  >
                    <div className="text-sm">{variant.name}</div>
                    <div className="text-xs opacity-75 mt-1">
                      ${variant.price.toFixed(2)}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-gray-900 mb-3">
                Quantity:
              </label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition-colors"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="w-16 text-center font-bold text-lg">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition-colors"
                  >
                    <Plus size={18} />
                  </button>
                </div>
                <span className="text-gray-600">
                  Total: ${(product.variants[selectedVariant].price * quantity).toFixed(2)}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <Button
                onClick={handleAddToCart}
                size="large"
                className="flex-1"
              >
                <ShoppingCart size={20} />
                Add to Cart
              </Button>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`w-14 h-14 flex items-center justify-center border-2 rounded-lg transition-all ${
                  isWishlisted
                    ? 'border-primary bg-primary text-white'
                    : 'border-gray-300 hover:border-primary'
                }`}
              >
                <Heart
                  size={22}
                  className={isWishlisted ? 'fill-current' : ''}
                />
              </button>
            </div>

            <Button
              onClick={handleBuyNow}
              variant="secondary"
              size="large"
              fullWidth
            >
              Buy Now
            </Button>

            {/* Features */}
            <div className="mt-8 p-6 bg-primary-lighter rounded-2xl border-2 border-primary/20">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check size={18} className="text-primary" />
                  <span className="text-sm text-gray-700">
                    Made with real fruit ingredients
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={18} className="text-primary" />
                  <span className="text-sm text-gray-700">
                    Always fresh & delicious
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={18} className="text-primary" />
                  <span className="text-sm text-gray-700">
                    Premium quality guaranteed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-20">
          <div className="border-b-2 border-gray-200 mb-10">
            <div className="flex gap-8">
              {['description', 'ingredients', 'nutrition', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 px-2 font-bold capitalize transition-colors relative ${
                    activeTab === tab
                      ? 'text-primary'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-4xl">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>
            )}

            {activeTab === 'ingredients' && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Ingredients
                </h3>
                <p className="text-gray-700">{product.ingredients}</p>
              </div>
            )}

            {activeTab === 'nutrition' && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Nutrition Facts
                </h3>
                <p className="text-gray-700">{product.nutrition}</p>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Customer Reviews
                </h3>
                <p className="text-gray-600">
                  Reviews feature coming soon! This product has {product.reviewCount}{' '}
                  reviews with an average rating of {product.rating} stars.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-24">
            <h2 className="text-4xl font-black text-primary mb-10">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sticky Add to Cart - Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border p-4 z-20 shadow-2xl">
        <div className="flex items-center gap-4">
          <div>
            <p className="text-xs text-gray-600">Price</p>
            <p className="text-2xl font-bold text-primary">
              ${product.variants[selectedVariant].price.toFixed(2)}
            </p>
          </div>
          <Button onClick={handleAddToCart} size="large" className="flex-1">
            <ShoppingCart size={18} />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
