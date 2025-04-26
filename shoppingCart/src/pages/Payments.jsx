import { useContext, useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router";
import * as React from "react";
import { ProductsContext } from "../contexts/ProductsContext";

import { DataGrid, GRID_STRING_COL_DEF } from "@mui/x-data-grid";
import { CartContext } from "../contexts/CartContext";
import { PaymentsContext } from "../contexts/PaymentsContext";
import { Button, Container, Grid } from "@mui/material";
import axios from "axios";

function ItemCell(props) {
  const {
    row: { paymentItems },
  } = props;
  return <>{paymentItems.length}</>;
}

const columns = [
  { field: "id", headerName: "Order #", width: 200 },
  {
    field: "total items",
    headerName: "Total items",
    renderCell: (params) => <ItemCell {...params} />,
    width: 150,
    valueGetter: (value, row) => row.monthlyDownloads,
  },
  { field: "totalAmount", headerName: "Total", width: 300 },
];

export default function Payments() {
  const navigate = useNavigate();
  const { paymentsState, paymentDispatch } = useContext(PaymentsContext);
  const handleEvent = (params) => {

    navigate(`/orders/${params.row.id}`);
  };
  useEffect(() => {
    const loadPayments = async () => {
      const payments = await axios.get("http://localhost:3000/api/payments/1");
      paymentDispatch({ type: "setPayments", payload: payments.data });
    };
    loadPayments();
  }, []);

  return (
    <Container>
      <DataGrid
        onRowClick={handleEvent}
        rows={paymentsState.payments}
        columns={columns}
        hideFooterPagination
        hideFooterSelectedRowCount
      />
    </Container>
  );
}
