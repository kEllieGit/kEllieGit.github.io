import React from 'react';
import Snowfall from 'react-snowfall';

const SnowfallEffect: React.FC = () => {
	return (
		<div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
			<Snowfall
				color="white"
				snowflakeCount={50}
				radius={[0.5, 3.0]}
				speed={[0.5, 1.5]}
				wind={[0.5, 0.5]}
			/>
		</div>
	);
};

export default SnowfallEffect;
