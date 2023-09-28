import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "../features/orderSlice";
import cakeReducer from "../features/cakeSlice";
import icecreamReducer from "../features/icecreamSlice";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

export const myStore = configureStore({
  reducer: {
    order: orderReducer,
    cake: cakeReducer,
    icecream: icecreamReducer
  }
})

export const useAppDispatch: () => typeof myStore.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof myStore.getState>> = useSelector;