import React from 'react';
import Profile from '../components/Profile';
import SocialIcon, {SocialIconProps} from '../components/SocialIcon';
import SkillIcon, {SkillIconProps} from '../components/SkillIcon';

const Home: React.FC = () => {
	const socialLinks: SocialIconProps[] = [
		{ src: '/images/youtube.svg', alt: 'Youtube', link: 'https://youtube.com/@kEllieDev', className: "" },
		{ src: '/images/twitch.svg', alt: 'Twitch', link: 'https://twitch.tv/kEllieDev', className: "" },
		{ src: '/images/discord.svg', alt: 'Discord', link: 'https://discord.gg/kKU6a4AYNk', className: "" },
		{ src: '/images/github.svg', alt: 'Github', link: 'https://github.com/kEllieGit', className: "" },
		{ src: '/images/bluesky.svg', alt: 'Bluesky', link: 'https://bsky.app/profile/kelliedev.bsky.social', className: "" },
	];

	const skills: SkillIconProps[] = [
		{ skill: 'C#', alt: 'C#', src: '/images/csharp.svg' },
		{ skill: 'C++', alt: 'C++', src: '/images/cpp.svg' },
		{ skill: 'Typescript', alt:'Typescript', src: '/images/typescript.svg' },
		{ skill: 'Javascript', alt: 'Javascript', src: '/images/javascript.svg' },
		{ skill: 'HTML', alt: 'HTML', src: '/images/html5.svg' },
		{ skill: 'CSS', alt: 'CSS', src: '/images/css3.svg' },
		{ skill: '.NET', alt: '.NET', src: '/images/dotnet.svg' },
		{ skill: 'React', alt: 'React', src: '/images/react.svg' },
		{ skill: 'Node.js', alt: 'Node.js', src: '/images/nodejs.svg' },
		{ skill: 'PostgreSQL', alt: 'PostgreSQL', src: '/images/postgresql.svg' },
		{ skill: 'Prisma', alt: 'Prisma', src: '/images/prisma.svg' },
		{ skill: 'S&Box', alt: 'S&Box', src: '/images/sbox.svg' },
		{ skill: 'Unity', alt: 'Unity', src: '/images/unity.svg' },
		{ skill: 'Unreal Engine', alt: 'Unreal Engine', src: '/images/unreal.svg' }
	];

	return (
		<div className='center-layout'>
			<Profile username='kEllieGit' />
			<div className='layout'>
				<h1>Full Stack Software & Video Game Developer</h1>
				<div className='skills'>
					{skills.map((skill, index) => (
						<SkillIcon key={index} skill={skill.skill} alt={skill.alt} src={skill.src} className={skill.className} />
					))}
				</div>
				<div className='socials'>
					{socialLinks.map((social, index) => (
						<SocialIcon key={index} src={social.src} alt={social.alt} link={social.link} className={social.className} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
