import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import ProblemStatement from './components/ProblemStatement';
import Solution from './components/Solution';
import Features from './components/Features';
import Architecture from './components/Architecture';
import UseCase from './components/UseCase';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-slate-900 dark:to-purple-900 transition-colors duration-500">
      <Hero theme={theme} toggleTheme={toggleTheme} />
      <ProblemStatement />
      <Solution />
      <Features />
      <Architecture />
      <UseCase />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
