import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { Project } from '../components/ProjectCard';
import { Tooltip } from 'react-tooltip';

const projects: Project[] = [
    {
        title: 'VNBase',
        description: 'VNBase is a library for creating visual novels or dialogue systems in S&Box.',
        techstack: ['C#', 'S&Box'],
        repository: 'https://github.com/kelliegit/sbox-visual-novel-base',
    },
    {
        title: 'VNScript',
        description: 'VSCode LSP extension for VNBase VNScript files.',
        techstack: ['Typescript', 'Node.js'],
        repository: 'https://github.com/kelliegit/vnscript'
    },
    {
        title: 'Personal Website',
        description: 'My personal website built with React.',
        techstack: ['Typescript', 'React'],
        repository: 'https://github.com/kEllieGit/kEllieGit.github.io'
    },
    {
        title: 'Observation',
        description: 'An Im On Observation Duty clone made in S&Box.',
        techstack: ['C#', 'S&Box'],
        repository: 'https://github.com/kEllieGit/SBox-Observation'
    }
];

const Portfolio: React.FC = () => {
    return (
        <div className='layout'>
            <h1>Projects</h1>
            <div className='container projects'>
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>

            <Tooltip id="tooltip" />
        </div>
    );
};

export default Portfolio;