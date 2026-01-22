import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
const team = [
    {
        name: "Alex Chen",
        role: "Founder & Lead Developer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&sat=-100",
        bio: "Full-stack developer with 10+ years of experience. Passionate about clean code and user-centric design.",
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#",
        },
    },
    {
        name: "Sarah Mitchell",
        role: "UI/UX Designer",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&sat=-100",
        bio: "Creative designer focused on crafting beautiful, intuitive interfaces that users love.",
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#",
        },
    },
    {
        name: "James Rodriguez",
        role: "Backend Engineer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&sat=-100",
        bio: "Backend specialist with expertise in scalable architectures and database optimization.",
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#",
        },
    },
    {
        name: "Emily Watson",
        role: "Project Manager",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&sat=-100",
        bio: "Experienced PM ensuring projects are delivered on time and exceed client expectations.",
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#",
        },
    },
];

const Team = () => {
    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">
                            Team
                        </span>
                        <div className="w-16 h-px bg-foreground/30" />
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight">
                        Meet Our Team
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative overflow-hidden mb-6">
                                <div className="aspect-square">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a
                                        href={member.social.linkedin}
                                        className="w-10 h-10 border border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                                    >
                                        <Linkedin className="w-4 h-4" />
                                    </a>
                                    <a
                                        href={member.social.twitter}
                                        className="w-10 h-10 border border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                                    >
                                        <Twitter className="w-4 h-4" />
                                    </a>
                                    <a
                                        href={member.social.github}
                                        className="w-10 h-10 border border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                                    >
                                        <Github className="w-4 h-4" />
                                    </a>
                                </div>
                                <div className="absolute top-2 right-2 w-6 h-6 border-t border-r border-foreground/40" />
                            </div>
                            <h3 className="text-xl font-display mb-1">
                                {member.name}
                            </h3>
                            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
                                {member.role}
                            </p>
                            <p className="text-sm text-muted-foreground">
                                {member.bio}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;