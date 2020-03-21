const Notion = {};

const BASE_URL = '';

let authToken = '';

Notion.signIn = async (email, password) => {
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
  authToken = jsonData.session.authentication_token;

  return true;
};

Notion.signOut = async () => {
  await fetch(`${BASE_URL}/users/sign_out`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${authToken}`
    }
  });

  return true;
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

export default Notion;
