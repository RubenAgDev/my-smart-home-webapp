import React from 'react';
import LoginForm from './components/LoginForm';

function SignIn() {
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
    console.log(formValues);
  };

  return (
    <LoginForm
      onChange={handleFormChange}
      onSubmit={handleFormSubmit}
      values={formValues} />
  );
}

export default SignIn;
