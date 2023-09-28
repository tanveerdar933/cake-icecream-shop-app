import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IceCreamState {
  numbOfIcecream: number
}

const initialState: IceCreamState = {
  numbOfIcecream: 30
}

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state, action: PayloadAction<{ quantity: number }>) => {
      state.numbOfIcecream = state.numbOfIcecream - action.payload.quantity
    }
  }
})

export default icecreamSlice.reducer;
export const { ordered } = icecreamSlice.actions;