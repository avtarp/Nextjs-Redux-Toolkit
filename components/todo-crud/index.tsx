import { useState } from 'react';

import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import uniqid from 'uniqid';
import List from './List';
import { addTodo, Todo as TodoType } from '../../lib/redux/slices/todo';
import { RootState, useAppDispatch } from '../../lib/redux/store';
import styles from '../../styles/Home.module.css';

const Todo = (props: any) => {
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

      <div style={{ margin: ' 20px 5px' }} className={styles.grid}>
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
      <div>
        <List />
      </div>
    </section>
  );
};

export default Todo;
