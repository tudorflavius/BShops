import { createContext, useState, useContext } from "react";

// Crează contextul
const CartContext = createContext();

// Crează providerul
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Adaugă un produs în coș
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Șterge un produs din coș
  const removeFromCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Folosește contextul
export function useCart() {
  return useContext(CartContext);
}
