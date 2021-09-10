import { combineReducers } from 'redux';
import { postApi } from './api/postApi';
import todo from './slices/todo';

export default combineReducers({
	todo,
	[postApi.reducerPath]: postApi.reducer,
});
