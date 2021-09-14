import { Box, Grid, Typography } from '@material-ui/core';
import Image from 'next/image';
import React from 'react';
import ground from '../../public/static/images/ground.png';
import facilityStyles from './styles/facilityStyles';
// import ground from '/static/images/ground.png'

// import facilityStyles from './styles/facilityStyles'

const BookWithEaseSec = (): JSX.Element => {
  const classes = facilityStyles();

  return (
    <Box>
      <Grid container className={classes.ssContainer}>
        <Grid item md={6} xs={12} className={classes.SecondSecinnerDiv}>
          <Box>
            <Typography className={classes.subHeading}>
              Book space with ease
            </Typography>
            <Typography className={classes.content}>
              Rental space can be very expensive and hard to find. Natty Hatty
              provides a vast selection of options to choose from so you can
              find the hottest deals and book directly from the comfort of your
              home.
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box className={classes.imgDisplay}>
            <Image src={ground} alt="ground_image" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BookWithEaseSec;
