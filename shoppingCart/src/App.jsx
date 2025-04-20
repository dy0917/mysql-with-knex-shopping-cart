import { useContext } from "react";
import { Button, Container } from "@mui/material";
import { ProductsContext } from "./contexts/ProductsContext";
import AppRouter from "./router.jsx";
export default function App() {
  const { productsState } = useContext(ProductsContext);
  return (
    <>
      {productsState.isLoading ? (
        <Container>
          <Button loading variant="outlined"></Button>
        </Container>
      ) : (
        <AppRouter></AppRouter>
      )}
    </>
  );
}
