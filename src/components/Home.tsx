import { } from 'react';
import homeSvg from '../assets/home.svg';
import linkedin from '../assets/svg/linkedin.svg';
import github from '../assets/svg/github.svg';
import codepen from '../assets/svg/codepen.svg';
import email from '../assets/svg/email.svg';
import namaste from '../assets/svg/namaste.svg';
import resume from '../assets/shashiranjan.pdf';

function Home() {
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
        },
        {
            name: 'Email',
            icon: email,
            link: 'mailto:shashiranjansharma@live.in'
        }
    ];
    return (
        <div className='home'>
            <div className='home-left'>
                <section>
                    <img src={namaste} alt='namaste' className='namsate' />
                    <h1>
                        <span>I am </span>
                        <span className='text-gradient'>Shashi Ranjan</span>
                    </h1>
                    <h3>I learn &bull; build &bull; ship.</h3>
                    <div className='social-links'>
                        {SOCIAL_LINKS.map((item) =>
                            <a title={item.name} target='_blank' key={item.name} href={item.link}>
                                <img src={item.icon} alt={item.name} />
                            </a>
                        )}
                    </div>
                    <a href={resume} download='shashiranjan_resume' className='mt-6 download-btn' target='_blank'>
                        <button className='download-btn'>
                            <svg xmlns="http://www.w3.org/2000/svg" width={14} viewBox="0 0 384 512">
                                <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 232V334.1l31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31V232c0-13.3 10.7-24 24-24s24 10.7 24 24z" fill='currentColor' />
                            </svg>
                            Resume
                        </button>
                    </a>
                </section>
            </div>
            <div className='home-right'>
                <img src={homeSvg} alt="Home" />
            </div>
        </div>
    );
}

export default Home;