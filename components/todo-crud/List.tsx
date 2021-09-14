import { Container, Grid, Button } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { deleteTodo, Todo } from '../../lib/redux/slices/todo';
import { RootState, useAppDispatch } from '../../lib/redux/store';

const TodoList = (props: any) => {
	const dispatch = useAppDispatch();
	const todos = useSelector((state: RootState) => state.todo);

	return (
		<Container maxWidth="sm">
			<Grid container spacing={2} alignItems="center">
				{todos.map((todo: Todo) => {
					return (
						<React.Fragment key={todo.id}>
							<Grid item xs={8}>
								<p>{todo.title}</p>
							</Grid>
							<Grid item xs={4}>
								<Button onClick={() => dispatch(deleteTodo(todo.id))}>
									Delete
								</Button>
							</Grid>
						</React.Fragment>
					);
				})}
			</Grid>
		</Container>
	);
};

export default TodoList;
