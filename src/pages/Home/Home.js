import React from 'react';
import SensorsGrid from './components/SensorsGrid';

import NotionService from '../../services/Notion';

function Home() {
  const [sensors, setSensors] = React.useState(null);

  React.useEffect(() => {
    const onLoad = async () => {
      let sensors = [];
      try {
        const jsonData = await NotionService.getSensors();

        if (jsonData.sensors) {
          for(let sensorIndex = 0; sensorIndex < jsonData.sensors.length; sensorIndex++) {
            const sensor = jsonData.sensors[sensorIndex];
            const jsonTasks = await NotionService.getSensorTasks(sensor.id);
            
            if (jsonTasks.tasks) {
              sensors.push({
                id: sensor.id,
                name: sensor.name,
                tasks: jsonTasks.tasks
              });
            }
          }

          setSensors(sensors);
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
