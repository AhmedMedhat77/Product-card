import { getProductsThunk } from "../thunk/ProductThunk";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  cart: {
    count: 0,
    data: [],
  },
  data: [],
  selectedProduct: null,
  filter: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCount: (oldState, action) => {
      return { ...oldState, cart: { ...oldState.cart, count: action.payload } };
    },
    addProductToCart: (state, action) => {
      const productCart = state.cart.data.find(
        (p) => p.id === action.payload.id
      );
      if (productCart) {
        state.cart.data = state.cart.data
          .map((p) => {
            if (p.id === action.payload.id) {
              return action.payload;
            }
            return p;
          })
          .filter((p) => p.count > 0);
      } else {
        if (action.payload.count > 0) {
          state.cart.data.push(action.payload);
        }
      }
      state.cart.count = state.cart.data.reduce((p, c) => {
        return p + (c.count ?? 0);
      }, 0);
    },
    setSelectedProduct: (oldState, action) => {
      oldState.selectedProduct = action.payload;
    },
    deleteProduct: (state, action) => {
      return { ...state, cart: { count: 0, data: [] } };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductsThunk.fulfilled, (state, action) => {
      state.data = action.payload;
      state.selectedProduct = action.payload[0];
    });
  },
});

export default productSlice.reducer;
export const productActions = productSlice.actions;
