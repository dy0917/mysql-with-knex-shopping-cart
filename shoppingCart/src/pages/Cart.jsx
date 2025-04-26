import { useContext, useState } from "react";
import * as React from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import { DataGrid, GRID_STRING_COL_DEF } from "@mui/x-data-grid";
import { CartContext } from "../contexts/CartContext";
import { Button, Container, Grid } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";

const rows = [
  { id: 1, name: "Data Grid", description: "the Community version" },
  { id: 2, name: "Data Grid Pro", description: "the Pro version" },
  { id: 3, name: "Data Grid Premium", description: "the Premium version" },
];

const ActionCell = (props) => {
  const { id } = props.row;
  const { cartDispatch, clearCart } = useContext(CartContext);
  const { getProductById } = useContext(ProductsContext);
  return (
    <>
      <Button
        onClick={() => {
          cartDispatch({ type: "removeFromCart", payload: getProductById(id) });
          clearCart();
        }}
      >
        <RemoveIcon />
      </Button>
      {props.row.total}
      <Button
        onClick={() =>
          cartDispatch({ type: "addToCart", payload: getProductById(id) })
        }
      >
        <AddIcon />
      </Button>
    </>
  );
};

const columns = [
  { field: "title", headerName: "title", width: 200 },
  { field: "description", headerName: "Description", width: 300 },
  {
    field: "action",
    headerName: "Action",
    renderCell: (params) => <ActionCell {...params} />,
    width: 300,
    valueGetter: (value, row) => row.monthlyDownloads,
  },
];

export default function Cart() {
  const { cart, groupedItem } = useContext(CartContext);
  const { getProductById } = useContext(ProductsContext);
  const [buttonLoading, setButtonLoading] = useState(false);
  const groupedObject = groupedItem();

  const total = cart.reduce((n, { price }) => n + parseFloat(price), 0);

  const customArray = Object.keys(groupedObject).map((key) => ({
    id: key,
    total: groupedObject[key].length,
    ...getProductById(key),
  }));

  const onCheckout = async () => {
    setButtonLoading(true);
    const paymnent = await axios.post("http://localhost:3000/api/payments", {
      userId: 1,
      products: cart,
    });
    setButtonLoading(false);
  };
  return (
    <Container>
      <DataGrid
        rows={customArray}
        columns={columns}
        hideFooterPagination
        hideFooterSelectedRowCount
      />
      <Grid container>
        <Grid size={2}>Total:{total}</Grid>
        <Grid size={2} offset={"auto"}>
          <Button loading={buttonLoading} onClick={onCheckout}>
            Checkout
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
