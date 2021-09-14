import { Box } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';

const TodoListLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Box style={{ display: 'flex', flexDirection: 'row' }}>
				<Box
					style={{
						border: '2px solid',
						width: '300px',
						fontSize: '20px',
						minHeight: '90vh',
					}}
				>
					<ul>
						<li>
							<Link href="/todo_list/1">Task 1</Link>
						</li>
						<li>
							<Link href="/todo_list/2">Task 2</Link>
						</li>
						<li>
							<Link href="/todo_list/3"> Task 3</Link>
						</li>
					</ul>
				</Box>
				<Box style={{ margin: 'auto', width: '70%' }}>{children}</Box>
			</Box>
		</>
	);
};

export default TodoListLayout;
