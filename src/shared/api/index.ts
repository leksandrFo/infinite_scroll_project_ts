import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPost } from './lib/interfaces/IPost.ts';

const DEFAULT_LIMIT = 10;

export const postsApi = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (builder) => ({
    fetchAllPosts: builder.query({
      query: (page: number) => ({
                url: '/posts',
                params: {
                  _start: page*DEFAULT_LIMIT,
                  _limit: DEFAULT_LIMIT,
                },
              }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    fetchPostById: builder.query<IPost, number>({
      query: (id: number) => ({
        url: `/posts/${id}`,
      }),
    }),
  }),
});

export const { useFetchAllPostsQuery, useFetchPostByIdQuery } = postsApi;
