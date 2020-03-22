const Notion = {};

const BASE_URL = '/api';

let authToken = process.env.REACT_APP_AUTH_TOKEN || '';

Notion.signIn = async ({email, password}) => {
  // TODO: Remove when auth token is handle in the app state
  if (authToken !== '') {
    return true;
  }
  //
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

  if (response.ok) {
    const jsonData = await response.json();
    authToken = jsonData.session.authentication_token;
    console.log(authToken);
  } else {
    // TODO: Handle error message from API response
  }

  
  return response.ok;
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

  if (response.ok) {
    authToken = '';
  } else {
    // TODO: Handle error message from API response
  }

  return response.ok;
}

Notion.getSensors = async () => {
  const response = await fetch(`${BASE_URL}/sensors`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${authToken}`
    }
  });

  return await response.json();
};

Notion.getSensorTasks = async (sensorId) => {
  const response = await fetch(`${BASE_URL}/sensors/${sensorId}/tasks`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${authToken}`
    }
  });

  return await response.json();
}

export default Notion;
