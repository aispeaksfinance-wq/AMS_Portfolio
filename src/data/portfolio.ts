export interface Project {
    id: string;
    title: string;
    description: string;
    category: string;
    image: string;
    tags: string[];
    link: string;
    details: {
        problem: string;
        solution: string;
        process: string[];
    };
}

export interface Skill {
    name: string;
    level: number;
    category: 'Design' | 'Frontend' | 'Tools' | 'Others';
    icon?: string;
}

export interface Service {
    title: string;
    description: string;
    icon: string;
}

export interface Testimonial {
    name: string;
    role: string;
    company: string;
    content: string;
    avatar: string;
}

export const projects: Project[] = [
    {
        id: 'lumina-saas',
        title: 'Lumina Analytics',
        description: 'A premium SaaS dashboard for AI-driven business insights.',
        category: 'Web Design',
        image: '/projects/project-1.webp',
        tags: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
        link: '#',
        details: {
            problem: 'Complex data was difficult for users to interpret, leading to low engagement.',
            solution: 'Designed a minimalist dashboard with clear visual hierarchy and interactive charts.',
            process: ['User Research', 'Wireframing', 'High-fidelity UI Design', 'Interactive Prototyping']
        }
    },
    {
        id: 'eco-store',
        title: 'EcoStore E-commerce',
        description: 'A sustainable fashion marketplace with a focus on minimalism.',
        category: 'E-commerce',
        image: '/projects/project-2.webp',
        tags: ['React', 'Shopify', 'Three.js'],
        link: '#',
        details: {
            problem: 'The client needed a platform that reflected their sustainable values while maintaining high conversion rates.',
            solution: 'Built a lightning-fast marketplace using a headless commerce approach with clean aesthetics.',
            process: ['Market Analysis', 'Brand Identity', 'Frontend Development', 'Performance Optimization']
        }
    },
    {
        id: 'nexus-app',
        title: 'Nexus Mobile App',
        description: 'A social networking app focused on professional networking for designers.',
        category: 'Mobile App',
        image: '/projects/project-3.webp',
        tags: ['React Native', 'Firebase', 'Sketch'],
        link: '#',
        details: {
            problem: 'Existing platforms felt too corporate and lacked creative inspiration.',
            solution: 'Created a sleek mobile experience that prioritizes visual content and peer interaction.',
            process: ['UX Audit', 'Component Design', 'App Development', 'Beta Testing']
        }
    }
];

export const skills: Skill[] = [
    { name: 'Figma', level: 95, category: 'Design' },
    { name: 'Adobe XD', level: 90, category: 'Design' },
    { name: 'Photoshop', level: 85, category: 'Design' },
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'Next.js', level: 95, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 98, category: 'Frontend' },
    { name: 'TypeScript', level: 88, category: 'Frontend' },
    { name: 'Framer Motion', level: 92, category: 'Others' }
];

export const services: Service[] = [
    {
        title: 'Web Design',
        description: 'Modern, intuitive, and conversion-focused designs tailored to your brand.',
        icon: 'layout'
    },
    {
        title: 'Frontend Development',
        description: 'Pixel-perfect, responsive, and high-performance websites built with the latest tech.',
        icon: 'code'
    },
    {
        title: 'UI/UX Strategy',
        description: 'Strategic design thinking that improves user satisfaction and business goals.',
        icon: 'users'
    }
];

export const testimonials: Testimonial[] = [
    {
        name: 'Sarah Johnson',
        role: 'CEO',
        company: 'Lumina Tech',
        content: 'The portfolio design surpassed our expectations. The attention to detail and user experience is world-class.',
        avatar: '/testimonials/sarah.webp'
    },
    {
        name: 'Michael Chen',
        role: 'Product Manager',
        company: 'EcoFlow',
        content: 'A true professional. The ability to translate complex requirements into beautiful interfaces is rare.',
        avatar: '/testimonials/michael.webp'
    }
];
