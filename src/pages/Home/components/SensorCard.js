import React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
  },
});

function SensorCard({data}) {
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
        <CardHeader
          title={data.name}
        />
        <CardContent>
          {data.tasks.map((task, index) => (
            <Typography key={`sensor-${data.id}-task-${index}`} variant="body2" color="textSecondary" component="p">
              {task.task_type}: {task.status.value}
            </Typography>
          ))}
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
