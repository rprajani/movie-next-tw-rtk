import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const listingApi = createApi({
  reducerPath: 'listingApi',
  baseQuery: fetchBaseQuery({ baseUrl: `https://api.themoviedb.org/3/` }),
  endpoints: (builder) => ({
    getMoviesByType: builder.query({
      query: (type) => `movie/${type}?api_key=fae0b15c51b739e386fec8f3160a1684`,
    }),
  }),
})

export const { useGetMoviesByTypeQuery } = listingApi