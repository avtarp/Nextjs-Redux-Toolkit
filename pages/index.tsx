import { useState } from 'react';
import type { NextPage } from 'next';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import uniqid from 'uniqid';
import { addTodo, Todo } from '../lib/redux/slices/todo';
import { RootState, useAppDispatch } from '../lib/redux/store';
import styles from '../styles/Home.module.css';

const Home: NextPage = (props: any) => {
  const [title, setTitle] = useState('');
  const dispatch = useAppDispatch();
  const todos = useSelector((state: RootState) => state.todo);

  const onAddTodo = () => {
    if (title) {
      dispatch(addTodo({ id: uniqid('id-'), title }));
      setTitle('');
    }
  };

  return (
    <section className={styles.main}>
      <h2 className={styles.title}>
        Welcome to <a href='https://nextjs.org'>Next.js!</a>
      </h2>

      <div style={{ marginTop: '20px' }}>
        <TextField
          name='title'
          size='small'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button
          color='primary'
          variant='contained'
          onClick={onAddTodo}
          style={{ marginLeft: '5px' }}
        >
          Add todo
        </Button>
      </div>
      <div style={{ marginTop: '20px' }}>
        {todos.map((todo: Todo) => {
          return <p key={todo.id}>{todo.title}</p>;
        })}
      </div>
    </section>
  );
};

Home.getInitialProps = async (ctx: any) => {
  return {
    props: {
      header: false,
    },
  };
};

export default Home;
