import { useContext, useState } from "react";
import { useParams } from "react-router";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { ProductsContext } from "../contexts/ProductsContext";

import { DataGrid, GRID_STRING_COL_DEF } from "@mui/x-data-grid";
import { CartContext } from "../contexts/CartContext";
import { Button, Container } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const rows = [
  { id: 1, name: "Data Grid", description: "the Community version" },
  { id: 2, name: "Data Grid Pro", description: "the Pro version" },
  { id: 3, name: "Data Grid Premium", description: "the Premium version" },
];

const ActionCell = (props) => {
  const { cartDispatch } = useContext(CartContext);
  return (
    <>
      <Button onClick={() => cartDispatch({ type: "removeFromCart" })}>
        <RemoveIcon />
      </Button>
      {props.row.total}
      <Button onClick={() => cartDispatch({ type: "removeFromCart" })}>
        <AddIcon />
      </Button>
    </>
  );
};

const actionCellColumnType = {
  ...GRID_STRING_COL_DEF,
  type: "custom",
  resizable: false,
  filterable: false,
  sortable: false,
  editable: false,
  groupable: false,
  display: "flex",
  renderCell: (params) => <ActionCell {...params} />,
};

const columns = [
  { field: "title", headerName: "title", width: 200 },
  { field: "description", headerName: "Description", width: 300 },
  {
    field: "action",
    ...actionCellColumnType,
    headerName: "Action",
    renderCell: (params) => <ActionCell {...params} />,
    width: 150,
    valueGetter: (value, row) => row.monthlyDownloads,
  },
];

export default function Cart() {
  const { cart, groupedItem } = useContext(CartContext);
  const { getProductById } = useContext(ProductsContext);
  const groupedObject = groupedItem();

  const customArray = Object.keys(groupedObject)
    .map((key) => ({
      id: key,
      total: groupedObject[key].length,
    }))
    .map((item) => {
      return { ...item, ...getProductById(item.id) };
    });
  return (
    <Container>
      <DataGrid
        rows={customArray}
        columns={columns}
        hideFooterPagination
        hideFooterSelectedRowCount
      />
    </Container>
  );
}
