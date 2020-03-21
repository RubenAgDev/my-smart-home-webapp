import React from 'react';
import SensorsGrid from './components/SensorsGrid';

import NotionService from '../../services/Notion';

function Home() {
  const [sensors, setSensors] = React.useState(null);

  React.useEffect(() => {
    const onLoad = async () => {
      try {
        const jsonData = await NotionService.getSensors();
        if (jsonData.sensors) {
          setSensors(jsonData.sensors);
        } else {
          // TODO: Handle error
          console.log(jsonData);
        }
      } catch(error) {
        // TODO: Handle error
        console.log(error);
      }
    };
    
    if (!sensors) {
      onLoad();
    }
  });
  
  return (
    <SensorsGrid sensors={sensors} />
  );
}

export default Home;
