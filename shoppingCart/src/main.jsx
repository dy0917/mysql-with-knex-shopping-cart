import { createRoot } from "react-dom/client";
import { ProductsProvider } from "./contexts/ProductsContext.jsx";
import App from "./App.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import { PaymentsProvider } from "./contexts/PaymentsContext.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <CartProvider>
      <ProductsProvider>
        <PaymentsProvider>
          <App />
        </PaymentsProvider>
      </ProductsProvider>
    </CartProvider>
  </AuthProvider>
);
