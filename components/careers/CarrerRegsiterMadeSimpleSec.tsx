import { Box, Grid, Typography } from '@material-ui/core';
import Image from 'next/image';
import React from 'react';
import game from '../../public/static/images/game.png';
import facilityStyles from './styles/facilityStyles';

const CarrerRegsiterMadeSimpleSec = (): JSX.Element => {
  const classes = facilityStyles();
  return (
    <Box>
      <Grid container className={classes.ssContainer}>
        <Grid item md={6} xs={12} className={classes.SecondSecinnerDiv}>
          <Box>
            <Typography className={classes.subHeading}>
              Registration made simple
            </Typography>
            <Typography className={classes.content}>
              Looking to improve and test your skills against the competition?
              Easily find and register for
              <b> classes, tournaments and leagues</b> that help elevate your
              game.
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box className={classes.imgDisplay}>
            <Image src={game} alt="Playing_game_image" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CarrerRegsiterMadeSimpleSec;
