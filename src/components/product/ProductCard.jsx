import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Minus, Plus } from 'lucide-react';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addToCart, openCart, cartItems, updateQuantity } = useCart();

  // Check if product is in cart
  const cartItem = cartItems.find((item) => item.id === product.id);
  const isInCart = !!cartItem;
  const currentQuantity = cartItem?.quantity || 0;

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    openCart();
  };

  const handleIncreaseQuantity = (e) => {
    e.preventDefault();
    if (isInCart) {
      updateQuantity(product.id, cartItem.variantId, currentQuantity + 1);
    } else {
      addToCart(product);
    }
  };

  const handleDecreaseQuantity = (e) => {
    e.preventDefault();
    if (currentQuantity > 1) {
      updateQuantity(product.id, cartItem.variantId, currentQuantity - 1);
    } else {
      updateQuantity(product.id, cartItem.variantId, 0); // This will remove the item
    }
  };

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <Link
      to={`/products/${product.slug}`}
      className="group block bg-white rounded-2xl border-2 border-gray-100 hover:border-primary hover:shadow-2xl transition-all duration-300 overflow-hidden h-full"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Badges */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {product.discount > 0 && (
            <Badge variant="sale">-{product.discount}%</Badge>
          )}
          {product.newArrival && <Badge variant="new">New</Badge>}
          {product.bestseller && <Badge variant="bestseller">Best Seller</Badge>}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistToggle}
          className="absolute top-4 right-4 z-10 w-11 h-11 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:scale-110"
        >
          <Heart
            size={20}
            className={isWishlisted ? 'fill-current text-primary' : ''}
          />
        </button>

        {/* Product Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
      </div>

      {/* Product Info */}
      <div className="p-5">
        {/* Category */}
        <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">
          {product.category}
        </p>

        {/* Product Name */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={
                  i < Math.floor(product.rating)
                    ? 'fill-yellow-500 text-yellow-500'
                    : 'text-gray-300'
                }
              />
            ))}
          </div>
          <span className="text-xs text-gray-600">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-primary">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice > product.price && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Add to Cart Button or Quantity Controls */}
        {isInCart ? (
          <div className="flex items-center border-2 border-primary rounded-lg overflow-hidden">
            <button
              onClick={handleDecreaseQuantity}
              className="flex-1 bg-white hover:bg-primary-lighter text-primary font-bold py-3 px-4 transition-colors touch-manipulation"
            >
              <Minus size={18} className="mx-auto" />
            </button>
            <div className="flex-1 bg-primary text-white font-bold py-3 px-4 text-center">
              {currentQuantity}
            </div>
            <button
              onClick={handleIncreaseQuantity}
              className="flex-1 bg-white hover:bg-primary-lighter text-primary font-bold py-3 px-4 transition-colors touch-manipulation"
            >
              <Plus size={18} className="mx-auto" />
            </button>
          </div>
        ) : (
          <Button
            onClick={handleAddToCart}
            fullWidth
            className="group-hover:shadow-lg"
          >
            <ShoppingCart size={18} />
            Add to Cart
          </Button>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
