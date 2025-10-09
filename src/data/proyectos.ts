import type { Proyecto } from "../interfaces/proyecto";
import arual from '../assets/arual.png';
import seller from '../assets/seller.png';
import lowitapp from '../assets/lowitapp.png';
import infusion from '../assets/infusion2.png';

export const projectsData: Proyecto[] = [
     {
      titulo: "ARUAL SPORT E-Commerce",
      descripcion:
        "Plataforma completa de comercio electrónico de ropa deportiva con carrito de compras, categorización, recomendación de prendas, pasarela de pagos y panel administrativo.",
      tecnologias: ["React", "Vite", "Node.js", "MongoDB"],
      imagen: arual
    },
    {
      titulo: "Seller Center Lowit",
      descripcion:
        "Panel de control interactivo para la creación y adiministración de pedidos, visualización de datos en tiempo real y reportes personalizados.",
      tecnologias: ["React", "TypeScript", "Node.js", "Express", "MongoDb", "Tailwind"],
      imagen: seller
    },
    {
      titulo: "App Lowit",
      descripcion:
        "Aplicación móvil para pedir comida, registro de usuarios, exploración de restaurantes, adquirir membresías, realizar pedidos diarios, seguimiento en tiempo real del pedido, historial de tus compra y gestión de tus datos personales.",
      tecnologias: ["React Native", "Node.js", "Express", "Tailwind", "MongoDb"],
      imagen: lowitapp
    },
    {
      titulo: "Restaurante Infusion ",
      descripcion:
        "Web para la creación de la carta del restaurante Infusión, registro de usuarios, visualización de la carta, realizar pedidos, creación y visualización de cartelera de peliculas, administracion y control de pedidos e inventario.",
      tecnologias: ["React", "Node.js", "Express", "MongoDb", "Tailwind"],
      imagen: infusion
    },
  ];