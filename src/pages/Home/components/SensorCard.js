import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

function SensorCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Sensor 1"
          height="140"
          image="/images/sensor.png"
          title="Sensor 1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Laundry Room Sensor
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Some description here
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Program
        </Button>
        <Button size="small" color="primary">
          See More
        </Button>
      </CardActions>
    </Card>
  );
}

export default SensorCard;
