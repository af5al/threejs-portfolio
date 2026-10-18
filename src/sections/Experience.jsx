import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Developer from '../components/Developer.jsx';
import CanvasLoader from '../components/Loading.jsx';
import { workExperiences } from '../constants/index.js';

const WorkExperience = () => {
  const [animationName, setAnimationName] = useState('idle');

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <div className="flex flex-col gap-2 mb-8">
          <p className="text-emerald-400 font-mono text-sm uppercase tracking-widest">Career Trajectory</p>
          <h2 className="head-text">Professional Experience</h2>
        </div>

        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={<CanvasLoader />}>
                <Developer position-y={-3} scale={3} animationName={animationName} />
              </Suspense>
            </Canvas>
          </div>

          <div className="work-content">
            <div className="sm:py-8 py-4 sm:px-5 px-2.5 space-y-6">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOut={() => setAnimationName('idle')}
                  className="work-content_container group transition-all duration-300 hover:border-emerald-500/30">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full object-contain" src={item.icon} alt={item.name} />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-4 w-full">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <p className="font-bold text-white text-lg">{item.name}</p>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {item.type || item.location}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-1 text-sm text-neutral-400 mb-4">
                      <p className="text-emerald-400 font-medium">{item.pos}</p>
                      <span className="font-mono text-xs text-neutral-400">{item.duration}</span>
                    </div>

                    {/* Bullet Points from Resume */}
                    {item.bullets && item.bullets.length > 0 ? (
                      <ul className="space-y-2 mb-4">
                        {item.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                            <span className="text-emerald-400 mt-1 select-none">▸</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="group-hover:text-white transition-all ease-in-out duration-500 text-sm mb-4 leading-relaxed">
                        {item.title}
                      </p>
                    )}

                    {/* Skills pills */}
                    {item.skills && (
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                        {item.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[11px] font-mono px-2 py-0.5 rounded bg-black-300 text-neutral-300 border border-white/5">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
