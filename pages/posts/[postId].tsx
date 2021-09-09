import Box from '@mui/material/Box';
import moment from 'moment';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useGetPostQuery } from '../../lib/redux/api/postApi';

const Post: React.VFC = () => {
	const {
		query: { postId },
	} = useRouter();

	const { data: postData, isLoading } = useGetPostQuery(Number(postId));

	console.log('postData', postData);

	const postImgUrl = postData && postData.post_image;

	// console.log('postImgUrl', postImgUrl);

	return (
		<Box>
			<Box component="h1" textAlign="center">
				Job PostId : {postId}
			</Box>
			<Box display="flex" justifyContent="center">
				<Box
					component="div"
					textAlign="center"
					border="2px solid lightGreen"
					width="40%"
					padding="10px"
					boxShadow="8px 8px 0 lightGreen;"
				>
					<Box fontSize="20px" marginBottom="10px">
						Job: {postData?.title}
					</Box>
					<Box fontSize="20px" marginBottom="10px">
						Contry: {postData?.country}
					</Box>
					<Box fontSize="20px" marginBottom="10px">
						Date: {moment(postData?.date).format('YYYY - MM - DD')}
					</Box>
					{postImgUrl && (
						<Image src={postImgUrl} alt="Post Image" width={200} height={200} />
					)}
				</Box>
			</Box>
		</Box>
	);
};

// Post.getLayout = (page: any) => (
// 	<TodoListLayout>
// 		<TaskDetails>{page}</TaskDetails>
// 	</TodoListLayout>
// );

export default Post;
