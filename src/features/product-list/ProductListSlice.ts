/* eslint-disable prettier/prettier */


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchAllPrroducts, fetchAllFilterPrroducts ,fetchProductDetails } from "./ProductListApi"

export interface ProductState {
  products: any[] // Change the type to match your product data structure
  status: "idle" | "loading" | "failed"
}

const initialState: ProductState = {
  products: [],
  status: "idle",
}

export const fetchAllProductsAsync = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    const response = await fetchAllPrroducts()
    return response.data
  },
)

export const fetchFilteredProductsAsync = createAsyncThunk(
  "product/fetchFilteredProducts",
  async (filter) => {
    const response = await fetchAllFilterPrroducts(filter) // Replace with your filter logic
    return response.data
  },
)

export const fetchProductDetailsAsync = createAsyncThunk(
  "product/fetchProductDetails",
  async (id) => {
    const response= await fetchProductDetails(id);
    return response.data;  // Return only the data property
  },
)





// 

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = "idle"
        state.products = action.payload
      })
      .addCase(fetchAllProductsAsync.rejected, (state) => {
        state.status = "failed"
      })
      .addCase(fetchFilteredProductsAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchFilteredProductsAsync.fulfilled, (state, action) => {
        state.status = "idle"
        state.products = action.payload
      })
      .addCase(fetchFilteredProductsAsync.rejected, (state) => {
        state.status = "failed"
      })
      // product details page
      .addCase(fetchProductDetailsAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchProductDetailsAsync.fulfilled, (state, action) => {
        state.status = "idle"
        state.selectedProduct = action.payload
      })
      .addCase(fetchProductDetailsAsync.rejected, (state, action) => {
        state.status = 'failed';
        // state.error = action.error.message; // Access the error message here
      })
      
  },
})

export const selectAllProducts = (state) => state.product.products
export const selectedProductById= (state)=>state.product.selectedProduct

export default productSlice.reducer





















