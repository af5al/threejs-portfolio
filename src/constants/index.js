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
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'EventSphere - Social & Job Recruitment Platform',
    desc: 'Full-stack MERN platform connecting users with event management companies, featuring job recruitment and real-time communication.',
    subdesc:
      'Engineered JWT role-based auth, real-time chat and video calls (Socket.io, ZegoCloud), file uploads (Multer), PayPal transactions, and automated plan expirations. Containerized with Docker and deployed on AWS EC2 with NGINX for high reliability.',
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
    title: 'Smart POS - Offline-First Point of Sale App',
    desc: 'Architected an offline-first POS and inventory mobile application in Flutter and Dart with SQLite for reliable financial operations.',
    subdesc:
      'Used integer-cents arithmetic to avoid floating-point errors, integrated Bluetooth ESC/POS receipt printing, bulk Excel import with validation, comprehensive PDF reports, and JSON backup/restore.',
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
    title: 'Local AI Assistant - Private LLM Chat (In Progress)',
    desc: 'A private, offline AI assistant that runs open-source LLMs locally with Ollama, featuring streaming responses and zero data leakage.',
    subdesc:
      'Built with a high-performance Python / FastAPI backend paired with a modern React chat interface. Supports local model switching, markdown/code rendering, conversation memory, and complete local data privacy.',
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
    title: 'Movie Recommender System - Machine Learning',
    desc: 'Content-based movie recommendation engine built over ~5,000 IMDb titles that suggests the top 5 most similar movies for any query.',
    subdesc:
      'Engineered NLP bag-of-words tag vectors and computed cosine similarity matrices using scikit-learn and Pandas. Packaged and deployed via an interactive Streamlit application.',
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
    title: 'Elegant Seats - E-Commerce Web Application',
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
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Codinoz Technologies (Product Company)',
    pos: 'Senior Product Engineer | Promoted from Full Stack Developer',
    duration: 'April 2024 - Present',
    title:
      'Promoted to Senior Product Engineer, driving architecture and performance across the ERP, HRM, and multi-tenant platforms. Optimized application performance and reduced load times across data-heavy tables. Integrated AI capabilities via a dedicated Python server to accelerate high-volume data processing. Built shared REST APIs consumed across multiple business apps, implemented JWT/RBAC role-based security, Redux/MobX state management, and expanded web platforms to mobile using React Native.',
    icon: '/assets/codinoz-logo.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Brototype',
    pos: 'Full Stack Developer (Internship)',
    duration: 'January 2023 - April 2024',
    title:
      'Engineered two end-to-end MERN stack production applications: a social recruitment platform and an e-commerce platform with PayPal and Razorpay payment gateways. Built RESTful APIs, JWT authentication, and real-time Socket.io features; containerized with Docker and deployed on AWS EC2 with NGINX. Mastered Data Structures & Algorithms, Clean Architecture, and Agile engineering workflows.',
    icon: '/assets/broto-logo.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Web Development Mentorship',
    pos: 'Technical Mentor & Code Reviewer',
    duration: '2024 - Present',
    title:
      'Mentored students and aspiring professionals in full-stack web development (React, Next.js, Node.js, modern databases) and Data Structures & Algorithms (DSA), conducting technical code reviews and architectural guidance.',
    icon: '/assets/react.svg',
    animation: 'salute',
  },
];
