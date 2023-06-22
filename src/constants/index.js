import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  view
} from "../assets";

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blockchain Developer",
    icon: mobile,
  },
  {
    title: "Desktop Application Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Front-end Developer",
    company_name: "Uconnect",
    icon: starbucks,
    iconBg: "#383E56",
    date: "November 2019 - June 2020",
    points: [
      "Developed user interfaces (UI) based on design mockups and wireframes, utilizing HTML, CSS, and JavaScript/jQuery.",
      "Created responsive websites, ensuring optimal user experience across devices and screen sizes.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Ensured cross-browser compatibility by testing and debugging websites on various browsers",
    ],
  },
  {
    title: "React And Blockchain Developer",
    company_name: "Design Bytes International",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Jan 2022",
    points: [
      "React: Utilized React framework to build interactive and dynamic user interfaces, enabling efficient component-based development.",
      "Blockchain Development: Applied blockchain technology to develop decentralized applications (DApps) and smart contracts using frameworks like Ethereum or Hyperledger.",
      "Web3 Integration: Integrated Web3 libraries (such as Web3.js) with React applications to interact with blockchain networks and smart contracts.",
      "State Management: Leveraged React state management libraries like Redux or Context API to handle complex application states in blockchain development.",
      "Smart Contract Development: Developed and deployed smart contracts using Solidity or other blockchain-specific languages, enabling secure and trustless transactions.",
      "Blockchain API Integration: Integrated blockchain APIs (such as Ethereum API) with React applications to retrieve blockchain data and interact with smart contracts."
    ],
  },
  {
    title: "Ux/Ui Designer And Website Developer",
    company_name: "Upwork & Fiverr",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "UX Design: Creating user-centered designs through research, wireframing, and user flows.",
      "UI Design: Developing visually appealing interfaces that align with brand identity and usability standards.",
      "Website Development: Translating design concepts into functional websites using HTML, CSS, and JavaScript.",
      "Client Collaboration: Communicating with clients, providing recommendations, and delivering high-quality work within deadlines.",
    ],
  },
  {
    title: "Full stack And Desktop Application Developer",
    company_name: "Arbob Tech Team",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Full Stack Development: Expertise in both front-end and back-end development for native desktop applications.",
      "Desktop Application Development: Building robust and user-friendly desktop applications using frameworks like Electron, PyQt, or JavaFX.",
      "UI Design: Creating intuitive and visually appealing interfaces for desktop applications.",
      "Cross-Platform Compatibility: Ensuring desktop applications work seamlessly across multiple operating systems (Windows, macOS, Linux).",
      "Testing and Debugging: Conducting thorough testing and debugging to ensure functionality, performance, and security standards are met."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const projects = [
  {
    name: "NFT Website",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "web3.js",
        color: "green-text-gradient",
      },
      {
        name: "stylescomponent",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://nft-minting-website-gold.vercel.app/",
  },
  {
    name: "Endless Domains",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "web3.js",
        color: "green-text-gradient",
      },
      {
        name: "styledcomponent",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://market-place-pink.vercel.app/",
  },
  {
    name: "HOM Website",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://hom-website.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
