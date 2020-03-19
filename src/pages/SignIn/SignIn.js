import React from 'react';
import Button from '@material-ui/core/Button';

import StorageService from '../../services/Storage';

function SignIn() {
  const handleOnClick = () => {
    StorageService.setUserLoggedIn();
  };

  return (
    <>
      <h1>Please Sign In</h1>
      <Button color="primary" onClick={handleOnClick}>Sign In</Button>
    </>
  );
}

export default SignIn;
