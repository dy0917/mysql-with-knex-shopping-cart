import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
export const CartContext = createContext("Kingsley");

function reducer(state, action) {
  if (action.type === "addToCart") {
    return [...state, action.payload];
  } else if ((action.type === "removeFromCart", action.payload)) {
    const copiedState = [...state];
    const targetIndex = copiedState.findIndex(
      (product) => product.id === action.payload.id
    );
    copiedState.splice(targetIndex, 1);
    return copiedState;
  } else if (action.type === "clearCart") {
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
