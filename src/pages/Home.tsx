import React from 'react';
import Profile from '../components/Profile';
import SocialIcon from '../components/SocialIcon';

const Home: React.FC = () => {
  const socialLinks = [
    { src: '/images/youtube.svg', alt: 'Youtube', link: 'https://youtube.com/@kEllieDev', className: "" },
    { src: '/images/twitch.svg', alt: 'Twitch', link: 'https://twitch.tv/kEllieDev', className: "" },
    { src: '/images/bluesky.svg', alt: 'Bluesky', link: 'https://bsky.app/profile/kelliedev.bsky.social', className: "" },
    { src: '/images/discord.svg', alt: 'Discord', link: 'https://discord.gg/kKU6a4AYNk', className: "" },
  ];

  return (
    <div className='center-layout'>
      <Profile username='kEllieGit' />
      <div className='layout'>
        <div>
          <h1>Full Stack Software & Video Game Developer</h1>
          <h2>Part of <a className='text-highlight' href='https://apetavern.com'>Ape Tavern</a></h2>
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
