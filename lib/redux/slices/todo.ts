import { createSlice } from '@reduxjs/toolkit';

type Todo = { id: number; title: string };

const initialState: Todo[] = [
	{ id: 1, title: 'todo1' },
	{ id: 2, title: 'todo2' },
];

const todoSlice = createSlice({
	name: 'todo',
	initialState: initialState,
	reducers: {
		addTodo: (state, action) => {
			state.push(action.payload);
		},
	},
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
