import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypes } from "./tagtypes";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    //baseUrl: "http://localhost:5000/api/v1",
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: () => ({}),
  tagTypes: tagTypes,
});
