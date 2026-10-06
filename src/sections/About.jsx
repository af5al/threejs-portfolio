import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopiedEmail, setHasCopiedEmail] = useState(false);
  const [hasCopiedPhone, setHasCopiedPhone] = useState(false);

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
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* Card 1: Profile Summary */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Mohamed Afsal</p>
              <p className="grid-subtext">
                Full Stack Developer with 3 years of experience building scalable, responsive web and mobile
                applications using React.js, Next.js, TypeScript, Node.js, PostgreSQL and MongoDB. Promoted to Senior
                Product Engineer at a product company, delivering ERP, HRM and multi-tenant business platforms.
                Experienced in Python and AI integration to bring intelligent features to production applications.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Tech Stack */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[240px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Technical Skills</p>
              <div className="grid-subtext space-y-2 text-sm">
                <p><span className="text-white font-medium">Frontend:</span> React.js, Next.js, TypeScript, Redux Toolkit, MobX, Tailwind CSS</p>
                <p><span className="text-white font-medium">Backend & APIs:</span> Node.js, Express.js, REST APIs, JWT / RBAC, Socket.io</p>
                <p><span className="text-white font-medium">Databases:</span> PostgreSQL, Sequelize, MongoDB, MySQL, SQLite</p>
                <p><span className="text-white font-medium">Mobile & Cloud:</span> React Native, Flutter, AWS (EC2), Docker, NGINX</p>
                <p><span className="text-white font-medium">Python & AI:</span> Python, FastAPI, Ollama, Claude API, Prompt Engineering</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Location & Availability (Dubai, UAE) */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center overflow-hidden">
              <Globe
                height={326}
                width={326}
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
              <p className="grid-headtext">Based in Dubai, UAE & Available Immediately</p>
              <p className="grid-subtext">
                Dubai, UAE resident with valid passport, available for immediate full-time employment. Highly flexible with global time zone communications and collaboration.
              </p>
              <a href="#contact" className="w-fit">
                <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
              </a>
            </div>
          </div>
        </div>

        {/* Card 4: Passion & Mentorship */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Engineering Mindset & Mentorship</p>
              <p className="grid-subtext">
                I thrive on solving complex technical challenges, engineering high-throughput shared APIs, and crafting intuitive user experiences. Beyond building enterprise products, I actively serve as a Web Development Mentor — guiding students and developers in full-stack architecture, clean code principles, and Data Structures & Algorithms.
              </p>
            </div>
          </div>
        </div>

        {/* Card 5: Direct Contact */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[110px] sm:h-[200px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-3">
              <p className="grid-subtext text-center font-medium">Get in touch directly</p>
              
              <div className="copy-container" onClick={handleCopyEmail} title="Click to copy email">
                <img src={hasCopiedEmail ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" className="w-4 h-4" />
                <p className="text-sm sm:text-base font-medium text-gray_gradient text-white truncate">
                  afiafsal6023@gmail.com
                </p>
              </div>

              <div className="copy-container" onClick={handleCopyPhone} title="Click to copy phone">
                <img src={hasCopiedPhone ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" className="w-4 h-4" />
                <p className="text-sm sm:text-base font-medium text-emerald-400">
                  +971 54 142 4689
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
