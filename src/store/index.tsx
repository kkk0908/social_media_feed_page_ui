import { configureStore, PayloadAction } from "@reduxjs/toolkit";
import thunk, { ThunkAction } from "redux-thunk";
import postReducer from "./postReducer";
import userReducer from "./userReducer";

const rootReducer = {
  user: userReducer,
  post: postReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  typeof store.getState,
  unknown,
  PayloadAction<any>
>;

export default store;
