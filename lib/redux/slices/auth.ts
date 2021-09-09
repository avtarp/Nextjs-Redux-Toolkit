import { createSlice } from '@reduxjs/toolkit';
import { authApi } from '../api/authApi';
import { RootState } from '../store';
import { AuthState } from '../types';

const initialState: any = {
	isAuth: localStorage.getItem('next-token') ? true : false,
	user: {
		email: '',
		email_verified: false,
		first_name: '',
		id: 0,
		last_name: '',
		page_index: 0,
		status: -1,
		user_type: 0,
		uuid: '',
		secondary_email_status: '',
		employee_sign_up_status: '',
		employee_id: '',
		is_admin: '',
		role: '',
	},
	userStatus: -1,
	pageIndex: 0,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		clearAuth: () => initialState,
	},
	extraReducers: (builder) => {
		// loginAccount
		builder.addMatcher(
			authApi.endpoints.login.matchFulfilled,
			(state, { payload }) => {
				if (payload.success) {
					state.isAuth = true;
					state.user = payload.user;
				}
			}
		);
	},
});

export const { clearAuth } = authSlice.actions;

export const selectAuth = (state: RootState): AuthState => state.auth;

// export const selectIsAuth = (state: RootState): false =>
//   state.auth.loginData.isAuth;
export default authSlice.reducer;
