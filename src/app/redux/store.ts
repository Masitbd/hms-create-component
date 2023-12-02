import { reducer } from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { features } from "process";
import productReducer from "./features/addItem/addItemSlice1";
import { baseApi } from "./api/baseApi";

/* export const store = configureStore({
  reducer: productReducer,
}); */

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
