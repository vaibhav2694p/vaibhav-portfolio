import { useState, useEffect, lazy, Suspense, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import ErrorBoundary from './components/ErrorBoundary';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

const GitHubProjects = lazy(() => import('./components/GitHubProjects'));
const Certifications = lazy(() => import('./components/Certifications'));
const Achievements = lazy(() => import('./components/Achievements'));
const LinkedInStats = lazy(() => import('./components/LinkedInStats'));
const Contact = lazy(() => import('./components/Contact'));

const Character3D = lazy(() => import('./components/Character3D'));

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export let smoother: gsap.core.Timeline | null = null;

function App() {
  const [loading, setLoading] = useState(true);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ScrollTrigger.defaults({
      toggleActions: 'play none none none',
      scroller: window,
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const scrollTo = (target: string) => {
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <ErrorBoundary>
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}

      <div
        ref={mainRef}
        className={`relative min-h-screen bg-cyber-black text-white transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}
      >
        <CustomCursor />

        <Suspense fallback={null}>
          <Character3D />
        </Suspense>

        <Navbar onNavigate={scrollTo} />
        <main>
          <Hero />
          <About />
          <WorkExperience />
          <Skills />
          <Suspense fallback={<div className="section-container"><div className="h-40 animate-pulse bg-cyber-gray rounded-2xl" /></div>}>
            <GitHubProjects />
          </Suspense>
          <Suspense fallback={null}>
            <Certifications />
          </Suspense>
          <Suspense fallback={null}>
            <Achievements />
          </Suspense>
          <Suspense fallback={null}>
            <LinkedInStats />
          </Suspense>
          <Suspense fallback={null}>
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;