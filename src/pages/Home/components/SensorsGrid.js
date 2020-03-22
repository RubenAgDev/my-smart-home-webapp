import React from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import SensorCard from './SensorCard';

function SensorsGrid({sensors}) {
  return (
    <Grid container justify="center" spacing={4}>
      {!sensors ? <CircularProgress /> : sensors.map((sensor, index) => (
        <Grid key={`sensor-card-${index}`} item>
          <SensorCard data={sensor} />
        </Grid>
      ))}
    </Grid>
  );
}

export default SensorsGrid;
