import React from 'react';

import NotionService from '../services/Notion';

const initialState = {
  authToken: '',
  isLoggedIn: false,
  name: ''
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'loginUser':
      return {
        ...state,
        authToken: action.payload.authToken,
        isLoggedIn: action.payload.authenticated,
        name: action.payload.user.name,
      };
    case 'logoutUser':
      return {
        ...initialState
      };
    default:
      return state;
  }
};

const UserContext = React.createContext();

function UserContextProvider ({children}) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const handleSignIn = async(formValues) => {
    try {
      const payload = await NotionService.signIn(formValues);
      if (payload.authenticated) {
        return dispatch({
          type: 'loginUser',
          payload
        });
      } else {
        return 'Invalid email and/or password';
      }
    } catch (error) {
      return error.message;
    }
  };

  const handleSignOut = async () => {
    const success = await NotionService.signOut();
    if(success) {
      dispatch({
        type: 'logoutUser'
      });
    }
  };

  return (
    <UserContext.Provider
      value={{
        ...state,
        handleSignIn,
        handleSignOut
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const UserContextConsumer = UserContext.Consumer;

export {
  UserContextProvider,
  UserContextConsumer
};
