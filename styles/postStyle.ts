import { createStyles, makeStyles } from '@material-ui/core';

const postStyle = makeStyles((theme: any) =>
	createStyles({
		// reminderdialogstyles
		boxheight: {
			minHeight: '150px !important',
			// minWidth: '900px !important',
			width: '100%',
			alignItems: 'start !important',
			padding: '20px 10px !important',
			textTransform: 'none',

			[theme.breakpoints.up('xs')]: {
				minHeight: '200 !important',
				overflow: 'scroll',
			},
		},
		text: {
			color: 'green',
			border: '1px solid red',
		},
	})
);

export default postStyle;
