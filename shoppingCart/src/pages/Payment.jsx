import { useContext } from "react";
import * as React from "react";
import { Navigate } from "react-router";
import { DataGrid } from "@mui/x-data-grid";
import { useParams } from "react-router";

import { PaymentsContext } from "../contexts/PaymentsContext";
import { ProductsContext } from "../contexts/ProductsContext";
import { Button, Container, Grid } from "@mui/material";

const columns = [
  { field: "title", headerName: "Title", width: 200 },
  { field: "description", headerName: "Description", width: 300 },
];

export default function Payment() {
  const { getPaymentById } = useContext(PaymentsContext);
  const { getProductById } = useContext(ProductsContext);
  const { id } = useParams();

  const payment = getPaymentById(id);
  const products = payment.paymentItems.map((p) => getProductById(p.productId));

  if (!payment) {
    return <Navigate to={"/orders"} replace />;
  }

  return (
    <Container>
      <DataGrid
        rows={products}
        columns={columns}
        hideFooterPagination
        hideFooterSelectedRowCount
      />
    </Container>
  );
}
