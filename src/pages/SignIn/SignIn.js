import React from 'react';
import LoginForm from './components/LoginForm';

import NotionService from '../../services/Notion';

function SignIn({onSignIn}) {
  const [formValues, setFormValues] = React.useState({
    email: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = React.useState(null);

  const handleFormChange = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    });
  };

  const handleFormSubmit = async () => {
    try {
      const success = await NotionService.signIn(formValues);
      
      if (success) {
        onSignIn(true);
      } else {
        setErrorMessage('Invalid email and/or password');
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <LoginForm
      onChange={handleFormChange}
      onSubmit={handleFormSubmit}
      values={formValues}
      errorMessage={errorMessage} />
  );
}

export default SignIn;
