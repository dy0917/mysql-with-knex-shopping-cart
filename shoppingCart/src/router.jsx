import { BrowserRouter, Routes, Route } from "react-router";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import ProtectedRoute from "./components/ProtectedRoute";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Payments from "./pages/Payments";
import Payment from "./pages/Payment";
import Login from "./pages/Login";
import Cart from "./pages/cart";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/orders" element={<Payments />} />
          <Route path="/orders/:id" element={<Payment />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
