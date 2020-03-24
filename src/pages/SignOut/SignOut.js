import React from 'react';
import Typography from '@material-ui/core/Typography';

function SignOut({onSignOut}) {
  onSignOut();

  return (
    <Typography variant="body1" color="textPrimary" component="p">
      You have been signed out!
    </Typography>
  );
}

export default SignOut;
