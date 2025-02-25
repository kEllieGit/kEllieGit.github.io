export interface Project {
    title: string;
    description: string;
    image?: string;
    techstack?: string[];
    organization?: string;
    releaseDate?: string;
    links?: { [key: string]: string };
}

import React from 'react';

const ProjectCard: React.FC<Project> = ({ title, description, image, techstack, organization, releaseDate, links }) => {
    return (
        <div className='project-card'>
            {image && (
                <div className='project-image'>
                    <img src={image} alt={title} />
                </div>
            )}
            <div className='project-content'>
                <div className='project-header'>
                    <h3 className='project-title'>{title}</h3>
                    {organization && <h4 className='project-organization'>{organization}</h4>}
                </div>
                <p>{description}</p>
                {techstack && (
                    <div className='project-techstack'>
                        {techstack.map((tech, index) => (
                            <span key={index}>{tech}</span>
                        ))}
                    </div>
                )}
                {links && (
                    <div className='project-links'>
                        {Object.entries(links).map(([key, value]) => (
                            <a className='button' key={key} href={value}>{key}</a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;