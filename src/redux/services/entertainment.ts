import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "../../config/config.json"

const mykey = process.env.REACT_APP_USER_API_KEY;

export const entertainmentApi = createApi({
  reducerPath: "entertainmentApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      config.SERVER_URL,
  }),
  endpoints: (builder) => ({
    getAllMovies: builder.query({
      query: (id:void) => ({
        url: `/discover/movie?api_key=${mykey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=10`,
        method: "GET",
      }),
    }),
  }),
});
export const { useGetAllMoviesQuery } = entertainmentApi;