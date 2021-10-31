const HomeNetwork = {}

const BASE_URL = `http://${process.env.REACT_APP_HOME_NETWORK_GW}/api/v1`;

HomeNetwork.isOnline = async() => {
  const response = await fetch(`${BASE_URL}/status`)
  const jsonData = await response.json();
  if (response.ok) 
    return jsonData.wan.online;

  return false;
};

export default HomeNetwork;
