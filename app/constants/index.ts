export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "education",
		title: "Education",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Full Stack Web Developer",
		icon: "/backend.webp",
	},
	{
		title: "Frontend Developer",
		icon: "/web.webp",
	},
	{
		title: "Backend Developer",
		icon: "/mobile.webp",
	},
	{
		title: "Cloud Deployment Specialist",
		icon: "/creator.webp",
	},
];


const educations = [
  {
    title: "Bachelor of Technology in Electronics and Communication Engineering",
    institution_name: "Siddhartha Institute of Technology and Sciences",
    icon: "/institution/siddhartha-institute.webp",
    iconBg: "#383E56",
    date: "2020 - 2023",
    points: [
      "Graduated with a B.Tech in ECE, achieving a CGPA of 6.93, with a focus on electronics, communication systems, and software integration.",
      "Developed projects leveraging programming skills in JavaScript and Python, bridging electronics and web development.",
      "Participated in technical workshops and coding events, enhancing problem-solving and software development skills.",
      "Gained foundational knowledge in web technologies, contributing to proficiency in MERN stack development."
    ]
  },
  {
    title: "Diploma in Electronics and Communication Engineering",
    institution_name: "Siddhartha Institute of Technology and Sciences",
    icon: "/institution/siddhartha-institute.webp",
    iconBg: "#E6DEDD",
    date: "2015 - 2019",
    points: [
      "Completed a Diploma in ECE, building a strong foundation in electronics, circuit design, and communication systems.",
      "Developed early programming skills through coursework, including C and basic web development with HTML and CSS.",
      "Engaged in practical projects and tech symposiums, fostering analytical and technical problem-solving abilities."
    ]
  }
];

const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/html.png",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.png",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.png",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.png",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.png",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.png",
	},
	{
		name: "Redux Toolkit",
		icon: "/tech/redux.png",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
  {
    name: "Node.js",
    icon: "/tech/nodejs.webp", 
  },
  {
    name: "Express.js",
    icon: "/tech/express.webp",
  },
	{
		name: "git",
		icon: "/tech/git.webp",
	},
  {
    name: "MongoDB",
    icon: "/tech/mongodb.webp",
  },
	{
		name: "bootstrap",
		icon: "/tech/bootstrap.webp",
	},
];

const experiences = [
{
title: "SDE - 1",
company_name: "Salaah Shots",
icon: "/company/salaahshots.png",
iconBg: "#383E56",
date: "2025/09 - Present",
points: [
"Developed scalable LMS and mentorship web applications using React.js, Vue.js, MUI, and SCSS.",
"Built secure RESTful APIs with Node.js, Express.js, and MongoDB for core platform features.",
"Implemented JWT-based authentication and role-based access control.",
"Optimized application performance, ensured responsive UI, and followed Agile and CI/CD workflows."
],
},
{
title: "Junior Software Engineer",
company_name: "Klariti Learning",
icon: "/company/klarity.webp",
iconBg: "#383E56",
date: "2025/03 - 2025/08",
points: [
"Developed scalable, SEO-optimized web applications using React.js, Next.js, and Tailwind CSS.",
"Built secure REST APIs with Node.js, Express.js, and MongoDB.",
"Implemented Server-Side Rendering (SSR) and Static Site Generation (SSG) to improve performance and SEO.",
"Applied JWT-based authentication and followed Agile and CI/CD development workflows."
],
},
];

const testimonials = [
	{
		id: 1,
		testimonial:
			"Check out my GitHub profile where I share my coding projects, ranging from foundational to advanced development work.",
		name: "PraveenKumar22C",
		image: "/tech/github.webp",
		link: "https://github.com/PraveenKumar22C",
	},
	{
		id: 2,
		testimonial:
			"Connect with me on LinkedIn to explore my professional journey and contributions as a software developer.",
		name: "praveengangula",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/praveengangula",
	},
];

