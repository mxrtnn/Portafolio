
// Efecto Máquina de Escribir (Typewriter) Bilingüe
const typewriterWords = {
    es: ["Desarrollador Full-Stack", "Ingeniero Informático", "Data Scientist", "Scrum Master"],
    en: ["Full-Stack Developer", "Software Engineer", "Data Scientist", "Scrum Master"]
};
let words = typewriterWords.es; // Empieza en español
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
let typeTimeout; // Variable agregada para controlar el reinicio al cambiar de idioma

function type() {
    currentWord = words[i];
    if (isDeleting) {
        document.getElementById("typewriter").textContent = currentWord.substring(0, j - 1);
        j--;
        if (j == 0) {
            isDeleting = false;
            i++;
            if (i == words.length) i = 0;
        }
    } else {
        document.getElementById("typewriter").textContent = currentWord.substring(0, j + 1);
        j++;
        if (j == currentWord.length) {
            isDeleting = true;
            typeTimeout = setTimeout(type, 2000);
            return;
        }
    }
    typeTimeout = setTimeout(type, isDeleting ? 50 : 100);
}
document.addEventListener('DOMContentLoaded', type);

// Cambiar Tema (Modo Claro/Oscuro)
function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    const icon = document.getElementById('theme-icon');
    if (document.documentElement.classList.contains('dark')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Modales
function openModal(id, element) {
    const modal = document.getElementById(id);
    const content = document.getElementById('modal-content-' + id.replace('modal', ''));
    
    // Animación de apertura estándar
    modal.classList.remove('opacity-0', 'pointer-events-none');
    content.classList.remove('scale-95');
    content.classList.add('scale-100');

    // Lógica dinámica para los enlaces del proyecto (GitHub e Sitio Web)
    if (element) {
        const githubUrl = element.getAttribute('data-github');
        const siteUrl = element.getAttribute('data-site');
        const isSiteAvailable = element.getAttribute('data-site-available') === 'true';

        // Buscamos las etiquetas <a> dentro de este modal específico mediante clases
        const githubBtn = modal.querySelector('.modal-github-link');
        const siteBtn = modal.querySelector('.modal-site-link');

        // 1. Configurar botón de GitHub (Izquierda)
        if (githubBtn && githubUrl) {
            githubBtn.setAttribute('href', githubUrl);
        }

        // 2. Configurar y validar botón del Sitio del Proyecto (Derecha)
        if (siteBtn) {
            if (isSiteAvailable) {
                siteBtn.setAttribute('href', siteUrl);
                siteBtn.innerHTML = `VER SITIO - PROYECTO <i class="fa-solid fa-globe text-xs"></i>`;
                // Removemos clases de deshabilitado en caso de que hayan quedado de otro proyecto
                siteBtn.classList.remove('opacity-50', 'pointer-events-none', 'cursor-not-allowed');
            } else {
                siteBtn.setAttribute('href', '#');
                siteBtn.innerHTML = `SITIO NO DISPONIBLE <i class="fa-solid fa-ban text-xs"></i>`;
                // Añadimos clases de Tailwind para deshabilitar visual y lógicamente el click
                siteBtn.classList.add('opacity-50', 'pointer-events-none', 'cursor-not-allowed');
            }
        }
    }
}

function closeModal(id) {
    const modal = document.getElementById(id);
    const content = document.getElementById('modal-content-' + id.replace('modal', ''));
    modal.classList.add('opacity-0', 'pointer-events-none');
    content.classList.remove('scale-100');
    content.classList.add('scale-95');
}

function openTimelineModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('opacity-0', 'pointer-events-none');
        const content = modal.children[0];
        content.classList.remove('scale-95');
        content.classList.add('scale-100');
    }
}

function closeTimelineModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('opacity-0', 'pointer-events-none');
        const content = modal.children[0];
        content.classList.remove('scale-100');
        content.classList.add('scale-95');
    }
}

