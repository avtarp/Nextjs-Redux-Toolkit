import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import TaskDetails from '.';
import TodoListLayout from '../index';

const TaskSlot = () => {
	const {
		query: { taskId, timeId },
	} = useRouter();
	return (
		<Box
			style={{
				marginLeft: '30px',
				width: '500px',
				border: '2px solid',
				color: 'yellow',
				background: 'green',
				padding: '10px',
				fontSize: '23px',
			}}
		>
			For {taskId} , you have alotted{' '}
			<span style={{ color: 'white' }}>{timeId}</span> time.
		</Box>
	);
};

TaskSlot.getLayout = (page: any) => (
	<TodoListLayout>
		<TaskDetails>{page}</TaskDetails>
	</TodoListLayout>
);

export default TaskSlot;
