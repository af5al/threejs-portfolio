export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Projects',
    href: '#projects',
  },
  {
    id: 4,
    name: 'Experience',
    href: '#work',
  },
  {
    id: 5,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [];


export const technicalSkills = [
  {
    category: 'AI & Python',
    skills: [
      'Python (Pandas, NumPy, scikit-learn)',
      'Generative AI / LLM API Integration',
      'Claude API & Prompt Engineering',
      'Agentic Workflows (learning)',
      'Recommendation Systems (Cosine Similarity)',
      'Ollama & Local LLMs (Llama 3.2, Qwen 2.5)',
      'FastAPI & Streamlit',
    ],
  },
  {
    category: 'Full Stack & Frontend',
    skills: [
      'React.js & Next.js',
      'TypeScript & JavaScript (ES6+)',
      'Node.js & Express.js',
      'REST APIs & WebSockets (Socket.io)',
      'Redux Toolkit & MobX',
      'Tailwind CSS & Responsive UI',
      'JWT Auth & Role-Based Access Control (RBAC)',
    ],
  },
  {
    category: 'Databases',
    skills: [
      'PostgreSQL & Sequelize',
      'MongoDB & Mongoose',
      'MySQL',
      'SQLite (Atomic transactions & indexing)',
    ],
  },
  {
    category: 'Mobile & Cross-Platform',
    skills: [
      'React Native (Expo)',
      'Flutter & Dart',
    ],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      'AWS (EC2)',
      'Docker & Containerization',
      'NGINX Reverse Proxy',
      'Git, GitHub & CI/CD Workflows',
      'Vercel & Cloud Deployment',
    ],
  },
];

export const educationAndCerts = {
  education: {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Calicut University, Kerala',
    period: '2020 – 2023',
  },
  certifications: ['HTML, CSS, JavaScript', 'MySQL'],
  mentorship: {
    title: 'Web Development Mentor',
    desc: 'Guided students and professionals in modern full-stack web development (React, Node.js, modern databases) and Data Structures & Algorithms (DSA).',
  },
};

