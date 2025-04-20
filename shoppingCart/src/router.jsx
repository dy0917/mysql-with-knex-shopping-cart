import { BrowserRouter, Routes, Route } from "react-router";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Products from "./pages/products";
import Product from "./pages/product";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/:productId" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
