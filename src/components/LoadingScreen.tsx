import { useEffect, useRef, useState } from 'react';
import { useProgress } from '@react-three/drei';

function useForceReady(delay = 7000) {
  const [forced, setForced] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setForced(true), delay);
    return () => clearTimeout(id);
  }, [delay]);
  return forced;
}

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const { progress } = useProgress();
  const [isReady, setIsReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const forced = useForceReady();
  const roles = [
    'Senior IT Executive',
    'Microsoft 365',
    'Azure AD',
    'Intune',
    'AVD',
    'Network & Security',
    'IT Infrastructure Specialist'
  ];

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => setIsReady(true), 800);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  useEffect(() => {
    if (forced) setIsReady(true);
  }, [forced]);

  useEffect(() => {
    if (!isReady) return;
    const timeout = setTimeout(onFinish, 1200);
    return () => clearTimeout(timeout);
  }, [isReady, onFinish]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-[9999] bg-cyber-black flex flex-col items-center justify-center transition-opacity duration-500 ${isReady ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-wider">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue">VP</span>
        <span className="text-white/60">.</span>
      </h1>
      <div ref={textRef} className="h-8 overflow-hidden mb-8">
        <div className="animate-marquee-role whitespace-nowrap text-neon-cyan/60 text-sm font-mono tracking-widest uppercase">
          {roles.join('  •  ')}  •  {roles.join('  •  ')}
        </div>
      </div>
      <div className="w-48 lg:w-64 h-1 bg-cyber-gray rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple rounded-full transition-all duration-300 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      <p className="text-gray-500 text-sm mt-4 font-mono tracking-widest uppercase flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
        Loading {Math.round(progress)}%
      </p>
    </div>
  );
}