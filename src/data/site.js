// src/data/site.js
const env = import.meta.env;

export const SITE = {
  name: 'ON Marketing Digital',
  shortName: 'ON',
  tagline: 'Hacemos que te encuentren.',
  description:
    'Ordenamos tu presencia digital para que te encuentren en Google, tu negocio se vea profesional y ninguna consulta se pierda. Para pequeños negocios, comercios y profesionales de Argentina.',
  zona: 'Buenos Aires, Argentina',
  ogImage: '', // PENDIENTE: ruta a una imagen 1200x630 en /public, ej. '/og.png'
  whatsapp: (env.PUBLIC_WHATSAPP || '').replace(/\D/g, ''),
  email: (env.PUBLIC_EMAIL || '').trim(),
  instagram: (env.PUBLIC_INSTAGRAM || '').trim(),
  facebook: (env.PUBLIC_FACEBOOK || '').trim(),
  youtube: (env.PUBLIC_YOUTUBE || '').trim(),
  linkedin: (env.PUBLIC_LINKEDIN || '').trim(),
  formEndpoint: (env.PUBLIC_FORM_ENDPOINT || '').trim(),
  formAccessKey: (env.PUBLIC_FORM_ACCESS_KEY || '').trim(),
};

export const WA_MESSAGE =
  'Hola, vengo de la web de ON Marketing Digital y quisiera consultar por...';

/** Devuelve el enlace de WhatsApp o null si no hay número configurado. */
export function whatsappUrl(msg = WA_MESSAGE) {
  return SITE.whatsapp
    ? `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`
    : null;
}

/** Enlace para "Hablemos": WhatsApp si existe; si no, la sección de contacto. */
export const ctaHref = () => whatsappUrl() ?? '/#contacto';

export const NAV = [
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Cómo trabajamos', href: '/#como-trabajamos' },
  { label: 'Preguntas', href: '/#preguntas' },
  { label: 'Contacto', href: '/#contacto' },
];

export const HOME = {
  dolores: [
    { t: 'Te buscan, pero no te encuentran.', d: 'No aparecés cuando alguien necesita justo lo que ofrecés.' },
    { t: 'Publicás, pero nadie consulta.', d: 'Sin un objetivo claro, las redes se vuelven tiempo perdido.' },
    { t: 'Llegan mensajes, pero se pierden.', d: 'Un WhatsApp desordenado y las respuestas lentas hacen que se escapen clientes.' },
  ],
  etiquetasDolor: [
    'Te preguntan siempre lo mismo',
    'Anotás turnos y pedidos a mano',
    'No sabés qué clientes dejaron de venir',
    'Tu web o tus redes no se ven profesionales',
    'Cargás los mismos datos en varios lados',
  ],
  pasos: [
    { n: '01', t: 'Conversamos', d: 'Entendemos cómo funciona tu negocio y qué te está frenando.' },
    { n: '02', t: 'Propuesta clara', d: 'Te explicamos qué proponemos y por qué, en palabras simples.' },
    { n: '03', t: 'Prueba', d: 'Cuando se puede, te mostramos algo funcionando antes de avanzar.' },
    { n: '04', t: 'Puesta en marcha', d: 'Lo dejamos andando y te enseñamos a usarlo.' },
    { n: '05', t: 'Seguimiento', d: 'Revisamos que funcione y seguimos mejorando con vos.' },
  ],
  proyecto: {
    // Poner en null para ocultar la sección.
    titulo: 'Romero Luthier',
    texto: 'Web de recursos gratuitos para músicos: afinador en el navegador, guías prácticas y descargas.',
    url: 'https://romero-recursos.vercel.app/',
  },
  porQue: [
    { t: 'Sin tecnicismos', d: 'Te explicamos todo en simple. Si algo es complicado, nos ocupamos nosotros.' },
    { t: 'Te enseñamos a usarlo', d: 'No te dejamos una caja negra: aprendés a manejar lo que armamos.' },
    { t: 'Lo tuyo es tuyo', d: 'Tus datos, cuentas y dominios quedan a tu nombre, siempre que sea posible.' },
    { t: 'Te acompañamos después', d: 'No desaparecemos al entregar: seguimos mejorando con vos.' },
  ],
  rubros: [
    'Comercios', 'Talleres', 'Veterinarias', 'Canchas', 'Barberías', 'Odontólogos',
    'Plomeros', 'Pintores', 'Músicos y luthiers', 'Profesionales independientes',
  ],
};
