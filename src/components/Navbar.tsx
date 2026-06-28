import { useState, useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { PROFILE } from '../data/profileData';
import gsap from 'gsap';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onNavigate }: { onNavigate?: (href: string) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3 }
    );

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!overlayRef.current) return;

    if (mobileOpen) {
      gsap.to(overlayRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: 'power3.out',
        onStart: () => {
          overlayRef.current!.style.pointerEvents = 'auto';
        },
      });
      linksRef.current.forEach((link, i) => {
        if (link) {
          gsap.fromTo(link,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.4, delay: 0.1 + i * 0.05, ease: 'power3.out' }
          );
        }
      });
    } else {
      gsap.to(overlayRef.current, {
        y: '-100%',
        opacity: 0,
        duration: 0.4,
        ease: 'power3.in',
        onComplete: () => {
          overlayRef.current!.style.pointerEvents = 'none';
        },
      });
    }
  }, [mobileOpen]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    if (onNavigate) {
      onNavigate(href);
    } else {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cyber-black/90 backdrop-blur-xl border-b border-cyber-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a
            href="#"
            className="text-xl lg:text-2xl font-bold tracking-tight hoverable"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="neon-text">VP</span>
            <span className="text-white/80">.</span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`relative text-sm font-medium transition-colors hoverable ${
                  activeSection === link.href
                    ? 'text-neon-cyan'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
                {activeSection === link.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-neon-cyan rounded-full" />
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-cyan transition-colors hoverable"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href={PROFILE.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-blue transition-colors hoverable"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <button
              className="lg:hidden text-gray-400 hover:text-white transition-colors hoverable"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <div
        ref={overlayRef}
        className="lg:hidden fixed inset-0 top-0 bg-cyber-black/95 backdrop-blur-2xl flex flex-col items-center justify-center"
        style={{ pointerEvents: 'none', zIndex: -1, transform: 'translateY(-100%)', opacity: 0 }}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              ref={(el) => { linksRef.current[i] = el; }}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`text-2xl font-bold transition-colors hoverable ${
                activeSection === link.href ? 'text-neon-cyan' : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}