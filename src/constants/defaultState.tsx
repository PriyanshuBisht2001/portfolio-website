import EmailLogo from "@/assets/EmailIcon.svg";
import ExperienceLogo from "@/assets/Experience.svg";
import LocationIcon from "@/assets/LocationIcon.svg";
import PhoneLogo from "@/assets/PhoneLogo.svg";

export const profileWidgetDetails = [
  {
    id: 1,
    label: "EMAIL",
    value: "priyanshubisht159@gmail.com",
    icon: EmailLogo,
  },
  {
    id: 2,
    label: "PHONE NUMBER",
    value: "+91 7217617151",
    icon: PhoneLogo,
  },
  {
    id: 3,
    label: "TOTAL EXPERIENCE",
    value: "1 Years 10 Months",
    icon: ExperienceLogo,
  },
  {
    id: 4,
    label: "LOCATION",
    value: "Ghaziabad, UP",
    icon: LocationIcon,
  },
];

export const navbarPaths = [
  {
    id: 1,
    label: "About",
    href: "/",
  },
  {
    id: 2,
    label: "Resume",
    href: "/resume",
  },
  {
    id: 3,
    label: "Projects",
    href: "/project",
  },
  {
    id: 4,
    label: "Contact",
    href: "/contact",
  },
];

export const whatIamDoing = [
  {
    id: 1,
    title: "Frontend Development Expertise",
    description:
      "Proficient in React.js, Next.js, and TypeScript, creating responsive, high-performance web and mobile interfaces with clean, scalable code and modern UI frameworks like Tailwind CSS and Material UI.",
  },
  {
    id: 2,
    title: "Full-Stack Project Experience",
    description:
      "Hands-on experience with both frontend and backend development using Node.js, Firebase, and MongoDB, contributing to live projects such as Nutritt (health app) and HexaHome (real estate platform).",
  },
  {
    id: 3,
    title: "Performance & Cloud Optimization",
    description:
      "Improved web app performance and scalability using Docker and AWS (S3, CloudFront, ECS, ECR) — achieving significant boosts in PageSpeed scores and deployment efficiency.",
  },
  {
    id: 4,
    title: "Achievement-Driven and Collaborative",
    description:
      "Awarded Employee of the Month and University Rank 1, recognized for teamwork, attention to detail, and proactive learning — staying updated with the latest in frontend technologies and best practices.",
  },
];

export const experience = [
  {
    id: 1,
    title: "Hexadecimal Software Pvt. Ltd.",
    subTitle: "13 Feb 2023 - 30 Nov 2024",
    description:
      "Working as a Full Stack Developer, contributing to both frontend and backend development of web applications. Key projects include Nutritt, a health and nutrition app, and HexaHome, a real estate platform. Responsibilities encompass building responsive user interfaces, optimizing application performance, and collaborating with cross-functional teams to deliver high-quality software solutions.",
  },
];

export const experienceTimeline = [
  {
    title: "Software Designer",
    subtitle: "Hexadecimal Software Pvt. Ltd.",
    startDate: "13 Feb 2023",
    endDate: "30 Nov 2024",
    description:
      "Working as a Software Developer, contributing to both frontend and backend development of web applications. Key projects include Nutritt, a health and nutrition app, and HexaHome, a real estate platform. Responsibilities encompass building responsive user interfaces, optimizing application performance, and collaborating with cross-functional teams to deliver high-quality software solutions.",
  },
];

export const educationTimeline = [
  {
    title: "Guru Gobind Singh Indraprastha University",
    startDate: "2019",
    endDate: "2020",
    description:
      "I earned a BBA in Computer Aided Management with a 85.841% from Ideal Institute Management and Technology (2016–2020), gaining expertise in management, programming and software development.",
  },
  {
    title: "Kendriya Vidyalaya NFC Vigyan Vihar",
    startDate: "2018",
    endDate: "2019",
    description:
      "I completed my Senior Secondary Education from Kendriya Vidyalaya NFC Vigyan Vihar in 2018-2019, securing 77.81% and building a solid academic foundation.",
  },
];

export const ProjectList = [{
  "id": "1",
  "name": "Dice Game",
  "heroImage": "https://res.cloudinary.com/db7qny8pw/image/upload/v1751523609/projects/mul5hinqncvfikpzmcus.png",
},{
  "id": "2",
  "name": "Weather App",
  "heroImage": "https://res.cloudinary.com/db7qny8pw/image/upload/v1751523609/projects/mul5hinqncvfikpzmcus.png",
},{
  "id": "3",
  "name": "E-commerce Website",
  "heroImage": "https://res.cloudinary.com/db7qny8pw/image/upload/v1751523609/projects/mul5hinqncvfikpzmcus.png",
}
]

export const Project = {
  "id": "1",
  "name": "Dice Game",
  "heroImage": "https://res.cloudinary.com/db7qny8pw/image/upload/v1751523609/projects/mul5hinqncvfikpzmcus.png",
  "overview": "This dashboard is designed for an internal HR management system, helping teams visualize employee activities, onboarding progress, and productivity metricsâ€”all in one unified view.",
  "challenge": "To create a data-heavy interface that remains user-friendly, visually engaging, and easy to scan. The goal was to present complex HR information in a structured, digestible way without overwhelming the user.",
  "photos": [
    "https://res.cloudinary.com/db7qny8pw/image/upload/v1751523613/projects/u3ntfysa6f57vr10obmg.png",
    "https://res.cloudinary.com/db7qny8pw/image/upload/v1751523616/projects/kc6d6hhklz95nin9e8ux.png",
    "https://res.cloudinary.com/db7qny8pw/image/upload/v1751523620/projects/lsfscyghxi176jaty2ah.png"
  ],
  "details": [
    "User Info Card: Displays employee profile, role, and key device details.",
    "Work Progress Tracker: Bar graph showing average daily work hours.",
    "Work Hour Goal: Circular tracker for remaining hours in a workday.",
    "Onboarding Status: Progress breakdown with completion status of 8 onboarding tasks.",
    "Team Calendar: Weekly schedule with clear time slots for team meetings and onboarding sessions.",
    "Top Metrics Display: Real-time overview of employees, hires, and total projects."
  ],
  "url": "https://www.figma.com/design/Z3Ht53nZUdv0LZgUbqHP5s/Dashboard-Practices?node-id=0-1&t=htH4nIIQUUIsD3zo-1",
}