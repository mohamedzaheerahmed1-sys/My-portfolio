import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Metrics from './components/Metrics';
import ArchitectureMindset from './components/ArchitectureMindset';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-primary/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Metrics />
        <ArchitectureMindset />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
