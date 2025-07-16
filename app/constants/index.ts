export const navLinks = [
	{
		id: "about",
		title: "About",
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

const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Redux Toolkit",
		icon: "/tech/redux.webp",
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
		title: "Junior Software Engineer",
		company_name: "Klarity Learning",
		icon: "/company/klarity.webp",
		iconBg: "#383E56",
		date: "2024 - Present",
		points: [
			"Developing scalable, AI-powered web applications using the MERN stack, focusing on interactive learning experiences for children.",
			"Building fast, SEO-friendly, and responsive user interfaces with React.js and Next.js, incorporating server-side rendering (SSR) and static site generation (SSG).",
			"Creating secure REST APIs with Node.js and Express.js, integrating JWT and bcrypt for authentication and authorization.",
			"Optimizing data storage and management using MongoDB and Mongoose, ensuring high performance and scalability.",
			"Collaborating in Agile development environments, utilizing Git, GitHub, and CI/CD tools for version control and deployment."
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


export { services, technologies, experiences, testimonials, projects };
