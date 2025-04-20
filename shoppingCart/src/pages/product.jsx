import { useContext, useState } from "react";
import { useParams } from "react-router";

import {
  Grid,
  Container,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { ProductsContext } from "../contexts/ProductsContext";
function Product(props) {
  let params = useParams();
  const { productsState, getProductById } = useContext(ProductsContext);
  const product = getProductById(params.productId);
  return (
    <>
      <Container>
        <Grid container sx={{ mt: 2 }} spacing={2}>
          <Card variant="outlined">
            <CardContent>
              <Typography
                gutterBottom
                sx={{ color: "text.primary", fontSize: 14 }}
              >
                {product.title}
              </Typography>

              <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                {product.description}
              </Typography>
              <Typography variant="body2">
                <img
                  src={product.imageUrl}
                  style={{ width: "50%", height: "50%" }}
                ></img>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Add to Cart</Button>
            </CardActions>
          </Card>
        </Grid>
      </Container>
    </>
  );
}

export default Product;
