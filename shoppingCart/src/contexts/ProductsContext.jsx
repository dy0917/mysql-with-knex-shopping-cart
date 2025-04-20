import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
export const ProductsContext = createContext("Kingsley");

function reducer(state, action) {
  if (action.type === "setProducts") {
    return {
      ...state,
      isLoading: false,
      products: action.payload,
    };
  } else if (action.type === "error") {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }
  return state;
}

export const ProductsProvider = (props) => {
  const [productsState, dispatch] = useReducer(reducer, {
    isLoading: true,
    products: [],
    error: "",
  });

  const getProductById = (id) => {
    console.log()
    return productsState.products.find((p) => p.id == id);
  };

  useEffect(() => {
    const loadProducts = async () => {
      const products = await axios.get("http://localhost:3000/api/products");
      dispatch({ type: "setProducts", payload: products.data });
    };
    loadProducts();
  }, []);
  return (
    <ProductsContext.Provider value={{ productsState, getProductById }}>
      {props.children}
    </ProductsContext.Provider>
  );
};
