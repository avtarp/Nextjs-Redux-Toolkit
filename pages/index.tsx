import Button from '@mui/material/Button';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { useSelector } from 'react-redux';
import { addTodo } from '../lib/redux/slices/todo';
import { RootState, useAppDispatch } from '../lib/redux/store';
import styles from '../styles/Home.module.css';
import {signIn,signOut,useSession} from 'next-auth/client'

const Home: NextPage = () => {
	const [session,loading] =useSession()
	const todos = useSelector((state: RootState) => state.todo);
	const dispatch = useAppDispatch();
	const onAddTodo = () => {
		dispatch(addTodo({ id: todos.length, title: 'Hello' }));
	};
	const userSignIn = ()=>{
		signIn()
	}
	const userSignOut = ()=>{
		signOut(
      {
        callbackUrl: `/todo_list`
      }
    )
	}

	return (
		<div>
			<Head>
				<title>Next.js Features</title>
				<meta name="description" content="Next app for server side rendering" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
             
			<main className={styles.main}>
				{!session && (
					<>
					<h3>Not signed in</h3>
					<button onClick ={userSignIn} >Sign In </button>
                     </>
				)

				}
				{session && (
					<>
					<h3>You signed in as {session?.user?.email}</h3>
					<button onClick ={userSignOut} >Sign out </button>
                     </>
				)

				}
				<h1 className={styles.title}>
					Welcome Team to <a href="https://nextjs.org">Next.js!</a>
				</h1>
				</main>
				</div>
	)
			}

// getInitialProps and getServerSideProps are run time
// getStaticProps and getStaticPaths are build time
Home.getInitialProps = async (ctx: any) => {
  return {
    props: {
      header: false,
    },
  };
};

export default Home;
