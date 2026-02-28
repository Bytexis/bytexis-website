export interface Project {
    id: number;
    slug: string;
    title: string;
    industry: string;
    services: string[];
    description: string;
    problem: string;
    solution: string;
    techStack: string[];
    results: string;
    imageUrl: string;
}

export const projects: Project[] = [
    {
        id: 1,
        slug: "shree-ganesh-enterprise",
        title: "Shree Ganesh Enterprise",
        industry: "Precision Manufacturing",
        services: ["Business Website", "B2B Catalog", "Web Development"],
        description:
            "A modern, performance-focused business website developed for a precision manufacturing company specializing in mould accessories like guide pillars and bushes.",
        problem:
            "The client needed to present their extensive mould accessory catalog clearly to B2B customers and generate quotes without complex e-commerce overhead.",
        solution:
            "We built a high-performance multi-page website with a structured product catalog, WhatsApp integration, and an inquiry-based quote system.",
        techStack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Vite"],
        results:
            "Streamlined B2B lead generation and improved brand trust through a professional, lightning-fast digital storefront.",
        imageUrl: "/assets/projects/sge.webp",
    },
    {
        id: 2,
        slug: "cfn-ice-cream-pos",
        title: "CFN Ice Cream Parlour POS",
        industry: "Retail / Food & Beverage",
        services: ["POS System", "Inventory Management", "Custom Software"],
        description:
            "An offline Point of Sale (POS) and inventory management system optimized for real-world shop environments with billing and stock tracking.",
        problem:
            "The shop needed a reliable system that works fully offline to handle peak-hour billing, kitchen order tickets (KOT), and inventory synchronization.",
        solution:
            "Developed a Python-based desktop application with an SQLite local database, supporting ESC/POS thermal printing and real-time stock deduction.",
        techStack: ["Python 3", "Tkinter", "SQLite", "ESC/POS Printing"],
        results:
            "Improved operational efficiency, reduced billing errors, and provided clear daily sales analytics for the shop management.",
        imageUrl: "/assets/projects/CFN.webp",
    },
    {
        id: 3,
        slug: "the-green-pantry",
        title: "The Green Pantry Kitchen",
        industry: "Health / Cloud Kitchen",
        services: ["Web Development", "UI/UX Design", "Frontend Engineering"],
        description:
            "A clean, performance-focused website built for a healthy cloud kitchen brand focusing on minimal design and smooth interactions.",
        problem:
            "A wellness food brand needed a web presence that matched their premium, healthy aesthetic with fast load times and an easy-to-navigate menu.",
        solution:
            "Built a lightweight React-based frontend with Framer Motion animations, client-side category filtering, and direct delivery platform integration.",
        techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Wouter"],
        results:
            "Delivered an instant-load user experience with a visually polished UI that effectively communicates the brand's wellness values.",
        imageUrl: "/assets/projects/Green_pantry.webp",
    },
];

export function getProjects(): Project[] {
    return projects;
}

export function getProject(id: number): Project | undefined {
    return projects.find((p) => p.id === id);
}
