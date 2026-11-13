// Gallery items accept type: image | video | cover. Videos use src and optional poster.
export const projects = [
  {
    id: "todofreak",
    featured: true,
    title: "TODOFREAK - Plataforma Inteligente",
    titleEn: "TODOFREAK - Intelligent Platform",
    tab: "todofreak / intelligent-platform",
    theme: "freak",
    logo: "/assets/img/todofreak-logo.png",
    icon: "dice-d20",
    cover: "/assets/img/todofreak-logo.png",
    github: null,
    site: null,
    technologies: [
      "Django",
      "Node.js",
      "MySQL",
      "Cloudflare",
      "Nginx",
      "OVHcloud",
      "Scrum",
    ],
    es: {
      category: "E-COMMERCE · INTELIGENCIA DE NEGOCIOS",
      short:
        "Vitrina digital y comercio electrónico para TodoFreakStore, con integración de IA para inteligencia de negocios.",
      long: [
        "Plataforma web desarrollada como parte de mi portafolio de título para TodoFreakStore. Conecta una vitrina digital con una experiencia de comercio electrónico y herramientas de inteligencia de negocios.",
        "El proyecto integra desarrollo Full Stack e inteligencia artificial para apoyar el análisis de información comercial y la toma de decisiones del negocio.",
      ],
      features: [
        "Vitrina digital y catálogo de productos.",
        "Flujos de comercio electrónico.",
        "Integración de IA para inteligencia de negocios.",
      ],
    },
    en: {
      category: "E-COMMERCE · BUSINESS INTELLIGENCE",
      short:
        "A digital storefront and e-commerce platform for TodoFreakStore, integrating AI for business intelligence.",
      long: [
        "A web platform developed for TodoFreakStore as part of my final degree portfolio, connecting a digital storefront with e-commerce and business intelligence tools.",
        "The project combines Full Stack development and artificial intelligence to support commercial data analysis and business decisions.",
      ],
      features: [
        "Digital storefront and product catalog.",
        "E-commerce flows.",
        "AI integration for business intelligence.",
      ],
    },
    media: [
      {
        type: "image",
        src: "/assets/img/todofreak-logo.png",
        es: "Identidad visual · TodoFreakStore",
        en: "Visual identity · TodoFreakStore",
      },
      {
        type: "image",
        src: "/assets/img/icono_tdfk.png",
        es: "Marca · TodoFreak",
        en: "Brand · TodoFreak",
      },
    ],
  },
  {
    id: "duoc-desk",
    title: "DUOC-DESK (DARA)",
    titleEn: "DUOC-DESK (DARA)",
    tab: "duoc-desk / dara",
    theme: "duoc",
    logo: "/assets/img/icono_dara.png",
    icon: "graduation-cap",
    cover: "/assets/img/icono_duoc_negro.jpg",
    github: "https://github.com/gustavogongora-dev/duocdesk-django",
    site: null,
    technologies: ["HTML5", "JavaScript", "Django", "MySQL"],
    es: {
      category: "GESTIÓN · FULL STACK",
      short:
        "Sistema de gestión de requerimientos y mesa de ayuda para el departamento DARA de Duoc UC.",
      long: [
        "Solución desarrollada para optimizar la gestión de requerimientos y la mesa de ayuda del departamento DARA de Duoc UC.",
        "Participé como líder de proyecto y Scrum Master, coordinando el trabajo del equipo mediante metodologías ágiles y contribuyendo al desarrollo Full Stack de la plataforma.",
      ],
      features: [
        "Gestión y seguimiento de requerimientos.",
        "Interfaz de consulta y panel de gestión.",
        "Trabajo colaborativo con metodología Scrum.",
      ],
    },
    en: {
      category: "MANAGEMENT · FULL STACK",
      short:
        "Request management and help desk system for the DARA department at Duoc UC.",
      long: [
        "A solution designed to improve request management and help desk workflows for the DARA department at Duoc UC.",
        "I contributed as Project Lead and Scrum Master, coordinating the team through agile methodologies and participating in the platform’s Full Stack development.",
      ],
      features: [
        "Request management and tracking.",
        "User interface and management dashboard.",
        "Collaborative work through Scrum.",
      ],
    },
    media: [
      {
        type: "image",
        src: "/assets/img/icono_duoc_negro.jpg",
        es: "Identidad institucional · Duoc UC",
        en: "Institutional identity · Duoc UC",
      },
      {
        type: "image",
        src: "/assets/img/icono_dara.png",
        es: "Identidad del proyecto · DARA",
        en: "Project identity · DARA",
      },
    ],
  },
  {
    id: "kinedict",
    title: "KINEDICT AI",
    titleEn: "KINEDICT AI",
    tab: "kinedict / sports-intelligence",
    theme: "kine",
    logo: "/assets/img/icono_kinedict.png",
    icon: "person-running",
    cover: "/assets/img/logo_kinedict.png",
    github: "https://github.com/mxrtnn/Kinedict",
    site: "https://kinedict.vercel.app",
    technologies: ["HTML5", "IA / ML", "MySQL"],
    es: {
      category: "SPORT TECH · IA",
      short:
        "Plataforma orientada al análisis de cargas de entrenamiento y al cálculo del índice lesivo de deportistas.",
      long: [
        "Kinedict AI explora la aplicación de inteligencia artificial y análisis de datos al cuidado del deportista. La plataforma está enfocada en el cálculo del índice lesivo a partir de información de entrenamiento.",
        "El proyecto conecta una interfaz web con la gestión de datos deportivos para facilitar la consulta de información y el análisis de cargas.",
      ],
      features: [
        "Cálculo del índice lesivo.",
        "Análisis de cargas de entrenamiento.",
        "Enfoque en datos y prevención de lesiones.",
      ],
    },
    en: {
      category: "SPORT TECH · AI",
      short:
        "A platform focused on training load analysis and athlete injury index calculation.",
      long: [
        "Kinedict AI explores artificial intelligence and data analysis for athlete care, focusing on injury index calculation using training information.",
        "The project connects a web interface with sports data management to support information access and training load analysis.",
      ],
      features: [
        "Injury index calculation.",
        "Training load analysis.",
        "Data-focused approach to injury prevention.",
      ],
    },
    media: [
      {
        type: "image",
        src: "/assets/img/logo_kinedict.png",
        es: "Identidad visual · Kinedict AI",
        en: "Visual identity · Kinedict AI",
      },
      {
        type: "image",
        src: "/assets/img/icono_kinedict.png",
        es: "Logotipo · Kinedict",
        en: "Logo · Kinedict",
      },
    ],
  },
  {
    id: "nina",
    title: "El Horno de Nina",
    titleEn: "El Horno de Nina",
    tab: "el-horno-de-nina / cookies-shop",
    theme: "nina",
    logo: null,
    icon: "cookie-bite",
    cover: "/assets/projects/nina-choco_chips.png",
    github: "https://github.com/mxrtnn/Cookies-Shop",
    site: null,
    technologies: ["Vue", "SCSS", "TypeScript", "HTML5"],
    es: {
      category: "PYME · LANDING PAGE",
      short:
        "Landing page para una pyme de galletas caseras, con una identidad cercana e integración a redes sociales.",
      long: [
        "Sitio web desarrollado para El Horno de Nina, una pyme de galletas caseras. Su objetivo es presentar la marca y sus productos en una experiencia visual clara y cercana.",
        "La landing page integra redes sociales para conectar el sitio con los canales de comunicación del negocio. Su desarrollo utiliza Vue, TypeScript, SCSS y HTML.",
      ],
      features: [
        "Presentación de la marca y sus productos.",
        "Diseño adaptable a escritorio y móvil.",
        "Integración a redes sociales.",
      ],
    },
    en: {
      category: "SMALL BUSINESS · LANDING PAGE",
      short:
        "A landing page for a homemade cookie business, with a welcoming identity and social media integration.",
      long: [
        "A website developed for El Horno de Nina, a homemade cookie business, presenting its brand and products through a clear and approachable visual experience.",
        "The landing page integrates social media to connect the site with the business’s communication channels. Built with Vue, TypeScript, SCSS and HTML.",
      ],
      features: [
        "Brand and product presentation.",
        "Desktop and mobile layouts.",
        "Social media integration.",
      ],
    },
    media: [
      {
        type: "image",
        src: "/assets/projects/nina-choco_chips.png",
        es: "Producto · Galleta con chips de chocolate",
        en: "Product · Chocolate chip cookie",
      },
      {
        type: "image",
        src: "/assets/projects/nina-choco_oreo.png",
        es: "Producto · Galleta Oreo",
        en: "Product · Oreo cookie",
      },
      {
        type: "image",
        src: "/assets/projects/nina-red_velvet.png",
        es: "Producto · Galleta red velvet",
        en: "Product · Red velvet cookie",
      },
    ],
  },
  {
    id: "mystikal",
    title: "MYSTIKAL-AI",
    titleEn: "MYSTIKAL-AI",
    tab: "mystikal-ai / image-generation",
    theme: "mystikal",
    logo: "/assets/img/mystikal_ai_icon.jpg",
    icon: "wand-magic-sparkles",
    cover: "/assets/img/mystikal_ai_icon.jpg",
    github: "https://github.com/mxrtnn/mystikal-ai",
    site: "https://mystikal-ai.vercel.app/",
    technologies: [
      "Python",
      "React",
      "MySQL",
      "JavaScript",
      "TiDB Cloud",
      "TypeScript",
    ],
    es: {
      category: "IA GENERATIVA · WEB",
      short:
        "Generador de imágenes con modelos de IA locales integrados en una aplicación web.",
      long: [
        "Proyecto personal que integra modelos locales de inteligencia artificial para generar imágenes desde una interfaz web. Combina experimentación con IA, desarrollo de interfaces y persistencia de datos.",
        "El frontend se aloja en Vercel, los servicios de backend se despliegan en Render y la gestión de datos utiliza MySQL y TiDB Cloud.",
      ],
      features: [
        "Generación de imágenes mediante modelos de IA.",
        "Interfaz web desarrollada con React.",
        "Servicios distribuidos en Vercel y Render.",
      ],
    },
    en: {
      category: "GENERATIVE AI · WEB",
      short:
        "An image generator connecting local AI models with a web application.",
      long: [
        "A personal project integrating local artificial intelligence models to generate images from a web interface. It combines AI experimentation, interface development and data persistence.",
        "The frontend is hosted on Vercel, backend services are deployed on Render and data management uses MySQL and TiDB Cloud.",
      ],
      features: [
        "AI-powered image generation.",
        "React web interface.",
        "Services distributed across Vercel and Render.",
      ],
    },
    media: [
      {
        type: "image",
        src: "/assets/img/mystikal_ai_icon.jpg",
        es: "Identidad visual · Mystikal-AI",
        en: "Visual identity · Mystikal-AI",
      },
    ],
  },
  {
    id: "neo-vault",
    title: "Neo-Vault",
    titleEn: "Neo-Vault",
    tab: "neo-vault / retro-library",
    theme: "neo",
    logo: null,
    icon: "gamepad",
    cover: null,
    github: "https://github.com/mxrtnn/Neo-Vault",
    site: null,
    technologies: [
      "TypeScript",
      "SCSS",
      "JavaScript",
      "PowerShell",
      "CSS3",
      "HTML5",
    ],
    es: {
      category: "RETRO GAMING · SISTEMA LOCAL",
      short:
        "Sistema local de juegos retro inspirado en HyperSpin, con una experiencia visual dedicada al gaming clásico.",
      long: [
        "Neo-Vault es un sistema local de juegos retro inspirado en HyperSpin. El proyecto busca reunir una experiencia de navegación visual y una identidad propia alrededor del gaming clásico.",
        "Su desarrollo utiliza principalmente TypeScript, SCSS y JavaScript, junto con scripts de PowerShell y recursos en HTML y CSS.",
      ],
      features: [
        "Experiencia local orientada a juegos retro.",
        "Interfaz visual inspirada en HyperSpin.",
        "Desarrollo con TypeScript y estilos SCSS.",
      ],
    },
    en: {
      category: "RETRO GAMING · LOCAL SYSTEM",
      short:
        "A local retro gaming system inspired by HyperSpin, with a visual experience dedicated to classic games.",
      long: [
        "Neo-Vault is a local retro gaming system inspired by HyperSpin. The project brings together a visual navigation experience and a distinct identity around classic gaming.",
        "Built primarily with TypeScript, SCSS and JavaScript, alongside PowerShell scripts and HTML/CSS resources.",
      ],
      features: [
        "Local experience focused on retro games.",
        "Visual interface inspired by HyperSpin.",
        "TypeScript development and SCSS styles.",
      ],
    },
    media: [
      {
        type: "cover",
        es: "Portada de presentación · Neo-Vault",
        en: "Presentation cover · Neo-Vault",
      },
    ],
  },
];
