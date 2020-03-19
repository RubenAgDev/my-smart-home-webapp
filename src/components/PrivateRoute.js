import React from 'react';
import { Route, withRouter } from 'react-router-dom';

const isSignedIn = false;

function PrivateRoute({ children, history, path}) {
  if (!isSignedIn) {
    history.push("/sign-in");
    return null;
  }

  return (
    <Route path={path}>
      {children}
    </Route>
  );
}

export default withRouter(PrivateRoute);
