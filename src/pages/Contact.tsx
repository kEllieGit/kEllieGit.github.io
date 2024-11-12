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
        <div className='container'>
        <div className='info-header'>
            <h1>Business Contact</h1>
            <p>For business purposes only, you may email me by clicking the button below.</p>
            <button className='contact-button' onClick={handleContactClick}>
                Contact
            </button>
        </div>
        </div>
    );
};

export default Contact;
