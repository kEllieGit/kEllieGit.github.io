import React from 'react';

interface SocialIconProps {
  src: string;
  alt: string;
  link: string;
  className?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ src, alt, link, className }) => {
  const handleClick = () => {
    window.open(link, '_blank');
  };

  return <img onClick={handleClick} className={`icon ${className}`} src={src} alt={alt} />;
};

export default SocialIcon;
