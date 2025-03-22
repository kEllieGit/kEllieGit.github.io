import React from 'react';
import { Tooltip } from 'react-tooltip';

export interface SocialIconProps {
	src: string;
	alt: string;
	link: string;
	className?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ src, alt, link, className }) => {
	const handleClick = () => {
		window.open(link, '_blank');
	};

	return (
	<>
		<img onClick={handleClick} className={`icon ${className}`} src={src} alt={alt} data-tooltip-id="social-tooltip" data-tooltip-content={alt}/>
		<Tooltip id="social-tooltip" />
	</>
	);
};

export default SocialIcon;
