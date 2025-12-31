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
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "چرا وب ؟",
  },

  {
    id: "contact",
    title: "ارتباط با ما",
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
    title: "Content Creator",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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

];

const experiences = [
  {
    title: "Next.js Developer",
    company_name: "RivDesign",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Original Shoes",
    icon: shopify,
    iconBg: "#383E56",
    date: "June 2022 - July 2022",
    points: [
      "Developing and maintaining web applications using Tailwind and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",

    ],
  },
  {
    title: "Programming instructor",
    company_name: "It-mabna",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Present",
    points: [
      "Teaching Front-end and Languages Like Html,Css,Js and tools and frameworks.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "من بابت پروژه های این دوره دانشجوی شما شدم و از این بابت خیلی خوشحالم.احساس میکنم مطالب برام از پایه دارن جا می افتن و این موضوع حتما حکم یه برگ برنده رو برام داره. به همه دوستانی که سراغ این دوره اومدن توصیه میکنم لحظه ای برای شرکت کردن درنگ نکنن",
    name: "محمد زارع",
    designation: "دانشجو دوره طراحی وب",

  },
  {
    testimonial:
      "واقعا این دوره عالی بود و راهکار های گفته شده نکات گفته شده واقعا عالی و کاربردی بود استفاده کردیم از مطالب گفته شده استاد ممنون واقعا و خداقوت میگم به صاحب جان عزیز استاد دلسوز و بسیار خفن ",
    name: "محمد سجادی",
    designation: "دانشجو دوره طراحی وب",


  },
  {
    testimonial:
      "قبل از این دوره دوره اساتید دیگه رو هم دیده بودم ولی هیچکدوم یکمم به این خوبی نبودن. شیوه تدریس مطالب گفته شده پروژه ها همه چی بهترین حالت",
    name: "محمدرضا رستمی",
    designation: "دانشجو دوره طراحی وب",

  },
  {
    testimonial:
      "بعد از چهار سال سردرگمی واز این شاخه به اون شاخه پریدن تونستم راه مو پیدا کنم ممنونم",
    name: "علیرضا عزیزی",
    designation: "دانشجو دوره طراحی وب",

  },
  {
    testimonial:
      "اگه بخوام نظرمو بگم بی هیچ اغراقی باید بگم که بهترین دوره هستش برای اینکه خودتو از سردرگمی بیرون بیاری. به شخصه همه سوالاتی که داشتم تو این دوره برام پاسخ داده شد و از استاد واقعا بابت این نکات خوبش متشکرم ❤🌹",
    name: "یاسین علی محمد",
    designation: "دانشجو دوره طراحی وب",

  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Html",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Html",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "Html",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
