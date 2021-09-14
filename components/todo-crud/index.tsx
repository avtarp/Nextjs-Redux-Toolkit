import { Button, Container, Link, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { addTodo } from '../../lib/redux/slices/todo';
import { RootState, useAppDispatch } from '../../lib/redux/store';
import styles from '../../styles/Home.module.css';
import List from './List';

const Todo = (props: any) => {
	const [title, setTitle] = useState('');
	const dispatch = useAppDispatch();
	const todos = useSelector((state: RootState) => state.todo);

	const onAddTodo = () => {
		if (title) {
			dispatch(addTodo({ id: 1, title }));
			setTitle('');
		}
	};

	return (
		<Container maxWidth="md" className={styles.main}>
			<h2 className={styles.title}>
				Welcome to{' '}
				<Link href="https://nextjs.org">
					<a target="_blank">Next.js!</a>
				</Link>
			</h2>

			<div className={styles.inputBox}>
				<TextField
					name="title"
					size="small"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<Button
					color="primary"
					variant="contained"
					onClick={onAddTodo}
					className={styles.button}
				>
					Add todo
				</Button>
			</div>

			<List />
		</Container>
	);
};

export default Todo;
