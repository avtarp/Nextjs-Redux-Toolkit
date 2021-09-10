import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const postApi = createApi({
	reducerPath: 'postApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL}`,
		// prepareHeaders: (headers, { getState }) => {
		// 	if (localStorage.getItem('token')) {
		// 		headers.set('authorization', `Bearer ${localStorage.getItem('token')}`);
		// 	}

		// 	return headers;
		// },
	}),
	tagTypes: ['Program'],
	endpoints: (builder) => ({
		getPosts: builder.query({
			query: (_: void) => ({
				url: `/post`,
				method: 'GET',
			}),
		}),

		getPost: builder.query({
			query: (id: number) => ({
				url: `/post/${id}`,
				method: 'GET',
			}),
		}),

		// next query here
	}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPostsQuery, useGetPostQuery } = postApi;
