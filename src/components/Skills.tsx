import { } from 'react';
import '../assets/styles/skills.scss';
import SkillSvg from '../assets/skills.svg';
import react from '../assets/svg/react.svg';
import javascript from '../assets/svg/js.svg';
import html from '../assets/svg/html5.svg';
import css from '../assets/svg/css.svg';
import typescript from '../assets/svg/typescript.svg';
import vueJs from '../assets/svg/vuejs.svg';
import vuex from '../assets/svg/vuex-store.svg';
import pinia from '../assets/svg/pinia.svg';
import git from '../assets/svg/git.svg';
import bootstrap from '../assets/svg/bootstrap.svg';
import nodejs from '../assets/svg/nodejs.svg';
import jenkins from '../assets/svg/jenkins.svg';
import ec2 from '../assets/svg/ec2.svg';
import sass from '../assets/svg/sass.svg';

function Skills() {
    const SKILLS_LIST = [
        {
            name: 'HTML',
            icon: html,
            rate: 4
        },
        {
            name: 'CSS',
            icon: css,
            rate: 4
        },
        {
            name: 'SASS',
            icon: sass,
            rate: 4
        },
        {
            name: 'Javascript',
            icon: javascript,
            rate: 4
        },
        {
            name: 'TypeScript',
            icon: typescript,
            rate: 4
        },
        {
            name: 'VueJs',
            icon: vueJs,
            rate: 4
        },
        {
            name: 'Pinia',
            icon: pinia,
            rate: 4
        },
        {
            name: 'VueX',
            icon: vuex,
            rate: 4
        },
        {
            name: 'ReactJs',
            icon: react,
            rate: 4
        },
        {
            name: 'Git',
            icon: git,
            rate: 4
        },
        {
            name: 'Bootstrap',
            icon: bootstrap,
            rate: 4
        },
        {
            name: 'NodeJs',
            icon: nodejs,
            rate: 4
        },
        {
            name: 'Jenkins',
            icon: jenkins,
            rate: 4
        },
        {
            name: 'AWS EC2',
            icon: ec2,
            rate: 4
        },
    ];
    return (
        <div className='skills'>
            <img src={SkillSvg} alt="Home" />
            <h1 className='text-gradient'>Skills</h1>
            <div className='skills-list'>
                {SKILLS_LIST.map((skill) =>
                    <div className='skills-item'>
                        <img src={skill.icon} alt={skill.name} className='icon' />
                        <h4>{skill.name}</h4>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Skills;