import {
    Globe,
    Smartphone,
    ShoppingCart,
    Palette,
    Server,
    Database,
    Cloud,
    Shield,
    Mail,
    MessageCircle,
    Linkedin,
    MapPin,
    Phone,
    Clock,
} from "lucide-react";

export const services = [
    {
        id: "#web-development",
        icon: Globe,
        title: "Web Development",
        description:
            "Custom websites and web applications built with modern technologies. Fast, responsive, and SEO-optimized.",
        features: [
            "React & Next.js",
            "TypeScript",
            "Performance Optimization",
            "SEO Best Practices",
        ],
        number: "01",
    },
    {
        id: "#mobile-first-design",
        icon: Smartphone,
        title: "Mobile-First & Responsive Design",
        description:
            "Designs that look stunning on all devices. We focus on user experience and seamless navigation.",
        features: [
            "Responsive Layouts",
            "Touch Optimization",
            "Cross-Platform Friendly",
            "Progressive Web Apps (PWA)",
        ],
        number: "02",
    },
    {
        id: "#e-commerce-development",
        icon: ShoppingCart,
        title: "E-Commerce Development",
        description:
            "Secure, user-friendly online stores with smooth checkout experiences. Custom or platform-based solutions.",
        features: [
            "Payment Gateway Integration",
            "Inventory Management",
            "Cart & Checkout Optimization",
            "Analytics & Reporting",
        ],
        number: "03",
    },
    {
        id: "#ui-ux-design",
        icon: Palette,
        title: "UI/UX Design",
        description:
            "Intuitive, attractive interfaces that keep users engaged. Focused on user-centered design.",
        features: [
            "Wireframing & Prototyping",
            "User Research",
            "Design Systems",
            "Interactive UI Components",
        ],
        number: "04",
    },
    {
        id: "#backend-apis",
        icon: Server,
        title: "Backend & APIs",
        description:
            "Robust server-side solutions and REST/GraphQL APIs for seamless frontend integration.",
        features: [
            "Node.js & Express",
            "RESTful & GraphQL APIs",
            "Database Integration",
            "Authentication & Authorization",
        ],
        number: "05",
    },
    {
        id: "#database-solutions",
        icon: Database,
        title: "Database Solutions",
        description:
            "Efficient and scalable database setups for your apps. SQL & NoSQL depending on project needs.",
        features: [
            "MongoDB & PostgreSQL",
            "Redis Caching",
            "Data Modeling & Migration",
            "Query Optimization",
        ],
        number: "06",
    },
    {
        id: "#saas-platforms",
        icon: Cloud,
        title: "SaaS & Custom Web Apps",
        description:
            "We build software platforms and custom web apps tailored to your business. Scalable, secure, and growth-ready.",
        features: [
            "Multi-Tenant Architecture",
            "Subscription & Payment Integration",
            "Role-Based Access Control",
            "Custom Dashboards & Analytics",
        ],
        number: "07",
    },
    {
        id: "#support-maintenance",
        icon: Shield,
        title: "Support & Maintenance",
        description:
            "Keep your apps running smoothly with ongoing updates, bug fixes, and performance monitoring.",
        features: [
            "Bug Fixes & Updates",
            "Performance Monitoring",
            "Security Patches",
            "Feature Enhancements",
        ],
        number: "08",
    },
];


