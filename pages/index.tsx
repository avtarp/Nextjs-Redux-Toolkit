import Button from '@mui/material/Button';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { useSelector } from 'react-redux';
import { addTodo } from '../lib/redux/slices/todo';
import { RootState, useAppDispatch } from '../lib/redux/store';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	const todos = useSelector((state: RootState) => state.todo);
	const dispatch = useAppDispatch();
	const onAddTodo = () => {
		dispatch(addTodo({ id: todos.length, title: 'Hello' }));
	};

	return (
		<div>
			<Head>
				<title>Next.js Features</title>
				<meta name="description" content="Next app for server side rendering" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome Team to <a href="https://nextjs.org">Next.js!</a>
				</h1>

				<div>
					<Button color="primary" onClick={onAddTodo}>
						Add todo
					</Button>
				</div>
				{todos.map((todo: any) => (
					<p key={todo.id}>{todo.title}</p>
				))}
			</main>
		</div>
	);
};

// Home.getLayout = (page:{page:React.ReactNode})=>{
//   return <NavBar>
//     {page}
//   </NavBar>
// }
export default Home;
