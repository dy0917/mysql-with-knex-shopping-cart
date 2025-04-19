import { useContext, useState } from "react";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import ProductCard from "./components/ProductCard";
import { Grid, Container } from "@mui/material";
import { ProductsContext } from "./contexts/ProductsContext";
function App() {
  const { productsState } = useContext(ProductsContext);
  console.log(productsState);
  return (
    <>
      <ResponsiveAppBar />
      <Container>
        <Grid container sx={{ mt: 2 }} spacing={2}>
          {productsState.products.map((p) => {
            return (
              <Grid key={p.id}>
                <ProductCard product={p} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

export default App;
