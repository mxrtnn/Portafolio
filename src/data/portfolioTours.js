export const portfolioTours = {
  recruiter: {
    icon: "briefcase",
    es: "Estoy reclutando",
    en: "I’m recruiting",
    detail: "Perfil, un proyecto y CV.",
    detailEn: "Profile, a project and CV.",
    steps: [
      {
        target: ".profile-intro",
        es: "Un perfil que conecta disciplinas",
        en: "A profile that connects disciplines",
        text: "Martín combina desarrollo Full Stack, inteligencia artificial y datos. Su formación en Ingeniería Informática se complementa con experiencia en proyectos y metodologías Scrum.",
        textEn:
          "Martín combines Full Stack development, artificial intelligence and data. His Software Engineering studies are complemented by project experience and Scrum methodologies.",
      },
      {
        target: '[data-project-id="duoc-desk"]',
        project: "duoc-desk",
        es: "Desarrollo y liderazgo en DARA",
        en: "Development and leadership in DARA",
        text: "DUOC-DESK aborda la gestión de requerimientos del departamento DARA. Martín participó en el desarrollo y asumió el rol de líder de proyecto y Scrum Master.",
        textEn:
          "DUOC-DESK addresses request management for the DARA department. Martín contributed to development and took on the role of Project Lead and Scrum Master.",
      },
      {
        target: ".profile-cv",
        cv: true,
        es: "La trayectoria, lista para revisar",
        en: "A career ready to explore",
        text: "Ya viste una muestra de su enfoque. Descarga el CV para revisar su formación y experiencia, o conversemos sobre la oportunidad que tienes en mente.",
        textEn:
          "You’ve seen a sample of his approach. Download his CV to explore his education and experience, or start a conversation about the opportunity you have in mind.",
      },
    ],
  },
  client: {
    icon: "lightbulb",
    es: "Tengo un proyecto",
    en: "I have a project",
    detail: "Tu necesidad, un ejemplo y contacto.",
    detailEn: "Your needs, an example and contact.",
    steps: [
      {
        target: "#propuesta-valor .max-w-3xl",
        es: "Primero, el problema que quieres resolver",
        en: "Start with the problem you want to solve",
        text: "Una web, una automatización o una idea con IA empieza con un objetivo claro. El enfoque de Martín conecta diseño, desarrollo y datos con las necesidades de cada proyecto.",
        textEn:
          "A website, an automation or an AI idea starts with a clear goal. Martín’s approach connects design, development and data with each project’s needs.",
      },
      {
        target: '[data-project-id="nina"]',
        project: "nina",
        es: "Una idea llevada a la práctica",
        en: "An idea put into practice",
        text: "El Horno de Nina muestra cómo una pyme puede presentar su marca y productos en una landing conectada con sus redes sociales. Un ejemplo concreto de diseño al servicio de un negocio.",
        textEn:
          "El Horno de Nina shows how a small business can present its brand and products through a landing page connected to social media. A concrete example of design serving a business.",
      },
      {
        target: "#contacto form",
        contact: true,
        es: "Cuéntame qué te gustaría construir",
        en: "Tell me what you’d like to build",
        text: "El siguiente paso es simple: contar tu idea, qué necesitas resolver y para quién. Con ese contexto podemos conversar sobre una primera versión y definir el alcance.",
        textEn:
          "The next step is simple: share your idea, the problem you want to solve and who it is for. With that context we can discuss a first version and define the scope.",
      },
    ],
  },
  explorer: {
    icon: "compass",
    es: "Vengo a explorar",
    en: "I’m here to explore",
    detail: "Stack, IA y un toque de retro gaming.",
    detailEn: "Technology, AI and a touch of retro gaming.",
    steps: [
      {
        target: ".profile-stack",
        es: "Una caja de herramientas diversa",
        en: "A diverse toolbox",
        text: "El stack reúne lenguajes, interfaces, backend, cloud, diseño e IA. Usa los botones + para explorar las tecnologías adicionales de cada categoría.",
        textEn:
          "The stack brings together languages, interfaces, backend, cloud, design and AI. Use the + buttons to explore additional technologies in each category.",
      },
      {
        target: '[data-project-id="mystikal"]',
        project: "mystikal",
        es: "Experimentar con inteligencia artificial",
        en: "Experimenting with artificial intelligence",
        text: "Mystikal-AI integra generación de imágenes con una interfaz web. Es un espacio de exploración personal donde se encuentran IA, desarrollo y experiencia de usuario.",
        textEn:
          "Mystikal-AI integrates image generation with a web interface. It is a personal exploration where AI, development and user experience come together.",
      },
      {
        target: '[data-project-id="neo-vault"]',
        project: "neo-vault",
        es: "La tecnología también tiene un lado lúdico",
        en: "Technology has a playful side too",
        text: "Neo-Vault es un sistema local de juegos retro inspirado en HyperSpin. TypeScript, SCSS y JavaScript dan forma a una experiencia con identidad propia.",
        textEn:
          "Neo-Vault is a local retro gaming system inspired by HyperSpin. TypeScript, SCSS and JavaScript shape an experience with an identity of its own.",
      },
    ],
  },
};
