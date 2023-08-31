import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
// import { RootState, AppThunk } from "../../app/store"
import { fetchAllPrroducts } from "./ProductListApi"

export interface CounterState {
  value: number
  status: "idle" | "loading" | "failed"
}

const initialState: CounterState = {
  products: [],
  status: "idle",
}

export const fetchAllPrroductsAsync = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    const response = await fetchAllPrroducts()

    return response.data
  },
)

export const productSlice = createSlice({
  name: "product",
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPrroductsAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchAllPrroductsAsync.fulfilled, (state, action) => {
        state.status = "idle"
        state.products = action.payload
      })
      .addCase(fetchAllPrroductsAsync.rejected, (state) => {
        state.status = "failed"
      })
  },
})

export const { increment } = productSlice.actions

export const selectAllProducts = (state) => state.product.products;


export default productSlice.reducer
