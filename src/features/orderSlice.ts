import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface Order {
  id: number
  customer: string
}

interface OrderStateType {
  loading: boolean
  orders: Order[]
  err?: string
}

const initialState: OrderStateType = {
  loading: false,
  orders: [],
  err: ""
}

export const fetchOrders = createAsyncThunk("order/fetch", async () => {
  const response = await fetch("https://reqres.in/api/users?page=1", {
    method: "GET"
  })
  const data = response.json();
  return data;
})

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<{ customer: string }>) => {
      state.loading = false;
      state.err = "";
      state.orders.push({
        id: state.orders.length,
        customer: action.payload.customer
      })
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.loading = false;
      state.orders = action.payload.data.map((item: any) => ({ id: item.id, customer: item.first_name }))
      state.err = ""
    })
    builder.addCase(fetchOrders.rejected, (state, action) => {
      state.loading = false;
      state.orders = [];
      state.err = action.error.message?.toString();
    })
  }
})

export default orderSlice.reducer;
export const { addOrder } = orderSlice.actions;