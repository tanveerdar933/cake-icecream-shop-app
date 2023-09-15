import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CakeState {
  numbOfCake: number
}

const initialState: CakeState = {
  numbOfCake: 10
}

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state, action: PayloadAction) => {

    }
  }
})

export const { ordered } = cakeSlice.actions;