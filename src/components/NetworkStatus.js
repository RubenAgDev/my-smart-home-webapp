import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import { makeStyles } from '@mui/styles';

import HomeIcon from './HomeIcon';
import HomeNetwork from '../services/HomeNetwork';

const useStyles = makeStyles(theme => ({
  iconContainer: {
    backgroundColor: 'lightgray',
    borderRadius: '12px',
  },
}));

function NetworkStatus() {
  const classes = useStyles();
  const [status, setStatus] = React.useState("loading");
  React.useEffect(() => {
    HomeNetwork.isOnline()
      .then(result => setStatus(result ? "success" : "error"))
  }, [])
  return (
    <Tooltip title={`Home Network Connection: ${status}`}>
      <div className={classes.iconContainer}>
        <HomeIcon color={status} />
      </div>
    </Tooltip>
  );
}

export default NetworkStatus;
