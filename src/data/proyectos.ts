import type { Proyecto } from "../interfaces/proyecto";
import arual from '../assets/arual.png';
import seller from '../assets/seller.png';
import lowitapp from '../assets/lowitapp.png';

export const projectsData: Proyecto[] = [
     {
      titulo: "ARUAL SPORT E-Commerce",
      descripcion:
        "Plataforma completa de comercio electrónico con carrito de compras, pasarela de pagos y panel administrativo.",
      tecnologias: ["React", "Vite", "Node.js", "MongoDB"],
      imagen: arual
    },
    {
      titulo: "Seller Center Lowit",
      descripcion:
        "Panel de control interactivo para la adiministración de pedidos, visualización de datos en tiempo real y reportes personalizados.",
      tecnologias: ["React", "TypeScript", "Node.js", "Express", "MongoDb", "Tailwind"],
      imagen: seller
    },
    {
      titulo: "Red Social Profesional",
      descripcion:
        "Aplicación web para networking profesional con chat en tiempo real y sistema de conexiones.",
      tecnologias: ["Next.js", "Socket.io", "PostgreSQL"],
      imagen:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
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