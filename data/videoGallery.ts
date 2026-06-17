
export interface VideoProject {
  id: number;
  title: string;
  category: string;
  videoSrc: string;
  posterSrc: string;
  size: 'small' | 'tall' | 'wide' | 'large';
}

export const videoGalleryData: VideoProject[] = [
  {
    id: 1,
    title: "Residencial El Viso",
    category: "Arquitectura Prime",
    videoSrc: "https://v.ftcdn.net/06/18/84/84/700_F_618848413_2C8uY4l5S0zN9Kz6G8p8wW2j5z1r6f1h_ST.mp4", // Placeholder de video arquitectónico
    posterSrc: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    size: "large"
  },
  {
    id: 2,
    title: "Ático Jerónimos",
    category: "Interiorismo",
    videoSrc: "https://v.ftcdn.net/05/56/64/46/700_F_556644685_L2WvO9kGzK0zW7j5z1r6f1h9S0zN9Kz.mp4",
    posterSrc: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    size: "tall"
  },
  {
    id: 3,
    title: "Villa La Finca",
    category: "Nueva Planta",
    videoSrc: "https://v.ftcdn.net/04/82/38/38/700_F_482383838_L2WvO9kGzK0zW7j5z1r6f1h9S0zN9Kz.mp4",
    posterSrc: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop",
    size: "small"
  },
  {
    id: 4,
    title: "Concept Salamanca",
    category: "Inversión",
    videoSrc: "https://v.ftcdn.net/03/45/38/38/700_F_345383838_L2WvO9kGzK0zW7j5z1r6f1h9S0zN9Kz.mp4",
    posterSrc: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    size: "wide"
  }
];
