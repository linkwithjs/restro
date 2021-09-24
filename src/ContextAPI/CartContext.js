import React, { useState, createContext } from "react";
import { itemCount, totalAmount } from "../components/common/AddToCart";
export const CartContext = createContext();

export const CartProvider = (props) => {
  const [countItem, setCountItem] = useState(itemCount());
  const [total, setTotal] = useState(totalAmount());

  return (
    <CartContext.Provider
      value={{ countItem: [countItem, setCountItem], total: [total, setTotal] }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
