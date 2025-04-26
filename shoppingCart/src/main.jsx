import { createRoot } from "react-dom/client";
import { ProductsProvider } from "./contexts/ProductsContext.jsx";
import App from "./App.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import { PaymentsProvider } from "./contexts/PaymentsContext.jsx";

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <ProductsProvider>
      <PaymentsProvider>
        <App />
      </PaymentsProvider>
    </ProductsProvider>
  </CartProvider>
);
