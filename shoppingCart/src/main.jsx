import { createRoot } from "react-dom/client";
import { ProductsProvider } from "./contexts/ProductsContext.jsx";
import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <ProductsProvider>
    <App />
  </ProductsProvider>
);
