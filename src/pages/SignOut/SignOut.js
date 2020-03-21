import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import NotionService from '../../services/Notion';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 'auto',
    paddingTop: '5em',
    width: '50%'
  }
}));

function SignOut({onSignOut}) {
  const classes = useStyles();

  React.useEffect(() => {
    const onLoad = async () => {
      await NotionService.signOut();
      onSignOut();
    };
    
    onLoad();
  });

  return (
    <div className={classes.root}>
      <Typography variant="body1" color="textPrimary" component="p">
        You have been signed out!
      </Typography>
    </div>
  );
}

export default SignOut;
