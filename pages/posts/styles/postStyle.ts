import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

export const postStyle = makeStyles((theme: Theme) =>
	createStyles({
		// reminderdialogstyles
		boxheight: {
			minHeight: '150px !important',
			// minWidth: '900px !important',
			width: '100%',
			alignItems: 'start !important',
			padding: '20px 10px !important',
			textTransform: 'none',

			[theme.breakpoints.only('xs')]: {
				minHeight: '200 !important',
				overflow: 'scroll',
			},
		},
	})
);
