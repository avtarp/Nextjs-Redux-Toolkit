
export interface SuccessType {
	success: boolean;
	message: string;
}
// AuthSlice Types
export interface Credential {
	email: string;
	password: string;
}

export interface User {
	email: string;
	email_verified: boolean;
	first_name: string;
	id: number;
	last_name: string;
	page_index: number;
	status: number;
	user_type: number;
	uuid: string;
	secondary_email_status: string;
	employee_sign_up_status: any;
	employee_id?: any;
	is_admin?: any;
	role?: any;
}

export type AuthState = {
	isAuth: boolean;
	user: User;
	userStatus?: any;
	pageIndex?: any;
	employee_sign_up_status?: any;
};

export interface LoginRes {
	success: boolean;
	auth_token: string;
	user: User;
	message?: any;
	is_deleted?: any;
}

export interface RegisterFormValues {
	first_name: string;
	last_name: string;
	email: string;
	company_name: string;
}

export interface SetPasswordFormValues {
	token: string;
	email?: string;
	password: string;
	password_confirmation: string;
}
