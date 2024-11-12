import React from 'react';

const Contact: React.FC = () => {
    const emailParts = ['kelliebusiness', '2', '@gmail.com'];
    const email = `${emailParts[0]}${emailParts[1]}${emailParts[2]}`;
    const subject = encodeURIComponent('Contact from Portfolio');
    const body = encodeURIComponent('Hi, I would like to get in touch with you!');

    const handleContactClick = () => {
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    };

    return (
        <div className='center-layout'>
            <h1>Business Contact</h1>
            <p style={{ margin: 0 }}>For business purposes only, you may send me an email by clicking the button below. </p>
            <p>For anything else, you can always find me in my <a className='text-highlight' href='https://discord.gg/kKU6a4AYNk'>Discord server</a>!</p>
            <button className='contact-button' onClick={handleContactClick}>
                Contact
            </button>
        </div>
    );
};

export default Contact;
