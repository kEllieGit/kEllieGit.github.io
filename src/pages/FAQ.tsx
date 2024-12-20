import React from 'react';
import FAQItem from '../components/FAQItem';

const FAQ: React.FC = () => {
    return (
        <div className='layout'>
            <h1>Frequently Asked Questions</h1>
            <div className='faq-section'>
                <FAQItem question="Where are you from?" answer="Born and lived in <span class='text-highlight'>Finland</span> my entire life." />
                <FAQItem question="What languages do you know?" answer="Fluent in both <span class='text-highlight'>Finnish</span> & <span class='text-highlight'>English</span>. <br> Currently in the process of learning <span class='text-highlight'>Korean</span>." />
                <FAQItem question="What programming languages do you know?" answer="I'm primarily a <span class='text-highlight'>.NET developer</span>, I love the ecosystem and <span class='text-highlight'>C#</span> is my favorite language. <br> I do however also know <span class='text-highlight'>C++</span>, <span class='text-highlight'>TypeScript</span>, a little bit of <span class='text-highlight'>JavaScript</span> & <span class='text-highlight'>Python</span>." />
                <FAQItem question="What's your favorite series? (Game)" answer="I am a huge <span class='text-highlight'>Project Moon</span> fan! <br> Particularly <a class='text-highlight' href='https://store.steampowered.com/app/1256670/Library_Of_Ruina/'>Library Of Ruina</a> & <a class='text-highlight' href='https://store.steampowered.com/app/1973530/Limbus_Company/'>Limbus Company</a> are some of my favorite indie games. <br> I also really like <a class='text-highlight' href='https://store.steampowered.com/app/367520/Hollow_Knight/'>Hollow Knight</a> & <a class='text-highlight' href='https://store.steampowered.com/app/1229490/ULTRAKILL/'>Ultrakill</a>! <br> <br> I also enjoy competitive games, particularly <span class='text-highlight'>fighting games</span>!" />
                <FAQItem question="What's your favorite series? (Anime)" answer="My favorite anime is <span class='text-highlight'>Re:Zero</span>. <br> You can find my anime list <a class='text-highlight' href='https://myanimelist.net/animelist/kEllie__?status=2&order=4&order2=0'>here.</a>" />
            </div>
        </div>
    );
}

export default FAQ;