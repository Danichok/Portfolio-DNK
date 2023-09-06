import React from 'react'
import './Main.css';
import Header from '../../component/Header/Header';
import Project from '../../component/Project/Project';
import { useState, useEffect, useRef } from 'react';
import About from '../../component/About/About';
import Contact from '../../component/Contact/Contact';


function Main() {
  const [activeSection, setActiveSection] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);


  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
  };




  const scrollToAnchor = (sectionId) => {
    if (sectionRefs[sectionId].current) {
      window.scrollTo({
        top: sectionRefs[sectionId].current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      const scrollPosition = window.scrollY;

      let active = null;

      sections.forEach((section) => {
        const offsetTop = section.offsetTop;
        const offsetBottom = offsetTop + section.clientHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          active = section.id;
        }
      });

      setActiveSection(active);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

 

  /* darkMode in local Storage */

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode !== null) {
      setIsDarkMode(JSON.parse(storedDarkMode));
    }
  }, []);

  /* darkMode in local Storage */

  return (
    <div className={isDarkMode ? 'light' : 'dark'}>
      <div className='menu'>
        <div onClick={() => scrollToAnchor('section4')} className='menu_link'>
          <p className={activeSection === 'section4' ? 'active' : ''}>contact</p>
        </div>
        <div onClick={() => scrollToAnchor('section3')} className='menu_link'>
          <p className={activeSection === 'section3' ? 'active' : ''}>about me</p>
        </div>
        <div onClick={() => scrollToAnchor('section2')} className='menu_link'>
          <p className={activeSection === 'section2' ? 'active' : ''}>project</p>
        </div>
        <div onClick={() => scrollToAnchor('section1')} className='menu_link'>
          <p className={activeSection === 'section1' ? 'active' : ''}>home</p>
        </div>
      </div>
      <section ref={sectionRefs.section1} className="section" id="section1" style={{ height: '100vh' }}>
        <Header toggleTheme={toggleTheme} />
      </section>
      <section ref={sectionRefs.section2} className="section" id="section2" >
        <Project />
      </section>
      <section ref={sectionRefs.section3} className="section" id="section3" >
        <About />
      </section>
      <section ref={sectionRefs.section4} className="section" id="section4" >
        <Contact />
      </section>
    </div>
  )
}


export default Main
