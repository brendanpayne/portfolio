import {

    android,
    azure,
    cplusplus,
    docker,
    firebase,
    git,
    java,
    javascript,
    kotlin,
    nodejs,
    python,
    reactjs,
    threejs,
    typescript,

    ktd,
    netneural,

    protify,
    pentango,
    portfolio,
    neato,
    card,
    chatbot,

    github,
    linkedin,
    email,

    about_1,
    about_2,
    about_3,
    about_4,
    about_5,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const cards = [
    {
      imageUrl: about_1,
      subtitle: 'Introduction',
      title: 'About Me',
      text: `
        I'm a software developer based in Greater Boston, currently working as a Founding Full Stack
        Engineer at NetNeural.AI. My experience spans full-stack web development, Android application
        development, and AI integrations — from shipping Kotlin apps to 200,000+ users at Kroger to
        building self-hosted agentic AI infrastructure. I'm passionate about applying emerging tools to
        hard problems. Let's build something amazing together!
      `
    },
    {
      imageUrl: about_2,
      subtitle: 'Education',
      title: 'University of Cincinnati',
      text: `
        I graduated with a Bachelor's degree in Information Technology from the University of Cincinnati in 2024.
        I chose the software development track and took courses in mobile application development, web development,
        and software engineering. I also minored in Asian Studies and took courses in Japanese language and culture.
      `
    }, 
    {
      imageUrl: about_3,
      subtitle: 'Education',
      title: 'Nanzan University',
      text: `
        I studied abroad at Nanzan University in Nagoya, Japan in 2023. I took courses in Japanese language and culture
        and lived with a host family in Seto, Aichi. During my time in Japan, I traveled to various cities and experienced
        the rich culture and history of the country. I also made many friends and connections that I still keep in touch with today!
      `
    },
    {
      imageUrl: about_4,
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
      imageUrl: about_5,
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
      name: "Docker",
      icon: docker,
      color: "#2496ed",
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
      name: "React",
      icon: reactjs,
      color: "#61dbfb",
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
  ];
  
  const experiences = [
    {
      title: "Founding Full Stack Engineer",
      company_name: "NetNeural.AI",
      icon: netneural,
      iconBg: "#6366f1",
      date: "July 2024 - Present",
      points: [
        `Architect and deploy a full-stack React and TypeScript application on cloud infrastructure, building production-level APIs via Supabase (PostgreSQL, Edge Functions, real-time subscriptions) and a self-hosted IoT broker stack on Digital Ocean supporting real-time device telemetry across multi-tenant architectures.`,
        `Design and maintain a reusable component library serving as a shared design system across cross-functional product teams, reducing code duplication by 35% and accelerating feature delivery.`,
        `Optimize application performance through profiling, state management, and component memoization, reducing render overhead by 30% and improving responsiveness across device configurations.`,
        `Leverage AI tools including Claude Code and LLM API integrations to enhance development velocity and code quality as a standard part of the engineering workflow.`,
      ],
    },
    {
      title: "Android Software Engineer",
      company_name: "Kroger Technology & Digital",
      icon: ktd,
      iconBg: "#0c4b99",
      date: "August 2023 - August 2024",
      points: [
        `Engineered and maintained a Kotlin and Java Android application serving 200,000+ associates, reducing UI rendering time by 25% by leading migration from legacy XML layouts to Jetpack Compose.`,
        `Built and maintained a reusable Jetpack Compose component library aligned with platform design standards, reducing new feature development time by 40% across Agile sprint cycles.`,
        `Drove test-driven development using Appium and JUnit, increasing test coverage by 75% and contributing to CI/CD pipeline improvements that accelerated deployment frequency.`,
        `Served as primary engineer on the bakery department expansion, designing the second-chance kickout workflow and integrating RESTful backend services within Kroger's Zero Hunger, Zero Waste initiative.`,
      ],
    },
    {
      title: "Research & Development Co-op",
      company_name: "Kroger Technology & Digital",
      icon: ktd,
      iconBg: "#0c4b99",
      date: "December 2020 - August 2023",
      points: [
        `Designed and built a store associate Android application (US Patent No. US12007375B2) surfacing real-time fresh food freshness status and spoilage predictions, integrating NfcV sensor data with AI/ML inference.`,
        `Engineered a Digital Twin store environment using NVIDIA Omniverse and Unity on Azure, building automated data pipelines that optimized customer throughput and staffing cost allocation; presented to directors as a solution to $1.3B in annual fresh food waste.`,
        `Applied computer vision and machine learning to live sensor data, developing algorithms for automated decision-making workflows and mentoring onboarding interns.`,
      ],
    },
  ];

  const projects = [
    {
      name: "Protify",
      date: "August 2023 - April 2024",
      description:
        `Open-source Kotlin and Jetpack Compose Android app integrating OpenAI's API for intelligent event scheduling, achieving 90%+ accuracy in AI-generated output. Includes Google Maps and Weather.gov integrations for contextual scheduling.`,
      tags: [
        {
          name: "kotlin",
          color: "blue-text-gradient",
        },
        {
          name: "jetpack-compose",
          color: "green-text-gradient",
        },
        {
          name: "openai",
          color: "purple-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: protify,
      source_code_link: "https://github.com/brendanpayne/protifyapp",
    },
    {
      name: "Agentic AI Platform",
      date: "2019 - Present",
      description:
        `Self-hosted agentic AI platform on a Raspberry Pi processing 10,000+ monthly requests. Features a provider-agnostic LLM router (DeepSeek, Gemini, Cloudflare AI), a 16-tool ReAct agent loop, four-tier autonomous memory system, and a self-critique hallucination guard.`,
      tags: [
        {
          name: "node.js",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "llm-api",
          color: "purple-text-gradient",
        },
        {
          name: "raspberry-pi",
          color: "pink-text-gradient",
        },
      ],
      image: chatbot,
      source_code_link: "https://github.com/brendanpayne",
    },
    {
      name: "Card Maker",
      date: "2023",
      description:
        `React web app for generating custom tabletop trading cards. Users configure a card's name, group, type, image, and description, then export the result as a PNG. Built for a friend's tabletop simulator game.`,
      tags: [
        {
          name: "react",
          color: "purple-text-gradient",
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "html-canvas",
          color: "blue-text-gradient",
        },
      ],
      image: card,
      source_code_link: "https://github.com/brendanpayne/card-maker",
    },
    {
      name: "Portfolio Website",
      date: "May 2024 - Present",
      description:
        `This portfolio — a React and Three.js SPA featuring interactive 3D physics simulations, katakana text-reveal animations, lazy-loaded WebGL canvases, and full accessibility support. Looks familiar, doesn't it?`,
      tags: [
        {
          name: "react",
          color: "purple-text-gradient",
        },
        {
          name: "three.js",
          color: "yellow-text-gradient",
        },
        {
          name: "tailwind",
          color: "blue-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/brendanpayne/portfolio",
    },
    {
      name: "Pentango",
      date: "January 2022 - April 2022",
      description:
        `Pentagon-shaped word game challenging players to create words from a set of letters and earn points based on word length and complexity. Built entirely in vanilla JavaScript with no dependencies.`,
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
        },
      ],
      image: pentango,
      source_code_link: "https://github.com/brendanpayne/pentango",
    },
    {
      name: "Neato DS4 Interface",
      date: "November 2020",
      description:
        `Python script for controlling a Neato Botvac D4 robot vacuum with a DualShock 4 controller, using PyGame for controller input and Neato serial commands for vacuum control.`,
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
        },
      ],
      image: neato,
      source_code_link: "https://github.com/brendanpayne/neato-ds4",
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