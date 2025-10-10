import type { Proyecto } from "../interfaces/proyecto";
import arual from "../assets/arual.png";
import seller from "../assets/seller.png";
import lowitapp from "../assets/lowitapp.png";
import infusion from "../assets/infusion2.png";
import ponderados from "../assets/ponderados.png";
import encuesta from "../assets/encuesta.png";

export const projectsData: Proyecto[] = [
  {
    titulo: "ARUAL SPORT",
    descripcion:
      "Plataforma completa de comercio electrónico de ropa deportiva con carrito de compras, categorización, recomendación de prendas, pasarela de pagos y panel administrativo.",
    tecnologias: ["React", "Vite", "Node.js", "MongoDB"],
    imagen: arual,
    urlDemo: "https://arual-sport.netlify.app/",
    urlCodigo: "https://github.com/luis13xd/arual",
  },
  {
    titulo: "Seller Center Lowit",
    descripcion:
      "Panel de control interactivo para la creación y adiministración de pedidos, visualización de datos en tiempo real y reportes personalizados.",
    tecnologias: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDb",
      "Tailwind",
    ],
    imagen: seller,
    urlDemo: "https://sellers.lowit.com.co/login",
    urlCodigo: "https://gitlab.com/lowit-team/lowit-sellers",
  },
  {
    titulo: "App Lowit",
    descripcion:
      "Aplicación móvil para pedir comida, registro de usuarios, exploración de restaurantes, adquirir membresías, realizar pedidos diarios, seguimiento en tiempo real del pedido, historial de tus compra y gestión de tus datos personales.",
    tecnologias: ["React Native", "Node.js", "Express", "Tailwind", "MongoDb"],
    imagen: lowitapp,
    urlDemo: "https://play.google.com/store/apps/details?id=com.lowit.AppUsers",
    urlCodigo: "https://gitlab.com/lowit-team/lowit-app-users",
  },
  {
    titulo: "Restaurante Infusion ",
    descripcion:
      "Web para la creación de la carta del restaurante Infusión, registro de usuarios, visualización de la carta, realizar pedidos, creación y visualización de cartelera de peliculas, administracion y control de pedidos e inventario.",
    tecnologias: ["React", "Node.js", "Express", "MongoDb", "Tailwind"],
    imagen: infusion,
    urlDemo: "https://restauranteinfusion.netlify.app/",
    urlCodigo: [
      "https://github.com/luis13xd/frontend-restaurante",
      "https://github.com/luis13xd/backend-restaurante",
    ],
  },
  {
    titulo: "Ponderados USCO",
    descripcion:
      "Web usada para que los aspirantes puedan calcular una estimación de su puntaje ponderado de ingreso a una carrera, cuenta con su panel administrador para ajustar puntajes y carreras de la universidad.",
    tecnologias: ["Angular", "Java", "Spring Boot", "PostgreSQL", "Docker"],
    imagen: ponderados,
    urlDemo: "https://restauranteinfusion.netlify.app/",
    urlCodigo: [
      "https://github.com/luis13xd/frontend-restaurante",
      "https://github.com/luis13xd/backend-restaurante",
    ],
  },
  {
    titulo: "Módulo de encuestas P.O.P",
    descripcion:
      "Plataforma completa para hacer encuestas que analiza las respuestas para conocer la demanda y afinidad real de los estudiantes hacia los programas existentes, arrojan como resultado graficos, tablas y porcentajes.",
    tecnologias: ["Angular", "Java", "Spring Boot", "PostgreSQL", "Docker"],
    imagen: encuesta,
    urlDemo: "https://restauranteinfusion.netlify.app/",
    urlCodigo: [
      "https://github.com/luis13xd/frontend-restaurante",
      "https://github.com/luis13xd/backend-restaurante",
    ],
  },
];
