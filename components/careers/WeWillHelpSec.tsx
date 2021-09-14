import { Box, Grid, Typography } from '@material-ui/core';
import Image from 'next/image';
import React from 'react';
import calender from '../../public/static/images/calender.png';
import facilityStyles from './styles/facilityStyles';

const WeWillHelpSec = (): JSX.Element => {
  const classes = facilityStyles();
  return (
    <Box>
      <Box className={classes.alignHeading}>We’ll help you —</Box>

      <Grid container className={classes.ssContainer}>
        <Grid item md={6} xs={12}>
          <Box className={classes.imgDisplay}>
            <Image src={calender} alt="calender_image" />
          </Box>
        </Grid>
        <Grid item md={6} xs={12} className={classes.SecondSecinnerDiv}>
          <Box>
            <Typography className={classes.subHeading}>
              Stay organized
            </Typography>
            <Typography className={classes.content}>
              Is it hard keeping track of all the games and practices throughout
              the week? Not anymore! Natty Hatty’s color coded calendar is easy
              to view and updates in real time. No more showing up to the wrong
              location, wearing the wrong jersey or missing a game because they
              changed the time.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WeWillHelpSec;
