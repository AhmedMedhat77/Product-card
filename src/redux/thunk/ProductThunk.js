import { createAsyncThunk } from "@reduxjs/toolkit";
import Products from "../../db/ProductsData";

export const getProductsThunk = createAsyncThunk("getProducts", async () => {
  const response = await new Promise((res) => {
    setTimeout(() => {
      res({ data: Products });
    }, 1000);
  });
  return response.data;
});
