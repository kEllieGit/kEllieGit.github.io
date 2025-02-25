import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { Project } from '../components/ProjectCard';
import { Tooltip } from 'react-tooltip';

const projects: Project[] = [
	{
		title: 'Personal Website',
		description: 'My personal website built with React.',
		techstack: ['Typescript', 'React'],
		links: {
			'Repository': 'https://github.com/kEllieGit/kEllieGit.github.io'
		}
	},
	{
		title: 'ServerBot',
		description: 'A discord bot built on discord.js, connecting to a PostgreSQL database. Features a leveling system, users and more.',
		techstack: ['Typescript', 'Node.js', 'discord.js', 'PostgreSQL', 'Prisma'],
		links: {
			'Repository': 'https://github.com/kEllieGit/ServerBot'
		}
	},
	{
		title: 'VNBase',
		description: 'VNBase is a library for creating visual novels or dialogue systems in S&Box.',
		techstack: ['C#', 'S&Box'],
		links: {
			'Repository': 'https://github.com/kelliegit/sbox-visual-novel-base'
		}
	},
	{
		title: 'VNScript',
		description: 'VSCode LSP extension for VNBase VNScript files.',
		techstack: ['Typescript', 'Node.js'],
		links: {
			'Marketplace': 'https://marketplace.visualstudio.com/items?itemName=kEllie.vnscript',
			'Repository': 'https://github.com/kelliegit/vnscript'
		}
	},
	{
		title: 'Observation',
		description: 'An I\'m On Observation Duty clone made in S&Box.',
		techstack: ['C#', 'S&Box'],
		links: {
			'Play Game': 'https://sbox.game/spoonstuff/observation',
			'Repository': 'https://github.com/kEllieGit/SBox-Observation'
		}
	}
];

const Portfolio: React.FC = () => {
	return (
		<div className='layout'>
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