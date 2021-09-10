import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: `${process.env.REACT_APP_SERVER_URL}/api/v1/`,
	}),
	reducerPath: 'authApi',
	tagTypes: ['User'],
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (data) => ({
				url: '/authentication/user_login',
				method: 'POST',
				body: data,
			}),
		}),
	}),
});
export const { useLoginMutation } = authApi;
