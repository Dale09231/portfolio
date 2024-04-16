const PortfolioOne = require("../../../assets/images/project1.png");
const PortfolioTwo = require("../../../assets/images/project2.png");
const PortfolioThree = require("../../../assets/images/portfolio-3.png");
const PortfolioFour = require("../../../assets/images/portfolio-4.png");
const PortfolioFive = require("../../../assets/images/portfolio-5.png");
const PortfolioSix = require("../../../assets/images/project6.png");
const PortfolioSeven = require("../../../assets/images/project7.png");
const PortfolioEight = require("../../../assets/images/project8.png");
const PortfolioNine = require("../../../assets/images/project9.png");
const PortfolioTen = require("../../../assets/images/project10.png");
const PortfolioEleven = require("../../../assets/images/project11.png");
const PortfolioTwelve = require("../../../assets/images/project12.png");
const PortfolioThirteen = require("../../../assets/images/project13.png");
const portfolioData = [
  {
    id: 1,
    title: "Lineicons",
    image: PortfolioOne,
    description:
      "Handcrafted UI icons for modern user interfaces of web, mobile, and desktop app design and development projects. Lineicons is a huge and comprehensive pack of professionally designed icons, available in all vector formats that are easy to use on the web, design, coding, and beyond.",
    tags: [
      "React",
      "Context API",
      "Tailwind",
      "Firebase",
      "NodeJS",
      "SSLCOMMERZ",
    ],
    type: ["Full Stack", "Front End", "Others"],
    websiteLink: "https://lineicons.com/",
  },
  {
    id: 2,
    title: "Pulsetic",
    image: PortfolioTwo,
    description:
      "Get website downtime alerts by phone call, SMS, email or Slack if your website is down. Create beautiful status pages & incident management reports and keep your visitors updated.",
    tags: ["React", "Redux", "Tailwind", "Express", "MongoDB", "Mongoose"],
    type: ["Front End", "Others"],
    websiteLink: "https://pulsetic.com/",
  },
  {
    id: 3,
    title: "Smart Dhopa",
    image: PortfolioThree,
    description:
      "This is an Online Laundry Platform web Application for E-commerce business and Manage order and Authentication with firebase. User can buy listed services by logging into it with shopping cart functionality",
    tags: [
      "React",
      "Express",
      "MongoDB",
      "Firebase",
      "NodeJS",
      "Material UI",
      "Reactstrap",
    ],
    type: ["Full Stack", "Front End", "Others"],
    websiteLink: "https://smart-dhopa-online-laundry-app.web.app/",
  },
  {
    id: 4,
    title: "Doctor's Portal",
    image: PortfolioFour,
    description:
      "A Single page web app where people can pick the date time and set an appointment. A doctor can review his appointments, manage appointment and prescribe medicine to a Patient from his dashboard.",
    tags: [
      "React",
      "Context API",
      "Tailwind",
      "Firebase",
      "NodeJS",
      "SSLCOMMERZ",
    ],
    type: ["Full Stack", "Front End", "Others"],
    websiteLink: "https://online-doctors-portal.web.app/",
  },
  {
    id: 5,
    title: "Food Club",
    image: PortfolioFive,
    description:
      "Foodclub is a member and partner based club where members can enjoy guaranteed discount from club partners. Foodclub helps members save money on food by offering discounts from partner restaurants.",
    tags: [
      "React",
      "Context API",
      "Tailwind",
      "Firebase",
      "NodeJS",
      "SSLCOMMERZ",
    ],
    type: ["Landing Page", "Front End", "Others"],
    websiteLink: "https://www.foodclubuk.com/",
  },
  {
    id: 6,
    title: "Custom Sea Foods",
    image: PortfolioSix,
    description:
      "FROM WILD ALASKA TO YOUR TABLE Always Wild - Sustainable - Fresh",
    tags: [
      "React",
      "Context API",
      "Tailwind",
      "Firebase",
      "NodeJS",
      "SSLCOMMERZ",
    ],
    type: ["Landing Page", "Front End", "Others"],
    websiteLink: "https://customseafoods.com/",
  },
  {
    id: 7,
    title: "The Good batch",
    image: PortfolioSeven,
    description: "Cookies Make Our World Go Round",
    tags: [
      "React",
      "Context API",
      "Tailwind",
      "Firebase",
      "NodeJS",
      "SSLCOMMERZ",
    ],
    type: ["Landing Page", "Front End", "Others"],
    websiteLink: "https://thegoodbatch.com/",
  },
  {
    id: 8,
    title: "Linksome",
    image: PortfolioEight,
    description:
      "Makes #linkinbio easy for👇 Businesses, influencers, artists, creators & many more",
    tags: [
      "React",
      "Context API",
      "Tailwind",
      "Firebase",
      "NodeJS",
      "SSLCOMMERZ",
    ],
    type: ["Landing Page", "Front End", "Others"],
    websiteLink: "https://linksome.me/s/",
  },
  {
    id: 9,
    title: "Mahlatini",
    image: PortfolioNine,
    description: "TAILORMADE TRAVEL EXPERIENCES",
    tags: [
      "React",
      "Context API",
      "Tailwind",
      "Firebase",
      "NodeJS",
      "SSLCOMMERZ",
    ],
    type: ["Landing Page", "Front End", "Others"],
    websiteLink: "https://www.mahlatini.com/",
  },
  {
    id: 10,
    title: "Cuckoo",
    image: PortfolioTen,
    description:
      "Fast, fair, feel-good broadband Full fibre speeds and the best customer service you've ever had.",
    tags: [
      "React",
      "Context API",
      "Tailwind",
      "Firebase",
      "NodeJS",
      "SSLCOMMERZ",
    ],
    type: ["Landing Page", "Front End", "Others"],
    websiteLink: "https://www.cuckoo.co/",
  },
  {
    id: 11,
    title: "Skyfi",
    image: PortfolioEleven,
    description: "The World's Geospatial Hub ",
    tags: [
      "React",
      "Context API",
      "Tailwind",
      "Firebase",
      "NodeJS",
      "SSLCOMMERZ",
    ],
    type: ["Landing Page", "Front End", "Others"],
    websiteLink: "https://www.skyfi.com/",
  },
  {
    id: 12,
    title: "Boolu",
    image: PortfolioTwelve,
    description: "Build your smart habits with AI",
    tags: [
      "React",
      "Context API",
      "Tailwind",
      "Firebase",
      "NodeJS",
      "SSLCOMMERZ",
    ],
    type: ["Landing Page", "Front End", "Others"],
    websiteLink: "https://boolu.app/",
  },
  {
    id: 13,
    title: "Beckett",
    image: PortfolioThirteen,
    description: "AGENTUR DESIGN KUNDEN PORTFOLIO KONTAKT",
    tags: [
      "React",
      "Context API",
      "Tailwind",
      "Firebase",
      "NodeJS",
      "SSLCOMMERZ",
    ],
    type: ["Landing Page", "Front End", "Others"],
    websiteLink: "https://www.beckett.design/",
  },
];

export default portfolioData;
