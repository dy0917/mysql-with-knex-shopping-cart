import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
export const CartContext = createContext("Kingsley");

function reducer(state, action) {
  if (action.type === "addToCart") {
    return [...state, action.payload];
  } else if (action.type === "removeFromCart") {
    return [];
  }
  return state;
}

export const CartProvider = (props) => {
  const [cart, dispatch] = useReducer(reducer, []);

  const groupedItem = () => {
    return cart.reduce((accumulator, current) => {
      const key = current.id;
      if (!accumulator[key]) {
        accumulator[key] = [];
      }
      accumulator[key].push(current);
      return accumulator;
    }, {});
  };
  return (
    <CartContext.Provider value={{ cart, cartDispatch: dispatch, groupedItem }}>
      {props.children}
    </CartContext.Provider>
  );
};
