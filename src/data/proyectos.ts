import type { Proyecto } from "../interfaces/proyecto";
import arual from '../assets/arual.png';
import seller from '../assets/seller.png';
import lowitapp from '../assets/lowitapp.png';

export const projectsData: Proyecto[] = [
     {
      titulo: "ARUAL SPORT E-Commerce",
      descripcion:
        "Plataforma completa de comercio electrónico con carrito de compras, categorización, pasarela de pagos y panel administrativo.",
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
        "Aplicación móvil para pedir comida, contien registro de usuarios, exploración de restaurantes, puedes adquirir membresías con beneficios, realizar pedidos diarios, seguimiento en tiempo real del pedido, historial detallado de tus compras, gestión de tus datos personales y de ubicación.",
      tecnologias: ["React Native", "Node.js", "Express", "Tailwind", "MongoDb"],
      imagen: lowitapp
    },
    {
      titulo: "Sistema de Gestión",
      descripcion:
        "CRM completo para gestión de clientes, ventas y seguimiento de proyectos empresariales.",
      tecnologias: ["React", "Node.js", "MySQL"],
      imagen:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
    },
  ];