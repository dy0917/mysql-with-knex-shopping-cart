import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ProductsProvider } from "./contexts/ProductsContext.jsx";

createRoot(document.getElementById("root")).render(
  <ProductsProvider>
    <App />
  </ProductsProvider>
);
