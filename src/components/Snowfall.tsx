import React from 'react';
import Snowfall from 'react-snowfall';

const SnowfallEffect: React.FC = () => {
  const currentMonth = new Date().getMonth() + 1; // JavaScript months are 0-11

  // Show snowfall only in December
  if (currentMonth !== 12) {
    return null;
  }

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
