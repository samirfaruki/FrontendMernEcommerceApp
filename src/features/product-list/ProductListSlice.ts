// // import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
// // // import { RootState, AppThunk } from "../../app/store"
// // import { fetchAllPrroducts } from "./ProductListApi"

// // export interface CounterState {
// //   value: number
// //   status: "idle" | "loading" | "failed"
// // }

// // const initialState: CounterState = {
// //   products: [],
// //   status: "idle",
// // }

// // export const fetchAllPrroductsAsync = createAsyncThunk(
// //   "product/fetchAllProducts",
// //   async () => {
// //     const response = await fetchAllPrroducts()

// //     return response.data
// //   },
// // )
// // export const fetchAllPrroductsFilterAsync = createAsyncThunk(
// //   "product/fetchAllProducts",
// //   async () => {
// //     const response = await fetchAllPrroducts()

// //     return response.data
// //   },
// // )

// // export const productSlice = createSlice({
// //   name: "product",
// //   initialState,

// //   reducers: {
// //     increment: (state) => {
// //       state.value += 1
// //     },
// //   },
// //   extraReducers: (builder) => {
// //     builder
// //       .addCase(fetchAllPrroductsAsync.pending, (state) => {
// //         state.status = "loading"
// //       })
// //       .addCase(fetchAllPrroductsAsync.fulfilled, (state, action) => {
// //         state.status = "idle"
// //         state.products = action.payload
// //       })
// //       .addCase(fetchAllPrroductsAsync.rejected, (state) => {
// //         state.status = "failed"
// //       })
// //       .addCase(fetchAllPrroductsFilterAsync.pending, (state) => {
// //         state.status = "loading"
// //       })
// //       .addCase(fetchAllPrroductsFilterAsync.fulfilled, (state, action) => {
// //         state.status = "idle"
// //         state.products = action.payload
// //       })
// //       .addCase(fetchAllPrroductsFilterAsync.rejected, (state) => {
// //         state.status = "failed"
// //       })
// //   },
// // })

// // export const { increment } = productSlice.actions

// // export const selectAllProducts = (state) => state.product.products;

// // export default productSlice.reducer

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import { fetchAllPrroducts } from "./ProductListApi"

// export interface ProductState {
//   products: any[]; // Change the type to match your product data structure
//   status: "idle" | "loading" | "failed";
// }

// const initialState: ProductState = {
//   products: [],
//   status: "idle",
// }

// export const fetchAllProductsAsync = createAsyncThunk(
//   "product/fetchAllProducts", // Unique action type string
//   async () => {
//     const response = await fetchAllPrroducts();
//     return response.data;
//   }
// );

// export const fetchFilteredProductsAsync = createAsyncThunk(
//   "product/fetchFilteredProducts", // Unique action type string
//   async () => {
//     const response = await fetchFilteredProducts(); // Replace with your filter logic
//     return response.data;
//   }
// );

// export const productSlice = createSlice({
//   name: "product",
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.products += 1;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchAllProductsAsync.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
//         state.status = "idle";
//         state.products = action.payload;
//       })
//       .addCase(fetchAllProductsAsync.rejected, (state) => {
//         state.status = "failed";
//       })
//       .addCase(fetchFilteredProductsAsync.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchFilteredProductsAsync.fulfilled, (state, action) => {
//         state.status = "idle";
//         state.products = action.payload;
//       })
//       .addCase(fetchFilteredProductsAsync.rejected, (state) => {
//         state.status = "failed";
//       });
//   },
// });

// export const { increment } = productSlice.actions;

// export const selectAllProducts = (state) => state.product.products;

// export default productSlice.reducer;

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { fetchAllProducts, fetchFilteredProducts } from "./ProductListApi";

// export interface ProductState {
//   products: any[]; // Change the type to match your product data structure
//   status: "idle" | "loading" | "failed";
// }

// const initialState: ProductState = {
//   products: [],
//   status: "idle",
// }

// export const fetchAllProductsAsync = createAsyncThunk(
//   "product/fetchAllProducts",
//   async () => {
//     const response = await fetchAllProducts();
//     return response.data;
//   }
// );

// export const fetchFilteredProductsAsync = createAsyncThunk(
//   "product/fetchFilteredProducts",
//   async () => {
//     const response = await fetchFilteredProducts(); // Replace with your filter logic
//     return response.data;
//   }
// );

// export const productSlice = createSlice({
//   name: "product",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchAllProductsAsync.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
//         state.status = "idle";
//         state.products = action.payload;
//       })
//       .addCase(fetchAllProductsAsync.rejected, (state) => {
//         state.status = "failed";
//       })
//       .addCase(fetchFilteredProductsAsync.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchFilteredProductsAsync.fulfilled, (state, action) => {
//         state.status = "idle";
//         state.products = action.payload;
//       })
//       .addCase(fetchFilteredProductsAsync.rejected, (state) => {
//         state.status = "failed";
//       });
//   },
// });

// export const selectAllProducts = (state) => state.product.products;

// export default productSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchAllPrroducts, fetchAllFilterPrroducts } from "./ProductListApi"

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
  },
})

export const selectAllProducts = (state) => state.product.products

export default productSlice.reducer
