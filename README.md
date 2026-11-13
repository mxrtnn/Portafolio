# Portafolio de Martín Jara

Migración del portafolio original a React + Vite. Se conservan las secciones, clases, imágenes y el diseño original. Tailwind 3 se compila localmente para mantener compatibilidad con las clases del sitio anterior; Font Awesome conserva la versión 6.5.1.

## Desarrollo

Requiere Node >= 22.12 (recomendado Node 24).

```powershell
npm install
npm run dev
```

Abre la dirección que indique Vite en la terminal. Para revisar la compilación de producción:

```powershell
npm run build
npm run preview
```

## Organización

- `src/App.jsx`: orden de las secciones.
- `src/components/`: navegación, inicio, perfil, propuesta de valor, certificaciones, experiencia, proyectos, modales, contacto y pie.
- `src/context/PortfolioContext.jsx`: tema, idioma y proyecto abierto.
- `src/hooks/`: animaciones con limpieza de temporizadores y eventos.
- `src/data/content.js`: traducciones y ejemplos del editor.
- `src/data/pricing.js`: valores del cotizador.
- `src/styles/`: estilos originales activos, separados de las utilidades Tailwind.
- `public/assets/`: imágenes, certificados y CV, con las mismas URL `/assets/...`.

## Revisión antes de publicar

Revisar escritorio y móvil, tema claro/oscuro, cambio de idioma, pestañas del editor, cinco modales de proyectos, CV y cotizador. El formulario conserva su acción de Formspree y realiza un envío real al pulsar Enviar. El cotizador mantiene sus valores base originales y no recalcula según complejidad.

La traducción original es parcial: se conservan los textos españoles donde falta la traducción. Los enlaces de redes del pie que apuntan a `tu-usuario` proceden del original y siguen pendientes de completar.

En Vercel, este proyecto usa el preset **Vite**, comando `npm run build` y directorio de salida `dist`. Los cambios locales no se han publicado. El respaldo original está en `backup/antes-react-2026-11-12`.
