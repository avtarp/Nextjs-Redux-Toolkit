import Box from '@mui/material/Box';
import Link from 'next/link';
import React from 'react';

export default function NavBar({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<>
			<Box
				style={{
					background: 'teal',
					height: '60px',
					color: 'white',
					padding: '20px',
				}}
			>
				<Link href="/todo_list">
					<a style={{ fontWeight: 'bold', marginRight: '10px' }}>TODO</a>
				</Link>
				<Link href="/">
					<a style={{ fontWeight: 'bold' }}>HOME</a>
				</Link>
				<Link href="/posts">
					<a style={{ fontWeight: 'bold', marginLeft: '10px' }}>POSTS</a>
				</Link>
			</Box>

			{children}
		</>
	);
}
