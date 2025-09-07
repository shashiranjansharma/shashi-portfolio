import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Projects from './pages/Projects.tsx';
import Contact from './pages/Contact.tsx';
import './App.css';


const App: React.FC = () => {
  // We assume dark mode is default
  React.useEffect(() => {
    document.documentElement.classList.add('light');
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background text-text">
        <Navbar />
        <main className="flex-grow container content-container mx-auto px-4 py-8 md:py-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;