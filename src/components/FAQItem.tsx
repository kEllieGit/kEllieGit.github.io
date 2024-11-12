import React, { useState } from 'react';

/**
 * A question and a related answer in the FAQ.
 * @param question The question that's asked
 * @param answer The answer to the question
 */
const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='faq-item'>
            <div className='faq-question' onClick={toggleAnswer} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <h3 dangerouslySetInnerHTML={{ __html: question }} style={{ marginLeft: '8px' }} />
                <span className='open-arrow' style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}>
                    ▶
                </span>
            </div>
            {isOpen && <div className='faq-answer'><p dangerouslySetInnerHTML={{ __html: answer }} /></div>}
        </div>
    );
};

export default FAQItem;
