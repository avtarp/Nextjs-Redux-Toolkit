import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import Image from 'next/image';
import MakePaymentsOnline from '../../public/static/images/MakePaymentsOnline.png';
import facilityStyles from './styles/facilityStyles';

const MakePaymentsOnlineSec = (): JSX.Element => {
  const classes = facilityStyles();
  return (
    <Box>
      <Grid container className={classes.ssContainer}>
        <Grid item md={6} xs={12} className={classes.SecondSecinnerDiv}>
          <Box>
            <Typography className={classes.subHeading}>
              Make Payments online with ease
            </Typography>
            <Typography className={classes.content}>
              <b>No more worrying</b> about due dates or taking the time to drop
              off cash or checks. All payments are done online!
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box className={classes.imgDisplay}>
            <Image src={MakePaymentsOnline} alt="MakePaymentsOnline_image" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MakePaymentsOnlineSec;
