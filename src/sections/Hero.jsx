import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';

import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Button from '../components/Button.jsx';
import Target from '../components/Target.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import { HackerRoom } from '../components/HackerRoom.jsx';

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-28 mt-20 c-space gap-3 relative z-10 pointer-events-none">
        <div className="flex justify-center items-center pointer-events-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-medium tracking-wide backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Based in Dubai, UAE · Available for Immediate Full-Time Role
          </div>
        </div>

        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans drop-shadow-md">
          Hi, I am Mohamed Afsal <span className="waving-hand">👋</span>
        </p>
        <h1 className="hero_tag text-gray_gradient drop-shadow-lg">AI & Full-Stack Developer</h1>
        <p className="text-center text-emerald-400 sm:text-base text-xs font-generalsans -mt-2 tracking-wider font-medium drop-shadow-sm">
          Python &bull; Generative AI Integration &bull; MERN Stack Developer
        </p>

        {/* Quick HR Highlights */}
        <div className="pointer-events-auto flex flex-wrap justify-center items-center gap-2 sm:gap-2.5 max-w-3xl mx-auto mt-2 p-2 sm:p-2.5 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 shadow-2xl">
          <span className="px-3 py-1.5 rounded-lg bg-black-200/90 border border-white/10 text-neutral-200 text-xs sm:text-sm font-mono flex items-center gap-1.5 shadow-sm">
            <span className="text-amber-400">⚡</span> 3 Years Production Exp
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-black-200/90 border border-white/10 text-neutral-200 text-xs sm:text-sm font-mono flex items-center gap-1.5 shadow-sm">
            <span className="text-emerald-400">🤖</span> Generative AI & Ollama
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-black-200/90 border border-white/10 text-neutral-200 text-xs sm:text-sm font-mono flex items-center gap-1.5 shadow-sm">
            <span className="text-cyan-400">🏢</span> Enterprise ERP Platforms
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-black-200/90 border border-white/10 text-neutral-200 text-xs sm:text-sm font-mono flex items-center gap-1.5 shadow-sm">
            <span className="text-purple-400">📱</span> Web & Mobile (React Native / Flutter)
          </span>
        </div>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full" gl={{ powerPreference: 'high-performance', antialias: true }}>
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
            </HeroCamera>

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Rings position={sizes.ringPosition} />
              <Cube position={sizes.cubePosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="w-full sm:w-auto">
            <Button name="Let's work together" isBeam containerClass="w-full sm:w-auto px-8 py-3.5" />
          </a>
          <a
            href="#projects"
            className="w-full sm:w-auto text-center px-6 py-3 rounded-md border border-white/15 bg-black/60 hover:bg-white/10 hover:border-emerald-400/50 text-white text-sm font-medium transition-all backdrop-blur-md">
            Explore Selected Work ↓
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
