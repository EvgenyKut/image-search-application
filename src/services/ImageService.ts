import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { BASE_API_URL, CLIENT_ID } from '../constants/env';
import {
  IData,
  IImageData,
  IImageRawData,
  TypeImageFetch,
} from '../models/IImage';
import { imagesNormalizer } from './helper';

export const imageAPI = createApi({
  reducerPath: 'imageAPI',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  endpoints: (build) => ({
    fetchAllImages: build.query<IData, TypeImageFetch>({
      query: ({ page, query }) => ({
        url: '/search/photos',
        params: {
          page: page,
          query: query,
          client_id: CLIENT_ID,
          per_page: 8,
        },
      }),
      transformResponse: (response: IImageData) => {
        const data = {
          total: response.total,
          total_pages: response.total_pages,
          images: imagesNormalizer(response.results),
        };
        return data;
      },
    }),
    fetchRandomPosts: build.query<IData, null>({
      query: () => ({
        url: `photos/random`,
        params: {
          count: 8,
          client_id: CLIENT_ID,
        },
      }),
      transformResponse: (response: IImageRawData[]) => {
        const data = {
          total: response.length,
          total_pages: 1,
          images: imagesNormalizer(response),
        };
        return data;
      },
    }),
  }),
});
