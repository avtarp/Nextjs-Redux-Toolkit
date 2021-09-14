import { Box, Grid } from '@material-ui/core';
import React from 'react';
import facilityStyles from './styles/facilityStyles';

const ConnectAtheletsSec = (): JSX.Element => {
	const classes = facilityStyles();

	return (
		<Grid
			container
			// className={classes.TeamsmainDiv}
		>
			<Grid item md={7} sm={12} xs={12}>
				<Box>
					<Box
						sx={{
							fontWeight: 600,
							fontSize: '30px',
						}}
						className={classes.title}
					>
						Connecting athletes with opportunity…
					</Box>
					<Box my={2} className={classes.content}>
						Natty Hatty has the tools and resources you need to be the best
						version of yourself.
					</Box>
					<Box className={classes.content1}>
						Rent space, find teams and register for leagues, tournaments and
						classes.
					</Box>
				</Box>
			</Grid>

			{/* <Grid item md={5} sm={12} xs={12} className={classes.for_icons_grid}>
        <Box className={classes.imgDisplay}>
          <Image
            src={iconsFootball}
            alt="MakePaymentsOnline_image"
            className={classes.imageIcons}
          />
        </Box>
      </Grid> */}
		</Grid>
	);
};

export default ConnectAtheletsSec;
