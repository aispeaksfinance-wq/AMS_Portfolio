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
        id: 'restaurant-app',
        title: 'Demo_Restaurant',
        description: 'An AI-powered restaurant recommendation engine with smart insights.',
        category: 'Full Stack App',
        image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800',
        tags: ['Next.js', 'Supabase', 'Gemini AI', 'Tailwind'],
        link: 'https://demo-resturant-blush.vercel.app/',
        details: {
            problem: 'Users struggle to find quality dining options tailored to their specific cravings and location.',
            solution: 'Built a smart recommendation engine that uses AI to analyze preferences and provide curated dining insights.',
            process: ['Database Design', 'AI Integration', 'Frontend Development', 'API Orchestration']
        }
    },
    {
        id: 'luxe-dining',
        title: 'Demo_Dinning',
        description: 'A premium restaurant landing page with elegant animations and reservation system.',
        category: 'Web Design',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
        tags: ['React', 'Framer Motion', 'Tailwind'],
        link: 'https://restaurant-website-d-xotz.bolt.host/',
        details: {
            problem: 'Traditional restaurant websites lack the visual elegance and smooth experience that high-end diners expect.',
            solution: 'Created a cinematic, high-performance landing page that showcases the culinary experience through motion and minimalist design.',
            process: ['Visual Storytelling', 'Motion Graphics', 'Responsive Design', 'Smooth Scroll Implementation']
        }
    },
    {
        id: 'crafted-kiln',
        title: 'Demo_Tiles',
        description: 'A beautifully designed e-commerce experience for handmade ceramics and lifestyle products.',
        category: 'E-commerce',
        image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=800',
        tags: ['React', 'E-commerce', 'Tailwind', 'Framing'],
        link: 'https://crafted-kiln-commerce.lovable.app/',
        details: {
            problem: 'The artisanal brand needed a digital home that matched the tactile and aesthetic quality of their handmade products.',
            solution: 'Designed a minimalist, high-conversion storefront that uses high-end photography and smooth transitions to tell the brand story.',
            process: ['Brand Alignment', 'UI/UX Design', 'Storefront Development', 'Motion Integration']
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