// Traducción Básica Actualizada con el Diccionario Completo
const translations = {
    es: {
        nav_home: "Inicio", nav_profile: "Perfil", nav_exp: "Experiencia", nav_projects: "Proyectos", nav_contact: "Trabajemos Juntos",
        header_sub: "Portafolio Web",
        header_desc: "Ingeniero Informático | Especialista en IA & Data Science | Scrum Master<br>Transformo ideas complejas en soluciones digitales eficientes, en donde cada desarrollo represente un encaje perfecto con la identidad visual y los objetivos de la empresa.",
        header_btn: "Mis Redes &rarr;",
        about_heading: "SOBRE MÍ",
        about_desc: "Desarrollador Full Stack con un enfoque meticuloso en la arquitectura de software escalable y robusta, abarcando desde el diseño de bases de datos hasta la creación de interfaces de usuario altamente responsivas. Además, cuento con gran especialización en Python, Inteligencia Artificial, y Machine Learning en la resolución de problemas lógicos de modelos predictivos o Deep Learning, y mi dominio de metodologías ágiles como Scrum me permite liderar equipos de alto rendimiento.",
        cv_btn: "DESCARGAR CV",

        // Aptitudes
        skills_heading: "Aptitudes y Competencias",
        skill1_title: "Trabajo en Equipo", skill1_desc: "Sinergia y colaboración activa",
        skill2_title: "Adaptabilidad", skill2_desc: "Agilidad en entornos dinámicos",
        skill3_title: "Competencia", skill3_desc: "Enfoque a eficiencia y resultados",
        skill4_title: "Creatividad", skill4_desc: "Innovación y visión estética",
        skill5_title: "Liderazgo Ágil", skill5_desc: "Gestión de proyectos con Scrum",
        skill6_title: "Pensamiento Analítico", skill6_desc: "Lógica y resolución de problemas",
        skill7_title: "Visión Integral", skill7_desc: "Perspectiva global Full Stack",
        skill8_title: "Aprendizaje Continuo", skill8_desc: "Actualización tecnológica constante",

        // Modelos de Negocio
        value_sub: "¿Por qué elegirme?",
        value_heading: "EL IMPULSO QUE TU EMPRESA NECESITA",
        value_desc: "No solo escribo código; construyo un puente entre la tecnología y tus objetivos de negocio para maximizar resultados, reducir costos y asegurar entregas exitosas.",
        val1_title: "Desarrollo Escalable", val1_sub: "¿Necesitas materializar tus ideas?", val1_desc: "Diseño e implemento arquitecturas de software robustas utilizando enfoques Full-Stack. Transformo requerimientos complejos en aplicaciones extremadamente rápidas, seguras y altamente eficientes, garantizando que tu producto digital escale progresivamente sin generar cuellos de botella.",
        val2_title: "IA & Ciencia de Datos", val2_sub: "¿Tus datos impulsan tu negocio?", val2_desc: "Los datos sin análisis son únicamente ruido digital. Aplico modelos de Machine Learning y analítica predictiva avanzada para identificar tendencias ocultas, automatizar decisiones críticas e impulsar estrategias corporativas basadas cien por ciento en rigor estadístico y matemático.",
        val3_title: "Liderazgo & Gestión Ágil", val3_sub: "¿Proyectos fuera de presupuesto?", val3_desc: "Como profesional certificado en metodologías Scrum, garantizo una perfecta sinergia de equipo enfocada al valor de negocio. Resuelvo impedimentos técnicos, optimizo profundamente los tiempos de entrega y aseguro un constante retorno sobre tu valiosa inversión.",
        val4_title: "Construcción de MVP", val4_sub: "¿Inviertes sin validar el mercado?", val4_desc: "Disminuyo drásticamente el riesgo económico creando prototipos funcionales y Productos Mínimos Viables en tiempos excepcionalmente cortos. Validamos el producto interactuando con clientes reales, logrando destinar los recursos financieros a lo que realmente funciona.",
        val5_title: "Desarrollo Iterativo", val5_sub: "¿Tu proyecto se siente estancado?", val5_desc: "La innovación tecnológica jamás espera. Empleo procesos iterativos donde tus aplicaciones evolucionan mediante actualizaciones cortas y confiables. Esto proporciona una tremenda flexibilidad para pivotar estratégicamente, obteniendo software de valor sin sorpresas.",
        val6_title: "Transparencia Radical", val6_sub: "¿Desconoces qué hace tu equipo?", val6_desc: "Destruyo completamente el paradigma de la ingeniería oculta. Mediante sistemas estructurados de documentación y revisiones periódicas minuciosas, visualizarás continuamente métricas de desempeño, demostrando exactamente cómo tu capital genera código funcional.",

        // Línea de vida (Experiencia)
        exp_sub: "MI TRAYECTORIA",
        exp_heading: "EXPERIENCIA & EDUCACIÓN",

        exp1_date: "2017 - 2018", exp1_title: "Fundación Ciencia Joven", exp1_sub: "Participación en Taller Estudiantil", exp1_li1: "Participación en mentorías de proyectos de ciencia y tecnología.", exp1_li2: "Desarrollo de habilidades en resolución de problemas complejos.", exp1_li3: "Primer contacto formal con metodologías de investigación.", exp1_li4: "Primer contacto formal con actividades de facultades superiores.",
        exp2_date: "2019 - 2021", exp2_title: "Estudiante de Ingeniería Electrónica", exp2_sub: "Pontificia Universidad Católica de Valparaíso", exp2_li1: "Experiencia y formación básica en sistemas digitales y lógica computacional.", exp2_li2: "Aprendizaje básico en lenguajes de programación (Python|Java).", exp2_li3: "Aprendizaje intermedio en matemática aplicada.",
        exp3_date: "2022 - 2026", exp3_title: "Egresado de Ingeniería Informática", exp3_sub: "Duoc UC Sede Viña del Mar", exp3_li1: "Titulado con especialidad en Ciencia de Datos e Inteligencia Artificial", exp3_li2: "Certificaciones de IA: Artificial Intelligence Professional y Expert.", exp3_li3: "Certificación de Microsoft Azure Fundamentals en despliegue de servicios.", exp3_li4: "Certificación de Cisco Academy en Python Essentials I.",
        exp4_date: "2024", exp4_title: "Desarrollador Full Stack", exp4_sub: "Líder de Proyecto & Scrum Master en Duoc UC", exp4_li1: "Desarrollo integral usando HTML5, Django y MySQL.", exp4_li2: "Gestión ágil de proyecto para departamento DARA.", exp4_li3: "Enfoque en eficiencia y encaje perfecto visual.",
        exp5_date: "Actualidad", exp5_title: "Desarrollando plataforma digital", exp5_sub: "Centro de Entrenamiento Viña del Mar", exp5_li1: "Autenticación multifactor.", exp5_li2: "Página Web y App Móvil.",

        // Proyectos y Footer
        work_sub: "MI TRABAJO",
        work_heading: "PROYECTOS RECIENTES",
        proj1_desc: "Duoc Desk Dara fue un proyecto realizado para optimizar la gestión de requerimientos y mesas de ayuda, implementando metodologías ágiles (Scrum) y un dashboard interactivo para el análisis de datos de los usuarios.",
        proj2_title: "MODELO PREDICTIVO IA",
        proj2_desc: "Desarrollo de un modelo de Machine Learning utilizando redes neuronales para la predicción de fuga de clientes basado en análisis de datos históricos.",
        proj3_title: "KINE-PREDICT AI",
        proj3_desc: "Plataforma web enfocada en predecir lesiones deportivas y calcular el índice lesivo de atletas mediante análisis de datos y cargas de entrenamiento.",
        contact_sub: "HABLEMOS",
        contact_heading: "CONTÁCTAME",
        contact_name: "NOMBRE", contact_email: "CORREO ELECTRÓNICO", contact_msg: "MENSAJE", contact_send: "ENVIAR MENSAJE",
        footer_rights: "Todos los derechos reservados.",
        modal1_full: "Duoc Desk Dara fue un proyecto integral realizado para optimizar la gestión de requerimientos y mesas de ayuda de la institución. Implementamos metodologías ágiles (Scrum) logrando entregar valor en sprints de 2 semanas. El sistema incluye un dashboard interactivo para análisis de métricas de tickets resueltos, roles de usuario jerárquicos y notificaciones automáticas por correo electrónico.",
        modal2_full: "Este proyecto consistió en el desarrollo y entrenamiento de un modelo de Machine Learning como evaluación practica en DUOC UC (redes neuronales) diseñado para predecir la fuga de clientes (Churn Rate). Utilizamos un dataset histórico de más de 50,000 registros, aplicando limpieza de datos con Pandas y entrenamiento con TensorFlow. El modelo final logró una precisión del 89%, permitiendo al equipo de retención actuar proactivamente.",
        modal3_full: "KinePredict AI es una solución tecnológica diseñada para revolucionar el cuidado del deportista. Desarrollé esta plataforma web permitiendo a fisioterapeutas y equipos técnicos calcular el <strong>índice lesivo</strong> de sus atletas mediante el cruce de datos biomecánicos, métricas de fatiga y cargas de entrenamiento. <br><br> La UI/UX fue diseñada minuciosamente en <strong>Figma</strong> y construida con <strong>HTML</strong> y <strong>TailwindCSS</strong> para una respuesta ultrarrápida. Toda la arquitectura de base de datos relacional reside en <strong>MySQL</strong>, mientras que el despliegue e infraestructura en la nube está asegurado y escalado gracias a los servicios de <strong>Microsoft Azure</strong>.",
        modal_repo: "Ver Repositorio",

        // Formulario
        contact_send: "ENVIAR MENSAJE",
        contact_name_ph: "Tu nombre",
        contact_email_ph: "tu@email.com",
        contact_msg_ph: "Cuéntame sobre tu proyecto..."
    },
    en: {
        nav_home: "Home", nav_profile: "Profile", nav_exp: "Experience", nav_projects: "Projects", nav_contact: "Let's Work",
        header_sub: "Web Portfolio",
        header_desc: "Software Engineer | AI & Data Science Specialist | Scrum Master<br>I transform complex ideas into efficient digital solutions, where each development represents a perfect fit with the visual identity and objectives of the company.",
        header_btn: "My Networks &rarr;",
        about_heading: "ABOUT ME",
        about_desc: "Full Stack Developer with a meticulous focus on scalable and robust software architecture, from database design to the creation of highly responsive user interfaces. Furthermore, I have great specialization in Python, Artificial Intelligence, and Machine Learning solving logical problems of predictive models or Deep Learning, and my mastery of agile methodologies such as Scrum allows me to lead high-performance teams.",
        cv_btn: "DOWNLOAD CV",

        // Aptitudes
        skills_heading: "Skills and Competencies",
        skill1_title: "Teamwork", skill1_desc: "Synergy and active collaboration",
        skill2_title: "Adaptability", skill2_desc: "Agility in dynamic environments",
        skill3_title: "Competence", skill3_desc: "Focus on efficiency and results",
        skill4_title: "Creativity", skill4_desc: "Innovation and aesthetic vision",
        skill5_title: "Agile Leadership", skill5_desc: "Project management with Scrum",
        skill6_title: "Analytical Thinking", skill6_desc: "Logic and problem solving",
        skill7_title: "Integral Vision", skill7_desc: "Global Full Stack perspective",
        skill8_title: "Continuous Learning", skill8_desc: "Constant technological updating",

        // Modelos de Negocio
        value_sub: "Why choose me?",
        value_heading: "THE BOOST YOUR COMPANY NEEDS",
        value_desc: "I don't just write code; I build a bridge between technology and your business goals to maximize results, reduce costs, and ensure successful deliveries.",
        val1_title: "Scalable Development", val1_sub: "Need to materialize your ideas?", val1_desc: "I design and implement robust software architectures using Full-Stack approaches. I transform complex requirements into extremely fast, secure, and highly efficient applications, ensuring your digital product scales progressively without bottlenecks.",
        val2_title: "AI & Data Science", val2_sub: "Does your data drive your business?", val2_desc: "Data without analysis is just digital noise. I apply Machine Learning models and advanced predictive analytics to identify hidden trends, automate critical decisions, and drive corporate strategies based entirely on statistical and mathematical rigor.",
        val3_title: "Agile Leadership & Management", val3_sub: "Projects over budget?", val3_desc: "As a certified Scrum methodology professional, I guarantee perfect team synergy focused on business value. I resolve technical impediments, deeply optimize delivery times, and ensure a constant return on your valuable investment.",
        val4_title: "MVP Construction", val4_sub: "Investing without validating the market?", val4_desc: "I drastically reduce economic risk by creating functional prototypes and Minimum Viable Products in exceptionally short times. We validate the product by interacting with real customers, ensuring financial resources go toward what truly works.",
        val5_title: "Iterative Development", val5_sub: "Does your project feel stuck?", val5_desc: "Technological innovation never waits. I use iterative processes where your applications evolve through short and reliable updates. This provides tremendous flexibility to pivot strategically, delivering valuable software without surprises.",
        val6_title: "Radical Transparency", val6_sub: "Don't know what your team is doing?", val6_desc: "I completely destroy the hidden engineering paradigm. Through structured documentation systems and meticulous periodic reviews, you will continually visualize performance metrics, proving exactly how your capital generates functional code.",

        // Línea de Vida (Experiencia)
        exp_sub: "MY JOURNEY",
        exp_heading: "EXPERIENCE & EDUCATION",
        exp1_date: "2017 - 2018", exp1_title: "Science Youth Foundation", exp1_sub: "Initiation to Innovation Projects", exp1_li1: "Participation in mentoring of science and technology projects.", exp1_li2: "Development of skills in complex problem solving.", exp1_li3: "First formal contact with research methodologies.",
        exp2_date: "2019 - 2021", exp2_title: "Electronic Eng. Student", exp2_sub: "Pontificia Universidad Católica de Valparaíso", exp2_li1: "Experience and basic training in digital systems and computational logic.", exp2_li2: "Learning in basic programming languages.",
        exp3_date: "2022 - 2026", exp3_title: "Software Eng. & AI Student", exp3_sub: "Duoc UC (AI Specialty)", exp3_li1: "AI Certifications: Artificial Intelligence Professional and Expert.", exp3_li2: "Microsoft Azure Fundamentals and Cisco Python Essentials I Certification.", exp3_li3: "Start in Full-Stack Development with Python, Django, and databases.",
        exp4_date: "2024", exp4_title: "Full Stack Developer", exp4_sub: "Project Lead & Scrum Master at Duoc UC", exp4_li1: "Comprehensive development using HTML5, Django, and MySQL.", exp4_li2: "Certified agile project management (Scrum Developer, Product Owner, Professional Scrum Master).", exp4_li3: "Focus on efficiency, results, and perfect fit with visual identity.",
        exp5_date: "Present", exp5_title: "Continuous Innovation", exp5_sub: "Efficient Digital Solutions", exp5_li1: "Transforming complex ideas into robust technological developments.", exp5_li2: "Synergy and active collaboration in dynamic environments.", exp5_li3: "Intermediate B1 English (TOEIC Certificate) for global reach.",

        // Proyectos y Footer
        work_sub: "MY WORK",
        work_heading: "RECENT PROJECTS",
        proj1_desc: "Duoc Desk Dara was a project carried out to optimize the management of requirements and help desks, implementing agile methodologies (Scrum) and an interactive dashboard for analyzing user data.",
        proj2_title: "AI PREDICTIVE MODEL",
        proj2_desc: "Development of a Machine Learning model using neural networks to predict customer churn based on historical data analysis.",
        proj3_title: "KINE-PREDICT AI",
        proj3_desc: "Web platform focused on predicting sports injuries and calculating the injury index of athletes through data analysis and training loads.",
        contact_sub: "LET'S TALK",
        contact_heading: "CONTACT ME",
        contact_name: "NAME", contact_email: "EMAIL", contact_msg: "MESSAGE", contact_send: "SEND MESSAGE",
        footer_rights: "All rights reserved.",
        modal1_full: "Duoc Desk Dara was a comprehensive project carried out to optimize the management of requirements and help desks of the institution. We implemented agile methodologies (Scrum) delivering value in 2-week sprints. The system includes an interactive dashboard for analyzing resolved ticket metrics, hierarchical user roles, and automatic email notifications.",
        modal2_full: "This project consisted of the development and training of a Machine Learning model as a practical evaluation at DUOC UC (neural networks) designed to predict customer churn. We used a historical dataset of more than 50,000 records, applying data cleaning with Pandas and training with TensorFlow. The final model achieved an 89% accuracy, allowing the retention team to act proactively.",
        modal3_full: "KinePredict AI is a technological solution designed to revolutionize athlete care. I developed this web platform allowing physiotherapists and technical teams to calculate the <strong>injury index</strong> of their athletes by cross-referencing biomechanical data, fatigue metrics, and training loads. <br><br> The UI/UX was meticulously designed in <strong>Figma</strong> and built with <strong>HTML</strong> and <strong>TailwindCSS</strong> for lightning-fast response. The entire relational database architecture resides in <strong>MySQL</strong>, while cloud deployment and infrastructure are secured and scaled using <strong>Microsoft Azure</strong>.",
        modal_repo: "View Repository"
    }
};

