import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { connect } from 'react-redux'
import { Button } from '@material-ui/core'
import {addTodo} from '../lib/redux/slices/todo';
import styles from '../styles/Home.module.css'
import React from 'react'
import NavBar from '../Layouts/navBarLayout'


const Home = (props:any) => {
  const {todos,dispatch} = props;
  console.log(process.env.GREETING)
  const onAddTodo = () => {
    dispatch(addTodo({id:todos.length,title:'Hello'}))
  }

  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
        <div>
          <Button color="primary" onClick={onAddTodo}>Add todo</Button>
        </div>
      {todos.map((todo:any)=><p key={todo.id}>{todo.title}</p>)}
      </main>


    </div>
  )
}

const mapStateToProps = (state: any) =>{
  return {
    todos: state.todo
  }
}
// Home.getLayout = (page:{page:React.ReactNode})=>{
//   return <NavBar>
//     {page}
//   </NavBar>
// }
export default connect(mapStateToProps)(Home)
