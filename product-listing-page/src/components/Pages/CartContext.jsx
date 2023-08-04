import React, { createContext, useContext, useState } from 'react';

// Create a new context for the cart
const CartContext = createContext();

// Custom hook to consume the cart context
export function useCart() {
  return useContext(CartContext);
}

// CartProvider component to wrap your application and provide the cart state
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  // Remove item from cart
  const removeFromCart = (itemId) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== itemId));
  };

  // Clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Cart context value
  const cartContextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>;
}
