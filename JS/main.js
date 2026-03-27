// --- 1. DICCIONARIO DE IDIOMAS ---
const translations = {
    es: {
        nav_home: "Inicio",
        nav_profile: "Perfil",
        nav_projects: "Proyectos",
        nav_services: "Servicios",
        nav_contact: "Trabajemos Juntos",
        header_sub: "Portafolio Web",
        header_desc: "Transformo ideas complejas en soluciones digitales escalables y eficientes. Especializado en crear experiencias web modernas y modelos de Inteligencia Artificial para potenciar negocios.",
        header_btn: "CONTACTO &rarr;",
        about_sub: "SOBRE MÍ",
        about_heading: 'DISPONIBLE PARA PROYECTOS DE <span class="text-accentBlue">IA Y DESARROLLO WEB</span>',
        about_desc: "Soy un Desarrollador Full-Stack, Data Scientist y Scrum Master apasionado por resolver problemas complejos mediante tecnología. Me enfoco en crear soluciones escalables, modelos predictivos y liderar equipos ágiles para asegurar la entrega de valor constante.",
        stats_proj: "Proyectos Exitosos",
        stats_exp: "Años de Experiencia",
        stats_tech: "Tecnologías Dominadas",
        cv_btn: "DESCARGAR CV",
        work_sub: "MI TRABAJO",
        work_heading: "PROYECTOS RECIENTES",
        proj1_desc: "Duoc Desk Dara fue un proyecto realizado para optimizar la gestión de requerimientos y mesas de ayuda, implementando metodologías ágiles (Scrum) y un dashboard interactivo para el análisis de datos de los usuarios.",
        proj2_title: "MODELO PREDICTIVO IA",
        proj2_desc: "Desarrollo de un modelo de Machine Learning utilizando redes neuronales para la predicción de fuga de clientes basado en análisis de datos históricos."
    },
    en: {
        nav_home: "Home",
        nav_profile: "Profile",
        nav_projects: "Projects",
        nav_services: "Services",
        nav_contact: "Let's Work Together",
        header_sub: "Web Portfolio",
        header_desc: "I transform complex ideas into scalable and efficient digital solutions. Specialized in creating modern web experiences and Artificial Intelligence models to boost businesses.",
        header_btn: "CONTACT &rarr;",
        about_sub: "ABOUT ME",
        about_heading: 'AVAILABLE FOR <span class="text-accentBlue">AI & WEB DEV</span> PROJECTS',
        about_desc: "I am a Full-Stack Developer, Data Scientist, and Scrum Master passionate about solving complex problems through technology. I focus on creating scalable solutions, predictive models, and leading agile teams to ensure constant value delivery.",
        stats_proj: "Successful Projects",
        stats_exp: "Years of Experience",
        stats_tech: "Technologies Mastered",
        cv_btn: "DOWNLOAD CV",
        work_sub: "MY WORK",
        work_heading: "RECENT PROJECTS",
        proj1_desc: "Duoc Desk Dara was a project created to optimize the management of requirements and help desks, implementing agile methodologies (Scrum) and an interactive dashboard for user data analysis.",
        proj2_title: "AI PREDICTIVE MODEL",
        proj2_desc: "Development of a Machine Learning model using neural networks to predict customer churn based on historical data analysis."
    }
};

// --- 2. LÓGICA DE TRADUCCIÓN Y ANIMACIÓN ---
let currentLang = 'es';
let typeWriterTimeout;

function startTypewriter() {
    const textToType = currentLang === 'es' ? "Desarrollador Full-Stack" : "Full-Stack Developer";
    const element = document.getElementById("typewriter");
    element.innerHTML = "";
    let charIndex = 0;
    
    clearTimeout(typeWriterTimeout); // Limpiamos si hay una animación corriendo

    function type() {
        if (charIndex < textToType.length) {
            element.innerHTML += textToType.charAt(charIndex);
            charIndex++;
            typeWriterTimeout = setTimeout(type, 150);
        }
    }
    type();
}

function toggleLanguage() {
    // Cambiamos el idioma actual
    currentLang = currentLang === 'es' ? 'en' : 'es';
    
    // Actualizamos el texto del botón
    document.getElementById('lang-text').innerText = currentLang === 'es' ? 'EN' : 'ES';

    // Buscamos todos los elementos que tienen el atributo data-lang y les cambiamos el texto
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key]; 
        }
    });

    // Reiniciamos la animación del texto
    startTypewriter();
}

// Iniciar la animación al cargar la página por primera vez
window.onload = startTypewriter;