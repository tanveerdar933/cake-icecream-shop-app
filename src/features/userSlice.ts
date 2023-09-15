import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface User {
  id: number
  name: string
}

interface UserState {
  users: User[]
}

const initialState: UserState = {
  users: []
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<{ name: string }>) => {
      state.users.push({
        id: state.users.length,
        name: action.payload.name
      })
    }
  }
})

export default userSlice.reducer;
export const { addUser } = userSlice.actions;