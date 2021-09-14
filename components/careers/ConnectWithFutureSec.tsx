import { Box, Grid, Typography } from '@material-ui/core';
import Image from 'next/image';
import React from 'react';
import mobilewithcontent from '../../public/static/images/mobilewithcontent.png';
import facilityStyles from './styles/facilityStyles';

const ConnectWithFutureSec = (): JSX.Element => {
  const classes = facilityStyles();
  return (
    <Box>
      <Grid container className={classes.ssContainer}>
        <Grid item md={6} xs={12}>
          <Box className={classes.imgDisplay}>
            <Image src={mobilewithcontent} alt="mobilewithcontent_image" />
          </Box>
        </Grid>
        <Grid item md={6} xs={12} className={classes.SecondSecinnerDiv}>
          <Box>
            <Typography className={classes.subHeading}>
              Connect with your future team
            </Typography>
            <Typography className={classes.content}>
              Easily filter and find teams that best fit your desired skill and
              competition level. Trying out for a team? Now you can receive
              exclusive invites directly in your Natty Hatty Account. The sign
              up process is simple and done within a few clicks.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ConnectWithFutureSec;
