import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "../../config/config.json";

const mykey = process.env.REACT_APP_USER_API_KEY;

export const entertainmentApi = createApi({
  reducerPath: "entertainmentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: config.SERVER_URL,
  }),
  endpoints: (builder) => ({
    getAllMovies: builder.query({
      query: (obj) => ({
        url: `/discover/movie?api_key=${mykey}&language=${obj.language}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${obj.myPage}&with_genres=${obj.genreStr}`,
        method: "GET",
      }),
    }),
    getAllTvSeries: builder.query({
      query: (obj) => ({
        url: `discover/tv?api_key=${mykey}&language=${obj.language}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${obj.myPage}&with_genres=${obj.myStr}`,
        method: "GET",
      }),
    }),
    getAllGenre: builder.query({
      query: (id: void) => ({
        url: `/genre/movie/list?api_key=${mykey}&language=en-US`,
        method: "GET",
      }),
    }),
    getAllTrending: builder.query({
      query: (obj) => ({
        url: `trending/all/${obj.trending}?api_key=${mykey}&page=${obj.myPage}`,
        method: "GET",
      }),
    }),
    getSearchResult: builder.query({
      query: (obj) => ({
        url: `/search/${
          obj.type ? "tv" : "movie"
        }?api_key=${mykey}&language=${obj.language}&query=${obj.searchText}&page=${
          obj.myPage
        }&include_adult=false`,
      }),
    }),
    getCarousels: builder.query({
      query: (obj) => ({
        url: `${obj.mediaType}/${obj.id}/credits?api_key=${mykey}&language=en-US`,
        method: "GET",
      }),
    }),
  }),
});
export const {
  useGetSearchResultQuery,
  useGetAllMoviesQuery,
  useGetAllTvSeriesQuery,
  useGetAllGenreQuery,
  useGetAllTrendingQuery,
  useGetCarouselsQuery,
} = entertainmentApi;