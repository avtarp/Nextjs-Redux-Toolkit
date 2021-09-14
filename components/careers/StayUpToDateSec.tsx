import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import Image from 'next/image';
import mobilenotification from '../../public/static/images/mobilenotification.png';
import facilityStyles from './styles/facilityStyles';

const StayUpToDateSec = (): JSX.Element => {
  const classes = facilityStyles();
  return (
    <Box>
      <Grid container className={classes.ssContainer}>
        <Grid item md={6} xs={12}>
          <Box className={classes.imgDisplay}>
            <Image src={mobilenotification} alt="mobilenotification_image" />
          </Box>
        </Grid>
        <Grid item md={6} xs={12} className={classes.SecondSecinnerDiv}>
          <Box>
            <Typography className={classes.subHeading}>
              Stay up to date
            </Typography>
            <Typography className={classes.content}>
              It happens to the best of us. We all forget sometimes! Receive
              automated reminders and updates for upcoming events.{' '}
              <b>Make forgetting a thing of the past.</b>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StayUpToDateSec;
