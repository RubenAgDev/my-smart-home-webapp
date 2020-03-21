import React from 'react';
import LoginForm from './components/LoginForm';

function SignIn({handler}) {
  const [formValues, setFormValues] = React.useState({
    email: '',
    password: ''
  });

  const handleFormChange = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    });
  };

  const handleFormSubmit = () => {
    handler(formValues);
  };

  return (
    <LoginForm
      onChange={handleFormChange}
      onSubmit={handleFormSubmit}
      values={formValues} />
  );
}

export default SignIn;