const projects: {
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link?: string;
  deploy_link: string;
  platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web";
}[] = [
{
  name: "Medical Mentorship Platform – Salaah Shots",
  description:
    "A doctor-to-doctor mentorship and career guidance platform built for medical students and professionals. Features 1:1 mentor matching, session booking, personalized career pathways, progress tracking dashboards, webinar management, and scalable analytics for NEET-PG, INICET, UPSC CMS, USMLE, PLAB, and other medical career tracks.", // Based on platform capabilities and mentorship focus :contentReference[oaicite:0]{index=0}
  tags: [
    { name: "next", color: "blue-text-gradient" },
    { name: "nodejs", color: "green-text-gradient" },
    { name: "mongodb", color: "pink-text-gradient" },
    { name: "tailwind", color: "orange-text-gradient" },
  ],
  image: "/projectimg/salaahshots.png",
  platform: "Web",
  deploy_link: "https://salaahshots.com",
},  {
    name: "Advanced LMS – Klariti Learning",
    description:
      "A scalable, interactive LMS platform for children, educators, and admins with SSR/SSG using Next.js, deployed on GCP. Includes dashboards, live monitoring, role-based access, and JWT-based secure login.",
    tags: [
      { name: "next", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
      { name: "tailwind", color: "orange-text-gradient" },
    ],
    image: "/projectimg/klarity-lms.png",
    platform: "Web",
    deploy_link: "https://www.klaritilearning.com",
  },
  {
    name: "Horizon – Financial SaaS Platform",
    description:
      "A banking app integrating Plaid & Dwolla for multi-account tracking and fund transfers. Built with SSR in Next.js and secured with Appwrite auth. Features real-time charts, category filters, and responsive UI.",
    tags: [
      { name: "next", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "shadcn", color: "orange-text-gradient" },
    ],
    image: "/projectimg/horizon.png",
    source_code_link: "https://github.com/PraveenKumar22C/banking", 
    platform: "Vercel",
    deploy_link: "https://horizon-banking-lemon.vercel.app",
  },
  {
    name: "MERN Chat App",
    description:
      "A real-time chat app built with MERN stack and Socket.IO. Features include secure login, media uploads via Cloudinary, and Redux-based global state management for seamless chat experience.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "express", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
      { name: "socket.io", color: "orange-text-gradient" },
    ],
    image: "/projectimg/chat.jpeg",
    source_code_link: "https://github.com/PraveenKumar22C/Chat-app-mern", 
    platform: "Web",
    deploy_link: "https://chat-app-mern-wh3t.onrender.com",
  },
  {
    name: "Touch UI – Social Media Platform",
    description:
      "Instagram-like app for posting photos, reels, and videos with like/comment features. Built using React, Redux Toolkit, and REST APIs. Fully responsive design with clean CSS/Bootstrap layout.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "redux-toolkit", color: "green-text-gradient" },
      { name: "bootstrap", color: "pink-text-gradient" },
      { name: "axios", color: "orange-text-gradient" },
    ],
    image: "/projectimg/touchUi.png",
    source_code_link: "https://github.com/PraveenKumar22C/Touch-UI", 
    platform: "Vercel",
    deploy_link: "https://touch-ui.vercel.app/",
  },
  {
    name: "Virtual Deal Room – Secure Business Transactions Platform",
    description:
      "A secure, real-time platform for business negotiations and document sharing between buyers and sellers. Built with Next.js, TypeScript, Redis, Socket.IO, and MongoDB. Features include deal creation, messaging, document uploads, access control, live notifications, and analytics dashboard. Deployed on Google Cloud Run with responsive UI using Tailwind CSS.",
    tags: [
      { name: "next", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "redis", color: "pink-text-gradient" },
      { name: "tailwind", color: "orange-text-gradient" },
    ],
    image: "/projectimg/virtualRoom.jpeg", 
    source_code_link: "https://github.com/PraveenKumar22C/virtual-deal-room",
    platform: "Vercel",
    deploy_link: "https://virtual-deal-room-9ouy.vercel.app/",
  },
];


export { services, technologies, experiences, testimonials, projects, educations };
