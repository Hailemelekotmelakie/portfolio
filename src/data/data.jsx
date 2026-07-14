// Central content store - edit here to update copy without touching component markup.

export const profile = {
  name: "Hailemelekot Melakie",
  initials: "HM",
  status: "AVAILABLE IMMEDIATELY - BAHIR DAR, ETHIOPIA",
  lede: "Software Engineer who architected and shipped a production Air Traffic Management system - real-time tracking, live data streams, zero room for error. 3+ years building scalable web apps with modern framworks.",
  email: "HailemelekotMelakie1991@gmail.com",
  phone: "+251 947 053 537",
  phoneHref: "+251947053537",
  location: "Bahir Dar, Amhara Region, Ethiopia",
  linkedin: "https://linkedin.com/in/hailemelekot12",
  linkedinLabel: "linkedin.com/in/hailemelekot12",
};

export const roles = [
  "Frontend developer",
  "Backend developer",
  "Mobile App developer",
  "Full-Stack Developer",
  "Real-Time Systems Builder",
];

export const radarBlips = [
  { label: "React", top: "18%", left: "62%", variant: "" },
  { label: "Node", top: "32%", left: "22%", variant: "amber" },
  { label: "Next", top: "50%", left: "12%", variant: "cyan" },
  { label: "FastApi", top: "30%", left: "82%", variant: "amber" },
  { label: "Socket.io", top: "52%", left: "80%", variant: "cyan" },
  { label: "Redux.js", top: "70%", left: "30%", variant: "" },
  { label: "WebSocket", top: "78%", left: "64%", variant: "amber" },
  { label: "Mantine", top: "12%", left: "32%", variant: "cyan" },
];

export const summary = [
  <>
    Results-driven Software Engineer with <strong>3+ years</strong> of
    professional experience building scalable web applications and
    mission-critical systems using modern JavaScript frameworks.
  </>,
  <>
    Successfully led and delivered a fully completed{" "}
    <strong>Air Traffic Management software system</strong> - proven expertise
    in React.js, Node.js, Mantine.dev, Tailwind CSS, and real-time communication
    technologies like Socket.io and WebSocket.
  </>,
  <>
    Adept at both front-end and back-end development, with a strong Computer
    Science foundation from Debre Tabor University.
  </>,
];

export const experience = [
  {
    dateRange: "JAN 2024 - JUL 2026",
    badges: ["2yr 8mo", "Remote"],
    role: "Software Developer",
    company: "Tern Systems - Iceland",
    bullets: [
      "Architected and delivered a fully functional, production-ready Air Traffic Management (ATM) system - a mission-critical platform handling real-time data, live tracking and operational workflows.",
      "Built interactive UI components and dashboards using React.js and the Mantine.dev component library for rapid, responsive design.",
      "Implemented real-time data streams and live updates using Socket.io and WebSocket, critical for live air traffic monitoring.",
      "Managed complex application state with Redux.js across multi-module enterprise workflows.",
      "Collaborated in a fully remote engineering team following agile practices, code reviews and CI/CD pipelines.",
    ],
    eduNote: null,
  },
  {
    dateRange: "DEC 2022 - JAN 2024",
    badges: ["1yr 2mo", "On-site"],
    role: "Web Developer",
    company: "Ethioden ICT Consultancy PLC - Ethiopia",
    bullets: [
      "Built and maintained client-facing web applications using JavaScript, Redux and modern front-end frameworks.",
      "Developed back-end services and REST APIs supporting core business logic and data management.",
      "Implemented responsive UI components ensuring cross-browser compatibility and accessibility standards.",
      "Contributed across the full development cycle - from requirements gathering through deployment and maintenance.",
    ],
    eduNote: {
      degree: "BSc Computer Science",
      rest: " - Debre Tabor University - Sep 2018 - Sep 2022",
    },
  },
];

export const projects = [
  {
    title: "Air Traffic Management System",
    sub: "Tern Systems - Mission-critical / Real-time",
    status: "Deployed",
    featured: true,
    image: "./projects/Nexus_screenshot.png",
    desc: "End-to-end architecture and delivery of a production-ready ATM platform - live aircraft tracking, real-time data streams and operational workflow management, built for a domain where latency and accuracy aren't optional.",
    tags: [
      "React.js",
      "Mantine.dev",
      "Redux.js",
      "Socket.io",
      "WebSocket",
      "Real-time Systems",
      "FastApi",
    ],
  },
  {
    title: "Client Web Applications",
    sub: "Ethioden ICT Consultancy PLC - Full-cycle delivery",
    status: "Shipped",
    featured: false,
    image: "./projects/Node_finance.png",
    desc: "A suite of client-facing web applications spanning front-end interfaces and back-end REST services, taken from requirements through deployment with a focus on cross-browser reliability and accessibility.",
    tags: [
      "JavaScript",
      "React.js/ts",
      "Next.js/ts",
      "Redux",
      "React Native",
      "Expo",
      "Node.js/ts",
      "REST APIs",
      "Responsive Design",
    ],
  },
];

export const skillGroups = [
  {
    title: "Front-End",
    items: [
      "React.js/ts",
      "Next.js/ts",
      "TypeScript",
      "React Native",
      "JavaScript (ES6)",
      "Redux.js",
      "Mantine.dev",
      "Tailwind CSS",
      "CSS",
      "Responsive design",
    ],
  },
  {
    title: "Back-End",
    items: ["Node.js/ts", "FastApi", "REST APIs", "Web Applications"],
  },
  {
    title: "Real-Time",
    items: ["Socket.io", "WebSocket", "Event-driven Systems"],
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];
