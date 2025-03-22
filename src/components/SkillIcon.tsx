import React from 'react';
import { Tooltip } from 'react-tooltip';

export interface SkillIconProps {
    skill: string;
    src: string;
    alt: string;
    className?: string;
}

const SkillIcon: React.FC<SkillIconProps> = ({ skill, src, alt, className }) => {
    return (
    <>
        <img className={`icon ${className}`} src={src} alt={alt} data-tooltip-id="skill-tooltip" data-tooltip-content={skill} />
        <Tooltip id="skill-tooltip"/>
    </>
    );
};

export default SkillIcon;
