import { } from 'react';
import '../assets/styles/contact.scss';
import linkedin from '../assets/svg/linkedin.svg';
import github from '../assets/svg/github.svg';
import codepen from '../assets/svg/codepen.svg';

function Contact() {
    const SOCIAL_LINKS = [
        {
            name: 'LinkedIn',
            icon: linkedin,
            link: 'https://www.linkedin.com/in/shashiranjansharma'
        },
        {
            name: 'Git Hub',
            icon: github,
            link: 'https://github.com/shashiranjansharma/'
        },
        {
            name: 'Code Pen',
            icon: codepen,
            link: 'https://codepen.io/shashiranjansharma/'
        },];
    return (
        <main className='contact'>
            <h1 className='text-gradient'>Contact</h1>
            <h4>Give me a call on +91-9852041771 or send us an email at <a href='mailto:shashiranjansharma@live.in' className='text-gradient'>shashiranjansharma@live.in</a></h4>
            <div className='social'>
                <div className='social-head text-gradient'>
                    Follow me
                </div>
                <div className='social-links'>
                    {SOCIAL_LINKS.map((item) =>
                        <a title={item.name} target='_blank' key={item.name} href={item.link}>
                            <img src={item.icon} alt={item.name} />
                        </a>
                    )}
                </div>

            </div>
        </main>
    );
}

export default Contact;