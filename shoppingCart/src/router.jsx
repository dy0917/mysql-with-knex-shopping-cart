import { BrowserRouter, Routes, Route } from "react-router";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Payments from "./pages/Payments";
import Payment from "./pages/Payment";
import Cart from "./pages/cart";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/orders" element={<Payments />} />
        <Route path="/orders/:id" element={<Payment />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
