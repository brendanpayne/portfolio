import {

    android,
    azure,
    cplusplus,
    css,
    docker,
    figma,
    firebase,
    git,
    html,
    java,
    javascript,
    kotlin,
    nodejs,
    python,
    reactjs,
    tailwind,
    threejs,
    typescript,
    unity,

    ktd,

    protify,
    pentango,
    portfolio,
    neato,

    github,
    linkedin,
    twitter,
    email,
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
  
  const technologies = [
    {
      name: "Android",
      icon: android,
      color: "#3ddc84",
    },
    {
      name: "Azure",
      icon: azure,
      color: "#0078d4",
    },
    {
      name: "C++",
      icon: cplusplus,
      color: "#00599c",
    },
    {
      name: "CSS",
      icon: css,
      color: "#264de4",
    },
    {
      name: "Docker",
      icon: docker,
      color: "#2496ed",
    },
    {
      name: "Figma",
      icon: figma,
      color: "#f24e1e",
    },
    {
      name: "Firebase",
      icon: firebase,
      color: "#ffca28",
    },
    {
      name: "Git",
      icon: git,
      color: "#f34f29",
    },
    {
      name: "HTML",
      icon: html,
      color: "#e34f26",
    },
    {
      name: "Java",
      icon: java,
      color: "#f89820",
    },
    {
      name: "JavaScript",
      icon: javascript,
      color: "#f7df1e",
    },
    {
      name: "Kotlin",
      icon: kotlin,
      color: "#0095d5",
    },
    {
      name: "Node.js",
      icon: nodejs,
      color: "#339933",
    },
    {
      name: "Python",
      icon: python,
      color: "#3776ab",
    },
    {
      name: "React.js",
      icon: reactjs,
      color: "#61dbfb",
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
      color: "#38b2ac",
    },
    {
      name: "Three.js",
      icon: threejs,
      color: "#f9a03c",
    },
    {
      name: "TypeScript",
      icon: typescript,
      color: "#007acc",
    },
    {
      name: "Unity",
      icon: unity,
      color: "#AAAAAA",
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

  const projects = [
    {
      name: "Protify",
      date: "August 2023 - April 2024",
      description:
        `AI-powered calendar application that helps users manage their time more effectively by analyzing their schedules and providing suggestions for optimal time management.`,
      tags: [
        {
          name: "kotlin",
          color: "blue-text-gradient",
        },
        {
          name: "android",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
        {
          name: "gpt-4o",
          color: "purple-text-gradient",
        }
      ],
      image: protify,
      source_code_link: "https://github.com/brendanpayne/protifyapp",
    },
    {
      name: "Pentango",
      date: "January 2022 - April 2022",
      description:
        `Pentagon-shaped word game that challenges players to create words using a set of letters and earn points based on the length and complexity of the word.`,
      tags: [
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "html",
          color: "orange-text-gradient",
        },
        {
          name: "css",
          color: "blue-text-gradient",
        }
      ],
      image: pentango,
      source_code_link: "https://github.com/brendanpayne/pentango",
    },
    {
      name: "Portfolio Website",
      date: "May 2024",
      description:
        `Personal portfolio website showcasing my work, skills, and experiences. Looks familiar, doesn't it?`,
      tags: [
        {
          name: "react",
          color: "purple-text-gradient",
        },
        {
          name: "tailwind",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "yellow-text-gradient",
        }
      ],
      image: portfolio,
      source_code_link: "https://github.com/brendanpayne/portfolio",
    },
    {
      name: "Neato DS4 Interface",
      date: "November 2020",
      description:
        `Python script allowing a Neato Botvac D4 robot vacuum to be controlled with a DualShock 4 controller. Uses PyGame for controller input and Neato serial commands for vacuum control.`,
      tags: [
        {
          name: "python",
          color: "yellow-text-gradient",
        },
        {
          name: "pygame",
          color: "blue-text-gradient",
        },
        {
          name: "raspberry-pi",
          color: "pink-text-gradient",
        }
      ],
      image: neato,
      source_code_link: "https://github.com/brendanpayne/neato-ds4"
    },
  ]

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
  
  export { cards, technologies, experiences, projects, socials };