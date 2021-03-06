import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import uniqid from 'uniqid';

export type Todo = { id: number | string; title: string };

const initialState: Todo[] = [
  { id: uniqid('id-'), title: 'todo1' },
  { id: uniqid('id-'), title: 'todo2' },
];

const todoSlice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
