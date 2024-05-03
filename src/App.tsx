import { } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import home from './assets/svg/home.svg';
import skills from './assets/svg/skills.svg';
import projects from './assets/svg/projects.svg';
import about from './assets/svg/about.svg';
import contact from './assets/svg/contact.svg';


function App() {
  const NAV_LINKS = [
    {
      name: 'Home',
      icon: home,
      link: '/'
    },
    {
      name: 'Skills',
      icon: skills,
      link: '/skills'
    },
    {
      name: 'About',
      icon: about,
      link: '/about'
    },
    {
      name: 'Projects',
      icon: projects,
      link: '/projects'
    },
    {
      name: 'Contacts',
      icon: contact,
      link: '/contact'
    }
  ];

  return (
    <main className='main'>
      <nav>
        <div className='social-links'>
          {NAV_LINKS.map((item) =>
            <NavLink to={item.link} key={item.name} className={({ isActive }) => (isActive ? 'active' : '')}>
              <img src={item.icon} alt={item.name} />
            </NavLink>

          )}
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </main>
  );
}

export default App;