// Cambiar Idioma
let currentLang = 'es';
function toggleLanguage() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    document.getElementById('lang-text').textContent = currentLang === 'es' ? 'EN' : 'ES';
    updateLanguage();

    // Ajuste para reiniciar la máquina de escribir en el nuevo idioma
    words = typewriterWords[currentLang];
    clearTimeout(typeTimeout); // Frena la ejecución actual
    i = 0;
    j = 0;
    currentWord = "";
    isDeleting = false;
    document.getElementById("typewriter").textContent = ""; // Limpia el texto
    type(); // Reinicia la función
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[currentLang][key]) {
            // Si es un input o un textarea, cambia el placeholder
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[currentLang][key];
            } else {
                // Para todo lo demás (párrafos, títulos, etc.)
                el.innerHTML = translations[currentLang][key];
            }
        }
    });
}

// Animación de la línea de tiempo al hacer scroll
window.addEventListener('scroll', function () {
    const timeline = document.getElementById('timeline-vertical');
    const lineaProgreso = document.getElementById('linea-progreso');

    if (timeline && lineaProgreso) {
        const timelineRect = timeline.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Empieza a llenarse cuando el inicio de la sección entra a un 75% de la pantalla
        let progreso = ((windowHeight * 0.75 - timelineRect.top) / timelineRect.height) * 100;

        // Limitamos el crecimiento para que no baje del 0% ni pase del 100%
        if (progreso < 0) progreso = 0;
        if (progreso > 100) progreso = 100;

        // Aplicamos el porcentaje como altura de la línea azul
        lineaProgreso.style.height = progreso + '%';
    }
});

