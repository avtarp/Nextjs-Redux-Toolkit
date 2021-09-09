import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const postApi = createApi({
	reducerPath: 'postApi',
	baseQuery: fetchBaseQuery({ baseUrl: '/' }),
	endpoints: (builder) => ({
		getPosts: builder.query({
			query: () => `pokemon`,
		}),
		createPost: builder.mutation({
			query: ({ name }) => ({
				url: `pokemon/${name}`,
				method: 'POST',
				body: {

        }
			}),
		}),
	}),
});

export const { } =
	postApi;
