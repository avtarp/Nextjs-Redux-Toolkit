import { Box } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import { useGetPostsQuery } from '../../lib/redux/api/postApi';

const PostList = ({ children }: { children: React.ReactNode }) => {
	const { data: postArr, isLoading } = useGetPostsQuery();

	if (isLoading) {
		return 'loading...';
	}
	console.log('postArr', postArr);

	return (
		<>
			<Box style={{ display: 'flex', flexDirection: 'row' }}>
				<Box style={{ margin: 'auto', width: '70%' }}>
					<div>
						<h1>All Posts</h1>
						<ul style={{ listStyleType: 'none' }}>
							{postArr &&
								postArr.length > 0 &&
								postArr.map((post: any, index: number) => (
									<li key={post.id} style={{ marginBottom: '10px' }}>
										{index + 1}.{' '}
										{/* eslint-disable-next-line @next/next/link-passhref */}
										<Link
											href={{
												pathname: '/posts/[postId]',
												query: { postId: post.id },
											}}
										>
											{post.title}
										</Link>
									</li>
								))}
						</ul>
					</div>
				</Box>
			</Box>
		</>
	);
};

export default PostList;
