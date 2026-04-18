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
        role: "CEO & Founder",
        image: "https://i.ibb.co/Gfqj4gXZ/Shamim.jpg",
        bio: "Vision-driven founder leading Strix Devs with a focus on long-term product quality, strong client relationships, and building technology that actually solves real business problems.",
    },
    {
        name: "Shajim Ahmed",
        role: "Lead Engineer",
        image: "https://i.ibb.co/F4yQhhb3/Shajim.png",
        bio: "Leads architecture and backend systems with a strong focus on scalability, performance, and clean engineering practices. Turns complex ideas into reliable production software.",
    },
    {
        name: "Tanjil Ahmed",
        role: "Full-Stack Developer",
        image: "https://i.ibb.co.com/PvMGv84j/tanjil.jpg",
        bio: "Builds seamless end-to-end web experiences, from polished UI to powerful APIs. Passionate about shipping fast without sacrificing code quality.",
    },
    {
        name: "Mirajul Islam Fahim",
        role: "Frontend Developer",
        image: "https://i.ibb.co.com/tTB7RnrR/Whats-App-Image-2026-04-18-at-11-31-56-PM.jpg",
        bio: "Crafts modern, responsive interfaces that feel smooth and intuitive. Focused on performance, accessibility, and pixel-perfect execution.",
    },
    {
        name: "Tanha Amin",
        role: "UI/UX Designer",
        image: "https://i.ibb.co.com/vvD21TpJ/team-1.jpg",
        bio: "Designs clean and user-focused digital experiences. Blends research, usability, and aesthetics to create interfaces people genuinely enjoy using.",
    },
    {
        name: "Ovi Saha",
        role: "BackEnd Developer",
        image: "https://i.ibb.co.com/pvV4TqPF/team-1.png",
        bio: "Supports product delivery across the stack, contributing to new features, optimizations, and continuous improvement of our development workflow.",
    },
];

export const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "shamimweb78@gmail.com",
        href: "mailto:shamimweb78@gmail.com",
    },
    {
        icon: MessageCircle,
        label: "WhatsApp",
        value: "+1 (437) 955-7898 / +880 1882-862391",
        href: "https://wa.me/+8801882862391",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        value: "Strix Devs",
        href: "https://www.linkedin.com/company/strixdevs",
    },
    {
        icon: MapPin,
        label: "Office",
        value: "Toronto, Canada",
        href: "#",
    },
];

export const steps = [
    {
        number: "01",
        phase: "Discovery",
        title: "Understand Before We Code",
        desc: "We start by understanding your business, users, and monetization goals. Instead of guessing, we ask the right questions so the product solves real problems from day one.",
        deliverable: "Product roadmap + clear project scope",
    },
    {
        number: "02",
        phase: "Planning & Architecture",
        title: "Build the Blueprint",
        desc: "We design the full system before development begins — tech stack, database structure, security, scalability, and integrations. This prevents costly rebuilds later.",
        deliverable: "System architecture + DB schema + API plan",
    },
    {
        number: "03",
        phase: "UI/UX Design",
        title: "Design That Converts",
        desc: "Clean, modern, and conversion-focused interfaces. We design flows that feel simple for users but powerful under the hood.",
        deliverable: "Wireframes + high-fidelity UI design",
    },
    {
        number: "04",
        phase: "Development",
        title: "Build in Fast Iterations",
        desc: "We develop in short sprints with regular demos and feedback loops. You always know what’s happening without needing to micromanage.",
        deliverable: "Weekly progress builds + demo walkthroughs",
    },
    {
        number: "05",
        phase: "Testing & Launch",
        title: "Go Live the Right Way",
        desc: "Performance optimization, bug fixing, SEO basics, CI/CD setup, and production deployment. Launch day should feel exciting, not stressful.",
        deliverable: "Live deployment + documentation + handoff",
    },
    {
        number: "06",
        phase: "Support & Growth",
        title: "We Don’t Disappear After Launch",
        desc: "We stay available for improvements, scaling, new features, and technical support. Your product keeps evolving as your business grows.",
        deliverable: "Ongoing support + future feature roadmap",
    },
];
export const faqs = [
    {
        q: "What services do you actually provide?",
        a: "We design and build complete web products — SaaS apps, dashboards, admin panels, e-commerce platforms, internal tools, and custom business systems. From idea → design → development → deployment → support. You don’t need to hire multiple people. We handle the full lifecycle.",
    },
    {
        q: "Can you build my idea from scratch?",
        a: "Yes. Many of our clients start with just an idea and a problem to solve. We help validate the idea, plan the features, design the product, and build the MVP. You don’t need technical knowledge — we guide the entire process.",
    },
    {
        q: "How long does it take to build a product?",
        a: "Small projects take 2–4 weeks. A serious MVP usually takes 4–8 weeks. Larger platforms can take 2–3 months+. The timeline depends on scope and feedback speed. We always provide a realistic roadmap before starting.",
    },
    {
        q: "How much does a typical project cost?",
        a: "Most MVP projects fall between $1,000–$5,000 depending on features and complexity. Larger platforms are quoted after discovery. We focus on building the most valuable version first so you don’t overspend early.",
    },
    {
        q: "Do you work with startups and international clients?",
        a: "Yes — most of our clients are startups, founders, and small companies from the US, Europe, and the Middle East. We work fully remote and communicate through Slack, Notion, and weekly calls.",
    },
    {
        q: "Will I own the source code and product?",
        a: "100%. You get full ownership of the codebase, repository access, documentation, and deployment credentials. No lock-in, no hidden dependencies.",
    },
    {
        q: "What happens after the project is finished?",
        a: "We include 30 days of free post-launch support to fix bugs and handle deployment issues. After that, you can hire us on a monthly retainer for maintenance, new features, or scaling support.",
    },
    {
        q: "Can you improve or fix an existing project?",
        a: "Yes. Many clients come to us with unfinished or messy codebases. We start with a technical audit, explain what’s wrong, and create a safe plan to refactor, stabilize, and continue development.",
    },
    {
        q: "How do payments work?",
        a: "Smaller projects: 50% upfront, 50% on completion. Larger projects: milestone-based payments. This keeps everything transparent and fair for both sides.",
    },
    {
        q: "Why should we choose you instead of hiring a freelancer?",
        a: "Because we operate like a long-term technical partner. We think about scalability, performance, security, and maintainability from day one — not just finishing tasks. Our goal is to help you build a product that can grow, not just launch.",
    },
];