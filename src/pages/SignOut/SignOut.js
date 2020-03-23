import React from 'react';
import Typography from '@material-ui/core/Typography';

function SignOut({onSignOut}) {
  React.useEffect(() => {
    const onLoad = async () => {
      await onSignOut();
    };
    
    onLoad();
  });

  return (
    <Typography variant="body1" color="textPrimary" component="p">
      You have been signed out!
    </Typography>
  );
}

export default SignOut;
