import { createContext, useContext, useState, useEffect } from 'react';
import Toast from '../components/ui/Toast';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('sweetBitesCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    localStorage.setItem('sweetBitesCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, variant = null, quantity = 1) => {
    setCartItems((prevItems) => {
      const variantId = variant ? variant.id : product.variants?.[0]?.id || null;
      const existingItem = prevItems.find(
        (item) => item.id === product.id && item.variantId === variantId
      );

      if (existingItem) {
        setToast({ message: `Updated ${product.name} quantity in cart!`, type: 'success' });
        return prevItems.map((item) =>
          item.id === product.id && item.variantId === variantId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      const price = variant ? variant.price : product.price;
      const variantName = variant ? variant.name : product.variants?.[0]?.name || null;

      setToast({ message: `${product.name} added to cart!`, type: 'success' });

      return [
        ...prevItems,
        {
          id: product.id,
          variantId,
          name: product.name,
          slug: product.slug,
          image: product.images[0],
          price,
          variantName,
          quantity,
        },
      ];
    });
  };

  const removeFromCart = (productId, variantId) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) => !(item.id === productId && item.variantId === variantId)
      )
    );
  };

  const updateQuantity = (productId, variantId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, variantId);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId && item.variantId === variantId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount,
    isCartOpen,
    openCart,
    closeCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </CartContext.Provider>
  );
};
