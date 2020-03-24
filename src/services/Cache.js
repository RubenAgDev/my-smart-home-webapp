import LocalForage from 'localforage';

LocalForage.config({
  name: 'my-smart-home',
  version: 1.0,
  storeName: 'cache'
});

export default LocalForage;
