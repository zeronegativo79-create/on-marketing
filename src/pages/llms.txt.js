// src/pages/llms.txt.js
import { SITE } from '../data/site.js';
import { SERVICIOS } from '../data/servicios.js';

export const GET = ({ site }) => {
  const base = site.href.replace(/\/$/, '');
  const body = `# ${SITE.name}

> ${SITE.description}

Empresa de soluciones digitales para pequeños negocios, comercios y profesionales de Argentina. Trabajamos sin tecnicismos: conversamos, proponemos algo claro, lo ponemos en marcha y acompañamos después. No publicamos precios: cada propuesta depende del negocio.

## Servicios

${SERVICIOS.map((s) => `- [${s.nombre}](${base}/servicios/${s.slug}): ${s.linea}`).join('\n')}

## Más información

- [Inicio](${base}/)
- [Preguntas frecuentes](${base}/#preguntas)
- [Contacto](${base}/#contacto)
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
