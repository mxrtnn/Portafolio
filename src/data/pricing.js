const clp = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 });
export const priceDatabase = {
  'Landing Page Comercial': { title: 'Landing Page Comercial (Pyme)', min: 220000, max: 250000, features: ['Una página para presentar tu negocio y captar consultas', 'Diseño adaptable a móvil y escritorio', 'Secciones informativas y contacto o enlaces a redes sociales'] },
  'Página Web Funcional': { title: 'Página Web Funcional', min: 400000, features: ['Sitio con navegación entre páginas', 'Contenido y funcionalidades acordados según tu negocio', 'Diseño adaptable y publicación del sitio'] },
  'E-commerce / Tienda Online': { title: 'E-commerce / Tienda Online', min: 700000, features: ['Catálogo y flujo de compra definidos según el alcance', 'Diseño adaptable para presentar y vender productos', 'Configuración de la tienda e integraciones a acordar'] },
  'Plataforma Web / SaaS': { title: 'Plataforma / SaaS a medida', features: ['Revisión de flujos, usuarios y reglas de negocio', 'Definición del MVP y prioridades', 'Propuesta técnica y presupuesto personalizado'] },
  'Modelo de Inteligencia Artificial': { title: 'Inteligencia Artificial / Automatización', features: ['Análisis del problema y disponibilidad de datos', 'Evaluación de integración o modelo necesario', 'Alcance, costos de uso y presupuesto a definir'] },
  'Mantención': { title: 'Mantención / Soporte', features: ['Revisión del estado actual del sitio', 'Identificación de correcciones y actualizaciones', 'Frecuencia y alcance de soporte a acordar'] },
  'Otro': { title: 'Proyecto a medida', features: ['Revisión de tus necesidades', 'Definición de alcance y entregables', 'Presupuesto personalizado después de evaluar el proyecto'] },
};

// These are conservative scope signals, not semantic understanding or a trained model.
// Mentions are shown for confirmation; they never silently change the chosen category.
export function scopeSignals(message = '') {
  const normalized = message.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const clauses = normalized.split(/[.!?;\n,]+/);
  const rules = [
    ['Comercio electrónico', /\b(carrito|checkout|e-?commerce|tienda online|vender productos|pagos? online)\b/],
    ['Usuarios y permisos', /\b(login|autenticacion|roles|cuentas de usuario|inicio de sesion)\b/],
    ['Integraciones o automatización', /\b(api|apis|erp|crm|integraciones?|automatiza\w*)\b/],
    ['Inteligencia artificial', /\b(ia|inteligencia artificial|machine learning|chatbot|modelo predictivo)\b/],
    ['Plataforma a medida', /\b(saas|multitenant|multiempresa|marketplace|tiempo real)\b/],
  ];
  return rules.filter(([, pattern]) => clauses.some(clause => !/\b(no|sin|tampoco|ningun\w*)\b/.test(clause) && pattern.test(clause))).map(([label]) => label);
}

export function estimateProject({ projectType = '', complexity = '1', message = '' } = {}) {
  const selected = priceDatabase[projectType];
  const signals = scopeSignals(message).filter(signal => !(projectType === 'E-commerce / Tienda Online' && signal === 'Comercio electrónico'));
  if (!selected) return { title: 'Selecciona un tipo de proyecto', price: 'Por definir', features: [], signals, reason: 'Selecciona una opción en el formulario para ver su referencia en CLP.', level: 'Pendiente', variable: true };
  const expanded = Number(complexity) > 1;
  const variable = !selected.min || expanded || signals.length > 0;
  const base = selected.max ? `${clp.format(selected.min)}–${clp.format(selected.max)} CLP` : selected.min ? `Desde ${clp.format(selected.min)} CLP` : null;
  let reason = !selected.min ? 'Este servicio requiere revisar sus requisitos antes de asignar un monto.' : expanded ? 'El nivel de complejidad seleccionado supera el alcance base. Revisaremos las funciones para preparar una propuesta.' : signals.length ? 'La descripción contiene posibles requisitos adicionales. Confirma su alcance conmigo: las menciones no son una interpretación definitiva.' : selected.max ? 'Referencia para una landing de alcance simple. El monto dentro del rango se acuerda al revisar contenido y diseño.' : 'Este es el valor de entrada, no una cotización cerrada. El alcance final se acuerda antes de comenzar.';
  return { title: selected.title, price: variable ? 'Variable' : base, base, features: selected.features, signals, reason, level: variable ? 'Revisión de alcance' : 'Alcance base', variable };
}
