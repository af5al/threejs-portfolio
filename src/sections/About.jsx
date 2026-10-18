import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';
import { technicalSkills, educationAndCerts } from '../constants/index.js';

const About = () => {
  const [hasCopiedEmail, setHasCopiedEmail] = useState(false);
  const [hasCopiedPhone, setHasCopiedPhone] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('afiafsal6023@gmail.com');
    setHasCopiedEmail(true);
    setTimeout(() => {
      setHasCopiedEmail(false);
    }, 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+971 54 142 4689');
    setHasCopiedPhone(true);
    setTimeout(() => {
      setHasCopiedPhone(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="flex flex-col gap-3 mb-10">
        <p className="text-emerald-400 font-mono text-sm uppercase tracking-widest">About Me & Expertise</p>
        <h2 className="head-text">Engineering Scalable Systems with AI</h2>
      </div>

      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* Card 1: Profile Summary */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[240px] h-fit object-contain" />

            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
                  AI & Full-Stack Developer
                </span>
              </div>
              <p className="grid-headtext">Mohamed Afsal</p>
              <p className="grid-subtext leading-relaxed">
                AI & Full-Stack Developer with 3 years of experience building scalable web and mobile applications
                using React.js, Node.js, TypeScript, PostgreSQL and MongoDB. Delivered enterprise ERP, HRM, and
                multi-tenant platforms at a product company.
              </p>
              <p className="grid-subtext leading-relaxed mt-2.5">
                Hands-on with Python, Generative AI integration, and agentic development workflows. Currently deepening
                skills in RAG, local LLM orchestration with Ollama & FastAPI, and private AI assistants.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Technical Skills Grid */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="flex justify-between items-center">
              <div>
                <p className="grid-headtext !mb-1">Technical Skills</p>
                <p className="text-xs text-neutral-400">Curated stack for production engineering</p>
              </div>
              <span className="text-xs font-mono px-2 py-1 rounded bg-black-300 text-emerald-400 border border-white/10">
                ATS Verified
              </span>
            </div>

            {/* Category tabs */}
            <div className="flex flex-wrap gap-1.5 border-b border-white/10 pb-3">
              {technicalSkills.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`text-xs px-2.5 py-1 rounded-md transition-all font-medium ${
                    activeTab === idx
                      ? 'bg-emerald-500 text-black shadow-md shadow-emerald-500/20'
                      : 'bg-black-300 text-neutral-400 hover:text-white'
                  }`}>
                  {cat.category.split(' ')[0]}
                </button>
              ))}
            </div>

            {/* Active category skill pills */}
            <div className="flex flex-col gap-3 py-1">
              <p className="text-xs uppercase tracking-wider text-emerald-400 font-mono font-medium">
                {technicalSkills[activeTab].category}
              </p>
              <div className="flex flex-wrap gap-2">
                {technicalSkills[activeTab].skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black-300 border border-white/10 text-white text-xs hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-3 mt-auto">
              <p className="text-xs text-neutral-400 leading-tight">
                <span className="text-white font-medium">Core Proficiencies:</span> React, TypeScript, Node.js, Python,
                PostgreSQL, GenAI Integration & Mobile (React Native / Flutter).
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: Location & Immediate Availability (Dubai, UAE) */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-2xl w-full sm:h-[300px] h-[240px] flex justify-center items-center overflow-hidden bg-black/40 border border-white/5">
              <Globe
                height={300}
                width={300}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 25.2048, lng: 55.2708, text: 'Dubai, UAE 📍', color: '#00FFA3', size: 24 }]}
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Available for Immediate Joining
              </div>
              <p className="grid-headtext">Based in Dubai, UAE</p>
              <p className="grid-subtext leading-relaxed">
                Resident in Dubai with valid passport, available for immediate full-time on-site, hybrid, or remote
                employment. Highly flexible with global time zones and collaborative workflows.
              </p>
              <a href="#contact" className="w-full block">
                <Button name="Contact Me for Roles" isBeam containerClass="w-full mt-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Card 4: Education, Certifications & Mentorship */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 border-b border-white/10 pb-4">
              <div>
                <p className="grid-headtext !mb-1">Education & Certifications</p>
                <p className="text-xs text-neutral-400">Formal academic background & verified credentials</p>
              </div>
              <span className="px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                Calicut University (2020 – 2023)
              </span>
            </div>

            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 py-2">
              <div className="p-4 rounded-xl bg-black-300 border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <span>🎓</span>
                  <p>{educationAndCerts.education.degree}</p>
                </div>
                <p className="text-xs text-emerald-400 font-mono">{educationAndCerts.education.institution}</p>
                <p className="text-xs text-neutral-400">{educationAndCerts.education.period}</p>
              </div>

              <div className="p-4 rounded-xl bg-black-300 border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <span>📜</span>
                  <p>Certifications</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {educationAndCerts.certifications.map((cert, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-neutral-300">
                      ✓ {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-black-300 border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <span>💡</span>
                <p>{educationAndCerts.mentorship.title}</p>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">{educationAndCerts.mentorship.desc}</p>
            </div>
          </div>
        </div>

        {/* Card 5: Direct Recruiter Contact */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container justify-center">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[110px] sm:h-[160px] h-[120px] object-cover sm:object-top rounded-xl"
            />
            <div className="space-y-3">
              <div className="text-center">
                <p className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">Direct Reach</p>
                <p className="text-white font-semibold text-base">Get in touch directly</p>
              </div>

              <div className="copy-container" onClick={handleCopyEmail} title="Click to copy email">
                <img src={hasCopiedEmail ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" className="w-4 h-4" />
                <p className="text-sm font-medium text-white truncate">afiafsal6023@gmail.com</p>
              </div>

              <div className="copy-container" onClick={handleCopyPhone} title="Click to copy phone">
                <img src={hasCopiedPhone ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" className="w-4 h-4" />
                <p className="text-sm font-medium text-emerald-400 font-mono">+971 54 142 4689</p>
              </div>

              <div className="flex justify-center gap-2 pt-2 border-t border-white/10 text-xs">
                <a
                  href="https://www.linkedin.com/in/mohamed-afsal-p"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 rounded bg-black-300 hover:text-emerald-400 text-neutral-300 transition-colors">
                  LinkedIn ↗
                </a>
                <a
                  href="https://github.com/af5al"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 rounded bg-black-300 hover:text-emerald-400 text-neutral-300 transition-colors">
                  GitHub ↗
                </a>
                <a
                  href="https://wa.me/971541424689"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 rounded bg-black-300 hover:text-emerald-400 text-emerald-400 transition-colors">
                  WhatsApp ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