export const myProjects = [
  {
    title: 'AI Expense Tracker — React Native & Generative AI',
    desc: 'Cross-platform mobile and web expense tracker built with React Native (Expo) and TypeScript, integrating generative AI to analyse spending patterns and deliver automated financial insights.',
    subdesc:
      'Engineered smart expense categorization, intelligent budget alerts, conversational financial summaries with Generative AI APIs, and responsive cross-platform layout deployed on Vercel and accessible on mobile devices.',
    gitHref: 'https://github.com/af5al/ai-expense-tracker',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#0F291E',
      border: '0.2px solid #1B4D38',
      boxShadow: '0px 0px 60px 0px #10B9814D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React Native',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Expo',
        path: '/assets/js-icon.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Generative AI',
        path: '/assets/python.svg',
      },
    ],
  },
  {
    title: 'Local AI Assistant — Private LLM Chat & Benchmarking',
    desc: 'A private, offline AI assistant that runs open-source LLMs locally with Ollama (Llama 3.2, Qwen 2.5), using a Python / FastAPI backend and a React chat interface.',
    subdesc:
      'Developing an automated benchmark to compare local LLMs on generation speed (tokens/sec), memory usage, answer accuracy, and structured JSON-output reliability on a CPU-only laptop with zero external data transmission.',
    gitHref: 'https://github.com/af5al/local-ai-assistant',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#1C1A35',
      border: '0.2px solid #2B2556',
      boxShadow: '0px 0px 60px 0px #6343994D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python.svg',
      },
      {
        id: 2,
        name: 'FastAPI',
        path: '/assets/fastapi.svg',
      },
      {
        id: 3,
        name: 'React.js',
        path: '/assets/react.svg',
      },
    ],
  },
  {
    title: 'Movie Recommender System — Machine Learning · Python',
    desc: 'Content-based movie recommendation engine built over ~5,000 IMDb movies that returns the 5 most similar titles for any searched movie.',
    subdesc:
      'Processed movie metadata, cast, and crew into tag vectors using a bag-of-words NLP model and ranked similarity with cosine similarity matrices using scikit-learn and Pandas; served through an interactive Streamlit web app.',
    gitHref: 'https://github.com/af5al/movie-recommendor-system',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#20161E',
      border: '0.2px solid #351C2C',
      boxShadow: '0px 0px 60px 0px #85225E4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python.svg',
      },
      {
        id: 2,
        name: 'Streamlit',
        path: '/assets/streamlit.svg',
      },
    ],
  },
  {
    title: 'Smart POS — Offline-First Point of Sale App',
    desc: 'Architected an offline-first POS and inventory mobile application in Flutter/Dart with SQLite for reliable financial operations.',
    subdesc:
      'Engineered with integer-cents arithmetic to avoid floating-point errors, atomic database transactions, foreign keys, indexing, Bluetooth ESC/POS receipt printing, bulk Excel import with validation, comprehensive PDF reports, and JSON backup/restore.',
    gitHref: 'https://github.com/af5al/smart-pos-app',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #142E54',
      boxShadow: '0px 0px 60px 0px #1E4E8C4D',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Flutter',
        path: '/assets/flutter.svg',
      },
      {
        id: 2,
        name: 'Dart',
        path: '/assets/dart.svg',
      },
      {
        id: 3,
        name: 'SQLite',
        path: '/assets/sqlite.svg',
      },
    ],
  },
  {
    title: 'EventSphere — Social & Job Recruitment Platform',
    desc: 'Full-stack MERN platform connecting users with event management companies, featuring job recruitment and real-time communication.',
    subdesc:
      'Engineered JWT role-based auth (RBAC), real-time chat and video calls (Socket.io, ZegoCloud), file uploads (Multer), PayPal transactions, and automated plan expirations. Containerized with Docker and deployed on AWS EC2 with NGINX.',
    gitHref: 'https://github.com/af5al/EventSphere',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Redux',
        path: '/assets/redux-icon.png',
      },
      {
        id: 4,
        name: 'Express js',
        path: '/assets/express-icon.png',
      },
      {
        id: 5,
        name: 'Mongo db',
        path: '/assets/mongo-icon.png',
      },
      {
        id: 6,
        name: 'Docker',
        path: '/assets/docker.svg',
      },
      {
        id: 7,
        name: 'AWS',
        path: '/assets/aws.svg',
      },
    ],
  },
  {
    title: 'Elegant Seats — E-Commerce Web Application',
    desc: 'A full-featured furniture and seating shopping platform built on the MVC pattern with robust RESTful APIs and secure payment integrations.',
    subdesc:
      'Implemented session-based authentication, password encryption (Bcrypt), dynamic shopping cart with coupon support, optimized search and filter features, and Razorpay gateway. Deployed on Render.',
    gitHref: 'https://github.com/af5al/Elegant-seats',
    liveHref: 'https://elegantseats-shop.onrender.com/',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Javascript',
        path: '/assets/js-icon.png',
      },
      {
        id: 2,
        name: 'Bootstrap',
        path: '/assets/bootstrap-icon.png',
      },
      {
        id: 3,
        name: 'Express js',
        path: '/assets/express-icon.png',
      },
      {
        id: 4,
        name: 'Mongo db',
        path: '/assets/mongo-icon.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.048 : isMobile ? 0.055 : 0.062,
    deskPosition: isMobile ? [0.5, -5.2, 0] : [0.25, -7.2, 0],
    cubePosition: isSmall ? [3, -6.2, 0] : isMobile ? [4.2, -6.2, 0] : isTablet ? [6, -6.2, 0] : [8.5, -6.8, 0],
    reactLogoPosition: isSmall ? [2.8, -3.2, 0] : isMobile ? [4, -3.2, 0] : isTablet ? [6, -3.2, 0] : [8.5, -3.8, 0],
    ringPosition: isSmall ? [-2.8, -3.2, 0] : isMobile ? [-4, -3.2, 0] : isTablet ? [-6, -3.2, 0] : [-8.5, -3.8, 0],
    targetPosition: isSmall ? [-3, -6.2, -3] : isMobile ? [-4.2, -6.2, -3] : isTablet ? [-6, -6.2, -3] : [-8.5, -6.8, -3],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'CODINOZ TECHNOLOGIES',
    location: 'Kerala, India · Product Company',
    pos: 'Full Stack Developer',
    duration: 'April 2024 – Present',
    type: 'Full-Time · Product Company',
    title:
      'Built and maintained scalable ERP, HRM and restaurant-management platforms using React.js, Node.js, TypeScript, PostgreSQL and Sequelize across multiple product lines.',
    bullets: [
      'Built and maintained scalable ERP, HRM and restaurant-management platforms using React.js, Node.js, TypeScript, PostgreSQL and Sequelize across multiple product lines.',
      'Designed shared REST APIs consumed by multiple business applications, improving maintainability and reducing backend duplication.',
      'Integrated AI capabilities into a Python server to handle high-volume data processing for the ERP platform.',
      'Implemented advanced ERP features such as filtering on large data tables and bulk data import into the application.',
      'Implemented role-based authentication (JWT / RBAC), modular state management (Redux, MobX) and responsive TypeScript UI components.',
      'Extended an existing web platform to mobile with React Native, delivering cross-platform access for business users.',
      'Conducted code reviews, production debugging, and Git/GitHub workflows in an Agile team.',
    ],
    skills: ['React.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Sequelize', 'Python AI', 'React Native', 'Redux', 'MobX', 'JWT / RBAC'],
    icon: '/assets/codinoz-logo.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'BROTOTYPE',
    location: 'Calicut, Kerala',
    pos: 'Full Stack Developer (Internship)',
    duration: 'January 2023 – April 2024',
    type: 'Internship · Intensive Engineering',
    title:
      'Built two end-to-end MERN applications: a social media / job-recruitment platform and a modular e-commerce system with PayPal and Razorpay integrations.',
    bullets: [
      'Built two end-to-end MERN applications: a social media / job-recruitment platform and a modular e-commerce system with PayPal and Razorpay integrations.',
      'Implemented JWT authentication, REST APIs and real-time Socket.io features; deployed on AWS EC2 with Docker and NGINX.',
      'Mastered Data Structures & Algorithms, Clean Architecture, and Agile engineering workflows.',
    ],
    skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'JWT Auth', 'Docker', 'AWS EC2', 'NGINX'],
    icon: '/assets/broto-logo.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Web Development Mentorship',
    location: 'Remote / Community',
    pos: 'Web Development & DSA Mentor',
    duration: '2024 – Present',
    type: 'Mentorship & Leadership',
    title:
      'Guided students and professionals in full-stack development and Data Structures & Algorithms (DSA).',
    bullets: [
      'Mentored students and junior developers in full-stack engineering (React, Next.js, Node.js, TypeScript, modern databases).',
      'Coached on Data Structures & Algorithms (DSA), clean architecture, performance optimization, and problem solving.',
      'Provided in-depth code reviews and architectural guidance to ensure industry-standard software practices.',
    ],
    skills: ['Full Stack Architecture', 'DSA & Algorithms', 'Code Reviews', 'Technical Mentorship'],
    icon: '/assets/react.svg',
    animation: 'salute',
  },
];
