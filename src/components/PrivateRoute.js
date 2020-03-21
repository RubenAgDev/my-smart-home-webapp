import React from 'react';
import { Route, withRouter } from 'react-router-dom';

function PrivateRoute({ children, history, path}) {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const onLoad = async () => {
      const isUserLoggedIn = true;

      if (!isUserLoggedIn) {
        history.push("/sign-in");
        return null;
      }

      setIsLoading(false);
    };
    
    onLoad();
  });  

  return (
      <Route path={path}>
        { isLoading ? null : children}
      </Route>
  );
}

export default withRouter(PrivateRoute);
