export const scrumPhases = [
  {
    id: 'planning', icon: 'fa-list-check', file: 'sprint-planning.ts',
    es: { title: 'Planificación del Sprint', phrase: 'Primero acordamos qué vale la pena construir.', description: 'Convertimos tu idea en un objetivo claro y un alcance priorizado.', deliverable: 'Objetivo del Sprint · Backlog seleccionado', steps: ['Entender el problema y al usuario', 'Priorizar lo esencial del MVP', 'Acordar un objetivo y un plan'], result: 'Un Sprint con dirección y expectativas claras.' },
    en: { title: 'Sprint Planning', phrase: 'First, we agree on what is worth building.', description: 'We turn your idea into a clear goal and a prioritized scope.', deliverable: 'Sprint Goal · Selected backlog', steps: ['Understand the problem and the user', 'Prioritize the essentials of the MVP', 'Agree on a goal and a plan'], result: 'A Sprint with direction and clear expectations.' },
  },
  {
    id: 'development', icon: 'fa-code', file: 'sprint-development.ts',
    es: { title: 'Desarrollo', phrase: 'Construimos lo esencial, un incremento a la vez.', description: 'Diseño, desarrollo y pruebas con seguimiento del progreso hacia el objetivo.', deliverable: 'Incremento funcional · Calidad verificada', steps: ['Diseñar y desarrollar la función clave', 'Inspeccionar el progreso en la Daily Scrum', 'Integrar y probar el incremento'], result: 'Una solución funcional que cumple la Definición de Terminado.' },
    en: { title: 'Development', phrase: 'We build the essentials, one increment at a time.', description: 'Design, development and testing while tracking progress toward the goal.', deliverable: 'Working increment · Verified quality', steps: ['Design and develop the core feature', 'Inspect progress in the Daily Scrum', 'Integrate and test the increment'], result: 'A working solution that meets the Definition of Done.' },
  },
  {
    id: 'review', icon: 'fa-desktop', file: 'sprint-review.ts',
    es: { title: 'Revisión del Sprint', phrase: 'Lo mostramos, escuchamos y decidimos el siguiente paso.', description: 'Revisamos el resultado contigo y adaptamos las prioridades con evidencia.', deliverable: 'Demostración · Feedback · Backlog actualizado', steps: ['Inspeccionar el resultado con los interesados', 'Recoger comentarios y métricas acordadas', 'Adaptar el Product Backlog'], result: 'Próximas decisiones basadas en lo aprendido.' },
    en: { title: 'Sprint Review', phrase: 'We show it, listen and decide what comes next.', description: 'We inspect the outcome together and adapt priorities using evidence.', deliverable: 'Demo · Feedback · Updated backlog', steps: ['Inspect the outcome with stakeholders', 'Collect feedback and agreed metrics', 'Adapt the Product Backlog'], result: 'Next decisions informed by what we learned.' },
  },
  {
    id: 'retrospective', icon: 'fa-arrows-rotate', file: 'sprint-retrospective.ts',
    es: { title: 'Retrospectiva', phrase: 'Cada Sprint mejora el producto y nuestra forma de trabajar.', description: 'Identificamos qué funcionó y elegimos una mejora concreta para el próximo ciclo.', deliverable: 'Aprendizajes · Acción de mejora', steps: ['Revisar la colaboración y la calidad', 'Identificar obstáculos y aprendizajes', 'Elegir una mejora para el próximo Sprint'], result: 'Un nuevo ciclo con una forma de trabajar más efectiva.' },
    en: { title: 'Sprint Retrospective', phrase: 'Every Sprint improves the product and how we work.', description: 'We identify what worked and choose a practical improvement for the next cycle.', deliverable: 'Lessons learned · Improvement action', steps: ['Review collaboration and quality', 'Identify obstacles and lessons learned', 'Choose an improvement for the next Sprint'], result: 'A new cycle with a more effective way of working.' },
  },
];

// Illustrative TypeScript: the panel explains the service; it does not execute code.
export function buildScrumCode(phase, language) {
  const copy = phase[language];
  return `// ${copy.phrase}\nconst sprint = {\n  phase: "${copy.title}",\n  actions: [\n${copy.steps.map(step => `    "${step}",`).join('\n')}\n  ],\n  outcome: "${copy.result}"\n};\n\nnextSprint.adapt(sprint);`;
}
