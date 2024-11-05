import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { getTokenFromLocalStorage } from "./getTokenFromLocalStorage";

const apiUrl = process.env.REACT_APP_API_URL;

const customBaseQuery = fetchBaseQuery({
  baseUrl: `${apiUrl}/api`,
  prepareHeaders: (headers) => {
    const token = getTokenFromLocalStorage();
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (loginData) => ({
        url: "/auth/login",
        method: "POST",
        body: loginData,
      }),
    }),
  }),
});

export const { useLoginUserMutation } = apiSlice;
