import React from "react";
import { baseApi } from "./baseApi";
import { ENUM_TAG_TYPE } from "./tagtypes";

const POST_API = "/posts";

const postApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPost: build.query({
      query: () => ({
        url: POST_API,
        method: "GET",
        //params: arg,
      }),
      providesTags: [ENUM_TAG_TYPE.post],
    }),
  }),
});

export const { useGetPostQuery } = postApi;
