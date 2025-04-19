import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export default function ProductCard({ product }) {
  return (
    <Box sx={{ minWidth: 275, maxWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography gutterBottom sx={{ color: "text.primary", fontSize: 14 }}>
            {product.title}
          </Typography>

          <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
            {product.description}
          </Typography>
          <Typography variant="body2">
            <img
              src={product.imageUrl}
              style={{ width: "100%", height: "100%" }}
            ></img>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
