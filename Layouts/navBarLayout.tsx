import Box from '@material-ui/core/Box';
import Link from 'next/link';
import React from 'react';
export default function NavBar({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	// const userSignIn = () => {
	// 	signIn();
	// };
	// const userSignOut = () => {
	// 	signOut({
	// 		callbackUrl: `/`,
	// 	});
	// };
	return (
		<>
			{' '}
			<Box>
				<Box
					style={{
						background: 'teal',
						height: '60px',
						color: 'white',
						padding: '20px',
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					<Box>
						<Link href="/todo_list">
							<a style={{ fontWeight: 'bold', marginRight: '10px' }}>TODO</a>
						</Link>
						<Link href="/">
							<a style={{ fontWeight: 'bold' }}>HOME</a>
						</Link>
						<Link href="/posts">
							<a style={{ fontWeight: 'bold', marginLeft: '10px' }}>POSTS</a>
						</Link>
						<Link href="/careers">
							<a style={{ fontWeight: 'bold', marginLeft: '10px' }}>careers</a>
						</Link>
					</Box>
					{/* <Box>
						{!tokenValue && (
							<Button
								onClick={userSignIn}
								style={{
									fontWeight: 'bold',
									marginLeft: '15px',
									color: 'white',
								}}
							>
								Sign In{' '}
							</Button>
						)}
						{tokenValue && (
							<Button
								onClick={userSignOut}
								style={{
									fontWeight: 'bold',
									marginLeft: '15px',
									color: 'white',
								}}
							>
								Sign out{' '}
							</Button>
						)}
					</Box> */}
				</Box>
			</Box>
			{children}
		</>
	);
}
