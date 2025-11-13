import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Simulator from './components/Simulator';
import Methodology from './components/Methodology';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-rose-50/50 text-slate-800 antialiased">
      <Header onNavigate={scrollTo} />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
        <Hero onNavigate={scrollTo} />
        <HowItWorks />
        <Simulator />
        <Methodology />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
