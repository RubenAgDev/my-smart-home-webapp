import React from 'react';
import Typography from '@material-ui/core/Typography';

import NotionService from '../../services/Notion';

function SignOut({onSignOut}) {
  React.useEffect(() => {
    const onLoad = async () => {
      await NotionService.signOut();
      onSignOut();
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
