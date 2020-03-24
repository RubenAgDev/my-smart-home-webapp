const Notion = {};

const BASE_URL = '/api';

let authToken = process.env.REACT_APP_AUTH_TOKEN || '';

Notion.signIn = async ({email, password}) => {
  let user = null, error = null;

  const response = await fetch(`${BASE_URL}/users/sign_in`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      sessions: {
        email,
        password
      }
    }),
  });

  const jsonData = await response.json();
  if (response.ok) {
    authToken = jsonData.session.authentication_token;
    user = {
      id: jsonData.users.id,
      name: `${jsonData.users.first_name} ${jsonData.users.last_name}`,
      email: jsonData.users.email
    }
  } else {
    error = jsonData.errors[0].title;
  }

  return {
    authenticated: response.ok,
    authToken,
    user,
    error
  };
};

Notion.signOut = async () => {
  if (!authToken) {
    return false;
  }

  const response = await fetch(`${BASE_URL}/users/sign_out`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${authToken}`
    }
  });

  authToken = '';

  return response.ok;
}

Notion.getUserProfile = async (userId) => {
  const response = await fetch(`${BASE_URL}/users/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${authToken}`
    }
  });

  return response.json();
};

Notion.getSensors = async () => {
  const response = await fetch(`${BASE_URL}/sensors`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${authToken}`
    }
  });

  return response.json();
};

Notion.getSensorTasks = async (sensorId) => {
  const response = await fetch(`${BASE_URL}/sensors/${sensorId}/tasks`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${authToken}`
    }
  });

  return response.json();
}

export default Notion;
