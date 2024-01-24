import { useState, createContext } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [isOpen, setIsopen] = useState(false);

  return (
    <CartContext.Provider value={{ isOpen, setIsopen }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