export const projects = [
    {
        title: "Sewamahe",
        category: "SaaS",
        description:
            "Real-time expert consultation platform enabling users to connect with verified professionals through secure HD video calls, instant matching, and transparent, usage-based pricing.",
        techStack: [
            "React.js",
            "TypeScript",
            "Redux",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Socket.io",
            "Live Kit",
            "paygic",
            "Razorpay",
        ],
        image: "https://i.ibb.co.com/x8gmb0NZ/sewamahe.png",
        year: "2025",
        link: "https://sawamahe-frontend.vercel.app/",
    },
    {
        title: "CallBell",
        category: "SaaS",
        description:
            "QR-based real-time voice and video calling platform enabling instant, secure communication with enterprise-grade encryption, global connectivity, and usage-based plans.",
        techStack: [
            "React.js",
            "TypeScript",
            "Redux",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Socket.io",
            "Live Kit",
            "paygic",
            "Razorpay",
        ],
        image: "https://i.ibb.co.com/Z6QzdVwP/callbell.png",
        year: "2025",
        link: "https://callbell.in/",
    },
    {
        title: "PrimePix",
        category: "E-Commerce",
        description:
            "Modern e-commerce platform offering refurbished and new gadgets, electronics, and accessories with seamless shopping, secure checkout, and category-based product discovery.",
        techStack: ["Next.js", "TypeScript", "Sanity CMS", "Stripe"],
        image: "https://i.ibb.co.com/rGBphptb/Prime-Pix.png",
        year: "2025",
        link: "https://prime-pix-omega.vercel.app/",
    },
    {
        title: "Akatsuki",
        category: "E-Commerce",
        description:
            "AKATSUKI is an anime streaming and manga e-commerce platform where users can watch anime, buy manga, read blogs, and manage subscriptions through a secure dashboard with multiple payment options.",
        techStack: [
            "Next.js",
            "TypeScript",
            "MongoDB",
            "Stripe",
            "Paypal",
            "SSLCommerz",
        ],
        image: "https://i.ibb.co.com/YFb7DpQp/akatsuki.png",
        year: "2025",
        link: "https://akatsuki-ivory.vercel.app/",
    },
    {
        title: "Master Tools BD",
        category: "Subscription Platform",
        description:
            "Master Tools BD is a digital subscription platform that provides affordable access to premium learning tools like Udemy, Coursera, Codecademy, and more through custom education plans, all managed from one place.",
        techStack: [
            "React.js",
            "TypeScript",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Socket.io",
        ],
        image: "https://i.ibb.co.com/NHN49Z2/mastertools.png",
        year: "2025",
        client: "LearnPath Education",
        link: "https://mastertoolsbd.com/",
    },
    {
        title: "Save Life",
        category: "E-commerce / Healthcare",
        description:
            "Online pharmacy platform offering discreet purchasing of medicines with fast delivery, secure payments, and customer-focused service across Europe.",
        techStack: [
            "React.js",
            "TypeScript",
            "Redux",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Socket.io",
            "Live Kit",
            "paygic",
            "Razorpay",
        ],
        image: "https://i.ibb.co.com/G4gydBDK/savelife.png",
        year: "2025",
        link: "https://save-life-seven.vercel.app/",
    },
    {
        title: "ProjectPulse",
        category: "Internal Tool / Project Management",
        description:
            "Role-based project health tracking system that collects client feedback and employee weekly check-ins to automatically calculate project health scores and identify delivery risks early.",
        techStack: ["Next.js", "Tailwind CSS", "MongoDB", "Clerk", "REST API"],
        image: "https://i.ibb.co.com/7xfXZqDd/projectpulse.png",
        year: "2025",
        link: "https://project-pulse-phi.vercel.app/",
    },
    {
        title: "BookPartyPlace",
        category: "Event Booking / Marketplace",
        description:
            "Event venue discovery and booking platform helping users find, compare, and book venues for weddings, parties, corporate events, and celebrations across Hyderabad.",
        techStack: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "MongoDB",
            "REST API",
            "Map Integration",
        ],
        image: "https://i.ibb.co.com/vxLnKGqb/bookparty.png",
        year: "2025",
        link: "https://bookpartyplace-ui.vercel.app/",
    },
];

export const team = [
    {
        name: "Shamim Hossain",
        role: "Founder & Lead Developer",
        image: "https://i.ibb.co/Gfqj4gXZ/Shamim.jpg",
        bio: "Full-stack developer and tech entrepreneur with 3+ years of experience building scalable web applications and leading development teams. Passionate about clean code, modern JS frameworks, and seamless UX.",
        social: {
            linkedin: "https://www.linkedin.com/in/shamimhossain",
            github: "https://github.com/shamimhossain",
        },
    },
    {
        name: "Tanjil Ahmed",
        role: "Full Stack Developer",
        image: "https://i.ibb.co.com/PvMGv84j/tanjil.jpg",
        bio: "Full-stack developer with expertise in both frontend and backend technologies. Skilled in building responsive UIs, designing robust APIs, and creating seamless end-to-end solutions.",
        social: {
            linkedin: "https://www.linkedin.com/in/tanjilahmed",
            github: "https://github.com/tanjilahmed",
        },
    },
    {
        name: "Shajim Ahmed",
        role: "Full Stack Developer",
        image: "https://i.ibb.co/F4yQhhb3/Shajim.png",
        bio: "Full-stack developer specializing in scalable backend systems and interactive frontend applications. Experienced in Node.js, React/Next.js, and optimizing database architectures.",
        social: {
            linkedin: "https://www.linkedin.com/in/shajim-ahmed/",
            github: "https://github.com//OHshajim",
        },
    },
];

export const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "hello@strixdev.com",
        href: "mailto:hello@strixdev.com",
    },
    // {
    //     icon: Phone,
    //     label: "Phone",
    //     value: "+1 (416) 555-0123",
    //     href: "tel:+14165550123",
    // },
    {
        icon: MessageCircle,
        label: "WhatsApp",
        value: "+1 (416) 555-0123",
        href: "https://wa.me/14165550123",
    },
    // {
    //     icon: Linkedin,
    //     label: "LinkedIn",
    //     value: "Strix Dev",
    //     href: "https://linkedin.com/company/strixdev",
    // },
    {
        icon: MapPin,
        label: "Office",
        value: "Toronto, Canada",
        href: "#",
    },
    {
        icon: Clock,
        label: "Hours",
        value: "Mon-Fri 9AM-6PM EST",
        href: "#",
    },
];
