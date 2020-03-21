import React from 'react';
import SensorCard from './components/SensorCard';

function Home({handler}) {
  const [sensors, setSensors] = React.useState([]);

  // React.useEffect(() => {
  //   const onLoad = async () => {
  //     const jsonData = await handler();
  //     console.log(jsonData);
  //   };
    
  //   onLoad();
  // });
  
  return (
    <>
      <h1>Welcome Home!</h1>
      {sensors.map((sensor, index) => {
        return <SensorCard key={`sensor-card-${index}`} sensor={sensor} />
      })}
    </>
  );
}

export default Home;
