import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
// import { RootState, AppThunk } from "../../app/store"
import { fetchCount } from "./CartApi"

export interface CounterState {
  value: number
  status: "idle" | "loading" | "failed"
}

const initialState: CounterState = {
  value: 0,
  status: "idle",
}

export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount: number) => {
    const response = await fetchCount(amount)

    return response.data
  },
)

export const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle"
        state.value += action.payload
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.status = "failed"
      })
  },
})

export const { increment } = counterSlice.actions

export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer
