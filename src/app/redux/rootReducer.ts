import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import productReducer from "./features/addItem/addItemSlice";

export const reducer = combineReducers({
  product: productReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

/* import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import productReducer from "./features/addItem/addItemSlice1";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  products: productReducer,
});
 */
