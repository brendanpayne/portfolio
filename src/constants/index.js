import { color } from "framer-motion";
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

    ktd,

    carrent,
    jobit,
    tripguide,
    threejs,
    
    github,
    linkedin,
    twitter,
    email,
  } from "../assets";
import { c } from "maath/dist/index-0332b2ed.esm";
  
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

  const cards = [
    {
      imageUrl: 'src/assets/about/1.png',
      subtitle: 'Introduction',
      title: 'About Me',
      text: `
        I'm a software developer soon-to-be based in the Greater Boston Area. My expertise lies
        in full-stack development, with most of my experience being in mobile application development leveraging
        technologies like Kotlin, Swift, and React Native. I'm passionate about creating innovative solutions
        to complex problems and I'm always looking to learn new things. Let's innovate and create something
        amazing together!
      `
    },
    {
      imageUrl: 'src/assets/about/2.png',
      subtitle: 'Education',
      title: 'University of Cincinnati',
      text: `
        I graduated with a Bachelor's degree in Information Technology from the University of Cincinnati in 2024.
        I chose the software development track and took courses in mobile application development, web development,
        and software engineering. I also minored in Asian Studies and took courses in Japanese language and culture.
      `
    }, 
    {
      imageUrl: 'src/assets/about/3.png',
      subtitle: 'Education',
      title: 'Nanzan University',
      text: `
        I studied abroad at Nanzan University in Nagoya, Japan in 2023. I took courses in Japanese language and culture
        and lived with a host family in Seto, Aichi. During my time in Japan, I traveled to various cities and experienced
        the rich culture and history of the country. I also made many friends and connections that I still keep in touch with today!
      `
    },
    {
      imageUrl: 'src/assets/about/4.png',
      subtitle: 'Hobbies',
      title: 'What I Do For Fun',
      text: `
        Some of my hobbies include photography, cooking, and reading. I enjoy documenting my travels and experiences
        through photography and sharing them with others. I also love trying new recipes and experimenting with different
        cuisines. In my free time, I like to read books on technology, history, and philosophy. I'm a lifelong learner
        and always looking to explore new interests and hobbies.
      `
    },
    {
      imageUrl: 'src/assets/about/5.png',
      subtitle: 'Pets',
      title: 'Meet My Cats!',
      text: `
        I have two cats, Peggy and Clairese. They are both tabby cats and are sisters from the same litter. Peggy is the
        more adventurous of the two and loves to explore new places. Clairese is more reserved and enjoys lounging around
        the house. They are both very affectionate and will often be on my desk while I'm working. Despite the occasional
        distraction, they bring me lots of joy.
      `
    }
  ]
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
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
      color: "#f06529",
    },
    {
      name: "CSS 3",
      icon: css,
      color: "#2965f1",
    },
    {
      name: "JavaScript",
      icon: javascript,
      color: "#f0db4f",
    },
    {
      name: "TypeScript",
      icon: typescript,
      color: "#007acc",
    },
    {
      name: "React JS",
      icon: reactjs,
      color: "#61dbfb",
    },
    {
      name: "Redux Toolkit",
      icon: redux,
      color: "#764abc",
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
      color: "#06b6d4",
    },
    {
      name: "Node JS",
      icon: nodejs,
      color: "#68a063",
    },
    {
      name: "MongoDB",
      icon: mongodb,
      color: "#4db33d",
    },
    {
      name: "Three JS",
      icon: threejs,
      color: "#f0db4f",
    },
    {
      name: "git",
      icon: git,
      color: "#f34f29",
    },
    {
      name: "figma",
      icon: figma,
      color: "#f24e1e",
    },
    {
      name: "docker",
      icon: docker,
      color: "#0db7ed",
    },
  ];
  
  const experiences = [
    {
      title: "Research and Development Intern",
      company_name: "Kroger Technology & Digital",
      icon: ktd,
      iconBg: "#0c4b99",
      date: "December 2020 - May 2023",
      points: [
        `Spearheaded development of an Android application utilizing a patented technology, resulting in anticipated savings of $1.3b in product waste for the company.`,
        `Recognized for significant contributions with inclusion on patent documentation. Patent #20230316032`,
        `Created a Digital Twin store environment using Nvidia Omniverse, Unity game engine, and Autodesk Revit and Maya that simulates the checkout process using AI/ML and video recognition.`,
        `Simulation calculations help company pinpoint areas where labor costs can be saved.`,
      ],
    },
    {
      title: "Software Engineer - Android",
      company_name: "Kroger Technology & Digital",
      icon: ktd,
      iconBg: "#0c4b99",
      date: "August 2023 - May 2024",
      points: [
        `Maintained a previously shipped application utilized by associates throughout the enterprise, enhancing in-store associates' workflow.`,
        `Built unit tests and Appium UI automation tests to verify and validate data passed through various frameworks within the Kroger ecosystem.`,
        `Utilized both Android Studio and IntelliJ IDEA IDEs to engineer solutions using Kotlin, Jetpack Compose, XML, and Java`,
        `Gained familiarity with Agile development, Scrum methodology, test driven design, continuous integration/continuous delivery (CI/CD), and full-stack engineering.`,
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
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
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
          name: "mongodb",
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
          name: "restapi",
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
      source_code_link: "https://github.com/",
    },
  ];

  const socials = [
    {
      name: "Email",
      url: "mailto:brendan@iampayne.com",
      icon: email,
    },
    {
      name: "GitHub",
      url: "https://github.com/brendanpayne",
      icon: github,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/payneb2",
      icon: linkedin,
    }
  ];
  
  export { cards, services, technologies, experiences, testimonials, projects, socials };