import { makeStyles, Theme } from '@material-ui/core/styles';

const facilityStyles = makeStyles((theme: Theme) => ({
	// FirstDiv Component CSS
	mainDiv: {
		backgroundColor: '#DBE9CF',
		padding: '8% 10%',
	},

	alignHeading: {
		fontSize: '35px',
		fontWeight: 600,
		paddingLeft: '14%',
		textAlign: 'left',
		paddingTop: '1%',
		fontFamily: "'Poppins',sans-serif",
		[theme.breakpoints.only('md')]: {
			paddingLeft: '16%',
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: '25px',
			padding: '2% 0% 5% 0%',
			textAlign: 'center',
		},
	},
	icons: {
		fontSize: '30px',
	},
	title: {
		fontWeight: 600,
		fontSize: '30px',
		[theme.breakpoints.only('xl')]: {
			fontSize: '40px',
		},
	},
	content: {
		fontSize: '17px',
		lineHeight: 2,
		fontFamily: "'Poppins',sans-serif",
		// wordSpacing: 1,
		[theme.breakpoints.down('md')]: {
			fontSize: '16px',
		},
		[theme.breakpoints.only('xl')]: {
			fontSize: '24px',
		},
	},
	content1: {
		fontSize: '17px',
		lineHeight: 1,
		padding: '2% 0%',
		fontFamily: "'Poppins',sans-serif",
		wordSpacing: 1,
		[theme.breakpoints.down('md')]: {
			fontSize: '16px',
		},
		[theme.breakpoints.only('xl')]: {
			fontSize: '24px',
		},
	},
	imgDisplay: {
		display: 'grid',
		placeItems: 'center',
		[theme.breakpoints.down('md')]: {
			padding: '5%',
		},
	},

	imgCenter: {
		display: 'grid',
		placeItems: 'center',
		[theme.breakpoints.down('md')]: {
			padding: '10% 0% 5% 0%',
		},
	},

	// SecondSection Component CSS

	ssContainer: {
		padding: '4% 5% 4% 10%',
	},
	mainHeading: {
		fontSize: '35px',
		fontWeight: 600,
		paddingLeft: '10%',
		textAlign: 'center',
		paddingTop: '1%',
		fontFamily: "'Poppins',sans-serif",
		[theme.breakpoints.down('sm')]: {
			fontSize: '25px',
			paddingLeft: '5%',
		},
	},

	subHeading: {
		fontSize: '30px',
		fontWeight: 600,
		fontFamily: "'Poppins',sans-serif",
		[theme.breakpoints.down('sm')]: {
			fontSize: '20px',
		},
	},
	SecondSecinnerDiv: {
		width: '80%',
		margin: 'auto',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},

	// TeamsSection Component CSS

	TeamsmainDiv: {
		backgroundColor: '#232E3E',
		color: '#fff',
		padding: '9% 10%',
		[theme.breakpoints.only('sm')]: {
			padding: '15% 10%',
		},
		[theme.breakpoints.only('xs')]: {
			padding: '21% 10%',
		},
	},
	teamsBox: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
		width: '35%',
		height: '100%',
		margin: ' auto 30px auto auto',
		[theme.breakpoints.only('xl')]: {
			width: '20%',
		},
		[theme.breakpoints.only('md')]: {
			width: '50%',
			height: '80%',
		},
		[theme.breakpoints.only('xs')]: {
			width: '55%',
			margin: 'auto',
		},
		[theme.breakpoints.only('sm')]: {
			width: '30%',
			margin: 'auto',
		},
	},

	for_icons_grid: {
		marginTop: '14px',
		[theme.breakpoints.down('sm')]: {
			height: '30vh',
		},
	},
	footballIcon: {
		position: 'absolute',
		left: 40,
		top: 10,
	},
	golfIcon: {
		position: 'absolute',
		left: 10,
		top: 80,
	},
	soccerIcon: {
		position: 'absolute',
		right: 65,
		top: 130,
		// [theme.breakpoints.only('sm')]:{
		//   right:65,
		//   top:130,
		// }
	},
	baseballIcon: {
		position: 'absolute',
		right: 40,
		top: 50,
		[theme.breakpoints.only('xs')]: {
			right: 20,
			top: 64,
		},
	},

	tacenter: {
		textAlign: 'center',
		paddingLeft: '0 !important',
	},
	// footer styles
	divider: {
		height: '1px',
		backgroundColor: 'black ',
	},
	marg_right: {
		margin: '1%',
	},
	m_top: {
		marginTop: '4%',
	},
	footerContainer: {
		padding: '3% 5%',
	},
	taalign: {
		textAlign: 'right',
	},
	fonts: {
		fontFamily: "'Poppins',sans-serif",
		fontSize: '18px',
		[theme.breakpoints.only('xs')]: {
			fontSize: '10px',
		},
		[theme.breakpoints.only('sm')]: {
			fontSize: '14px',
		},
	},
}));

export default facilityStyles;