// 1. Guardamos la información como bloques de código HTML coloreado
const codeSources = {
    perfil: `<span class="comment">// Información personal resumida</span>
<span class="keyword">const</span> <span class="variable">desarrollador</span> = {
  <span class="property">nombre</span>: <span class="string">'Martín Jara'</span>,
  <span class="property">rol</span>: <span class="string">'Desarrollador Web'</span>,
  <span class="property">enfoque</span>: <span class="string">'Experiencias digitales únicas.'</span>
};

<span class="function">console</span>.<span class="method">log</span>(<span class="string">\`¡Hola!\`</span>);`,

    proyectos: `[
  {
    <span class="property">"nombre"</span>: <span class="string">"Portafolio Personal"</span>,
    <span class="property">"tech"</span>: [<span class="string">"HTML"</span>, <span class="string">"CSS"</span>, <span class="string">"JS"</span>],
    <span class="property">"live"</span>: <span class="keyword">true</span>
  }
]`,

    tecnologias: `<span class="keyword">const</span> <span class="variable">stack</span> = [
  <span class="string">'HTML5'</span>, 
  <span class="string">'CSS3'</span>, 
  <span class="string">'JavaScript'</span>, 
  <span class="string">'Git'</span>
];`,

    contacto: `<span class="comment"># Variables de entorno</span>
<span class="variable">EMAIL</span>=<span class="string">"martinjara@email.com"</span>
<span class="variable">LINKEDIN</span>=<span class="string">"linkedin.com/in/martinjara"</span>`
};

