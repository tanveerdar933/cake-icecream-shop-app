import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CakeState {
  numbOfCake: number
}

const initialState: CakeState = {
  numbOfCake: 40
}

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state, action: PayloadAction<{ quantity: number }>) => {
      state.numbOfCake = state.numbOfCake - action.payload.quantity
    }
  }
})

export default cakeSlice.reducer;
export const { ordered } = cakeSlice.actions;