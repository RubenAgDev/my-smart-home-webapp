import LocalForage from 'localforage';

LocalForage.config({
  name        : 'my-smart-home',
  version     : 1.0,
  description : ''
});

const Storage = { };

Storage.getIsUserLoggedIn = function() {
  return LocalForage.getItem("isUserLoggedIn");
}

Storage.setUserLoggedIn = function() {
  return LocalForage.setItem("isUserLoggedIn", true);
}

Storage.setUserLoggedOut = function() {
  return LocalForage.setItem("isUserLoggedIn", false);
}

export default Storage;