const outputElement = document.getElementById('typing-output');
const typingSpeed = 30; // Milisegundos por carácter (más bajo = más rápido)
let typingTimeout; // Para cancelar la animación si cambias de pestaña rápido

// 2. Función inteligente para escribir HTML carácter por carácter
function typeHtml(htmlString) {
    outputElement.innerHTML = ''; // Limpiar antes de empezar
    let pos = 0;

    clearTimeout(typingTimeout); // Cancelar cualquier escritura previa

    function next() {
        if (pos >= htmlString.length) return; // Fin de la cadena

        // Si encontramos el inicio de una etiqueta HTML
        if (htmlString[pos] === '<') {
            // Encontramos el final de la etiqueta completa (p.ej. </span> o <span class="...">)
            let tagEnd = htmlString.indexOf('>', pos);
            if (tagEnd !== -1) {
                // Inyectamos la etiqueta completa INSTANTÁNEAMENTE para no romper el DOM
                outputElement.innerHTML += htmlString.substring(pos, tagEnd + 1);
                pos = tagEnd + 1; // Saltamos al contenido después de la etiqueta
                next(); // Llamada inmediata (sin delay) para empezar a escribir el texto dentro/después
                return;
            }
        }

        // Si es texto normal, escribimos un carácter
        outputElement.innerHTML += htmlString[pos];
        pos++;

        // Esperamos antes de escribir el siguiente
        typingTimeout = setTimeout(next, typingSpeed);
    }

    next(); // Iniciar la función recursiva
}

// 3. Función para cambiar de pestaña
function changeTab(event, tabId) {
    // A. Quitar 'active' de botones
    const tabs = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }
    // B. Activar botón actual
    event.currentTarget.classList.add("active");

    // C. Iniciar animación de escritura con el contenido correspondiente
    typeHtml(codeSources[tabId]);
}

// 4. Iniciar con la primera pestaña por defecto al cargar la página
window.onload = function () {
    typeHtml(codeSources['perfil']);
};