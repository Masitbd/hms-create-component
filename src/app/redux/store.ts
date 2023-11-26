import { reducer } from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { features } from "process";
import productReducer from "./features/addItem/addItemSlice";

/* export const store = configureStore({
  reducer,
}); */
export const store = configureStore({
  reducer: productReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
