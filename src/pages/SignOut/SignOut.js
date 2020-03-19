import React from 'react';
import StorageService from '../../services/Storage';

function SignOut() {
  React.useEffect(() => {
    const onLoad = async () => {
      await StorageService.setUserLoggedOut();
    };
    
    onLoad();
  });

  return (
    <div>
        You have been signed out!
    </div>
  );
}

export default SignOut;
