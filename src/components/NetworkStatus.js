import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import HomeNetwork from '../services/HomeNetwork';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function NetworkStatus() {
    const [status, setStatus] = React.useState(null);
    React.useEffect(() => {
      HomeNetwork.isOnline()
        .then(result => setStatus(result))
    }, [])
    return (
      status ? <HomeIcon color="success" /> :  <HomeIcon color="error" />
    )
}

export default NetworkStatus;
