import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem('cart_v1');
      return raw ? JSON.parse(raw) : [];
    } catch (e) { return []; }
  });
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    localStorage.setItem('cart_v1', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) {
        return prev.map(p => p.id === product.id ? { ...p, qty: (p.qty||1)+1 } : p);
      }
      return [...prev, { ...product, qty: 1 }];
    });
    pushToast(`${product.name} đã được thêm vào giỏ`);
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const pushToast = (message) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, toasts }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
