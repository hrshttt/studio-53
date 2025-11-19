import { 
  PenTool, 
  Layers, 
  Hammer, 
  Trees, 
  MonitorPlay, 
  ClipboardList,
  Lightbulb,
  Award,
  Users,
  HeartHandshake
} from "lucide-react";

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const SERVICES = [
  {
    title: "Architecture Planning",
    description: "Conceptualizing structural masterpieces with precision and artistic vision.",
    icon: PenTool,
  },
  {
    title: "Interior Styling",
    description: "Curating bespoke environments that breathe luxury and comfort.",
    icon: Layers,
  },
  {
    title: "Renovation / Remodel",
    description: "Transforming existing spaces into modern architectural statements.",
    icon: Hammer,
  },
  {
    title: "Landscape Design",
    description: "Harmonizing nature with structure for serene outdoor experiences.",
    icon: Trees,
  },
  {
    title: "3D Visualization",
    description: "Hyper-realistic renders to visualize your dream before construction.",
    icon: MonitorPlay,
  },
  {
    title: "Construction Consulting",
    description: "Expert oversight ensuring execution matches the design intent.",
    icon: ClipboardList,
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "The Oberoi Villa",
    category: "Residential",
    image: "https://picsum.photos/seed/arch1/800/1000",
  },
  {
    id: 2,
    title: "Azure Boutique Hotel",
    category: "Hospitality",
    image: "https://picsum.photos/seed/arch2/800/1000",
  },
  {
    id: 3,
    title: "Fateh Sagar Loft",
    category: "Interior",
    image: "https://picsum.photos/seed/arch3/800/1000",
  },
  {
    id: 4,
    title: "Minimalist Pavilion",
    category: "Landscape",
    image: "https://picsum.photos/seed/arch4/800/1000",
  },
  {
    id: 5,
    title: "Urban Concrete Home",
    category: "Residential",
    image: "https://picsum.photos/seed/arch5/800/1000",
  },
  {
    id: 6,
    title: "Skyline Office",
    category: "Commercial",
    image: "https://picsum.photos/seed/arch6/800/1000",
  },
];

export const USP = [
  {
    title: "Innovative Designs",
    description: "Pushing boundaries with avant-garde concepts.",
    icon: Lightbulb,
  },
  {
    title: "High-Quality Delivery",
    description: "Uncompromising standards in materials and finish.",
    icon: Award,
  },
  {
    title: "Experienced Team",
    description: "Decades of combined expertise in Udaipur architecture.",
    icon: Users,
  },
  {
    title: "Client-Centric",
    description: "Your vision is the blueprint of our creation.",
    icon: HeartHandshake,
  },
];

export const CONTACT_INFO = {
  phone: "+91 987 654 3210",
  email: "hello@fiftythreestudio.com",
  address: "53, Lake City Road, Near Saheliyon-ki-Bari, Udaipur, Rajasthan 313001",
  socials: ["Instagram", "LinkedIn", "Pinterest", "Behance"]
};