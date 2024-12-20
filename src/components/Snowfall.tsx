import React from 'react';
import Snowfall from 'react-snowfall';

const SnowfallEffect: React.FC = () => {
  return (
    <Snowfall
      color="white"
      snowflakeCount={50}
      radius={[0.5, 3.0]}
      speed={[0.5, 1.5]}
      wind={[0.5, 0.5]}
    />
  );
};

export default SnowfallEffect;
