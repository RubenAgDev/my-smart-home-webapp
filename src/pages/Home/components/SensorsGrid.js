import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import SensorCard from './SensorCard';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '2em 0 0 0',
  }
}));

function SensorsGrid({sensors}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={4}>
        {!sensors ? <CircularProgress /> : sensors.map((sensor, index) => (
          <Grid key={`sensor-card-${index}`} item>
            <SensorCard data={sensor} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default SensorsGrid;
