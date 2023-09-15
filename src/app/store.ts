import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

export const myStore = configureStore({
  reducer: {
    user: userReducer
  }
})

export const useAppDispatch: () => typeof myStore.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof myStore.getState>> = useSelector;