import React from 'react';

function SignOut({handler}) {
  React.useEffect(() => {
    const onLoad = async () => {
      await handler();
    };
    
    onLoad();
  });

  return (
    <h3>
        You have been signed out!
    </h3>
  );
}

export default SignOut;
