import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

import { portfolioData } from './src/portfolioData';

import { Header } from './src/components/Header';
import { AboutSection } from './src/components/AboutSection';
import { NewsSection } from './src/components/NewsSection';
import { ExpandButton } from './src/components/ExpandButton';
import { ExperienceSection } from './src/components/ExperienceSection';
import { PublicationsSection } from './src/components/PublicationsSection';
import { AwardsSection } from './src/components/AwardsSection';
import { Footer } from './src/components/Footer';

const App = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme === 'light' || savedTheme === 'dark') ? savedTheme : 'dark';
  });
  const sectionRefs = useRef({});

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
      sectionRefs.current[section.id] = section;
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (sectionRefs.current[section.id]) {
          observer.unobserve(section);
        }
      });
    };
  }, [isExpanded]);

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-16">

        <Header 
          data={portfolioData} 
          activeSection={activeSection} 
          isExpanded={isExpanded}
          theme={theme}
          toggleTheme={toggleTheme}
        />

        <main className="pt-24 lg:w-3/5 lg:py-24">
          <AboutSection data={portfolioData} />
          <NewsSection news={portfolioData.news} />
          
          {!isExpanded && <ExpandButton onClick={() => setIsExpanded(true)} />}

          <div className={`transition-all ease-in-out duration-1000 overflow-hidden ${isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <ExperienceSection experience={portfolioData.experience} />
            <PublicationsSection publications={portfolioData.publications} />
            <AwardsSection awards={portfolioData.awards} />
            <Footer name={portfolioData.name} />
          </div>
        </main>
      </div>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);