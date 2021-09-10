import Box from '@mui/material/Box';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
// import TodoListLayout from "../../Layouts/taskListLayout";
import TodoListLayout from '../index';

const TaskDetails = ({ children }: { children: React.ReactNode }) => {
	const {
		pathname: currentPath,
		query: { taskId },
		push,
	} = useRouter();

	const [selectedTime, setSelectedTime] = useState('');

	const handleChange = (e: any) => {
		if (e.target.checked) {
			setSelectedTime(e.target.value);
		}
	};
	const handleSubmit = (val: any) => {
		val.preventDefault();
		console.log(currentPath);
		push(`${taskId}/${selectedTime}`);
	};

	return (
		<Box style={{ display: 'flex' }}>
			<Box style={{ border: '2px solid', height: '90vh', padding: '0px 20px' }}>
				<h1>
					I am task no. <span style={{ color: 'green' }}>{taskId}</span>
				</h1>
				<h3>Please select time you want to finish this task</h3> {' '}
				<ul>
					<li>
						<Link href={`/todo_list/${taskId}/Morning`}>
							<a>Morning</a>
						</Link>
					</li>
					<li>
						<Link href={`/todo_list/${taskId}/Afternoon`}>
							<a>Afternoon</a>
						</Link>
					</li>
					<li>
						<Link href={`/todo_list/${taskId}/Evening`}>
							<a> Evening</a>
						</Link>
					</li>
				</ul>
			</Box>

			<Box>{children}</Box>
		</Box>
	);
};

TaskDetails.getLayout = (page: { page: React.ReactNode }) => (
	<TodoListLayout>{page}</TodoListLayout>
);
export default TaskDetails;
