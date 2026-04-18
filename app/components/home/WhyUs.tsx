"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Header from "../Header";

const points = [
    {
        number: "01",
        title: "JavaScript End-to-End",
        desc: "One language. One mental model. Our full JS/TS stack means no context switching between teams — your frontend dev understands your backend and vice versa. Faster builds, fewer bugs, cheaper hires.",
        proof: "Single-language codebase across all layers",
    },
    {
        number: "02",
        title: "We Own the Outcome",
        desc: "We don't disappear after the handoff. We write documentation your team can follow, build with maintainability in mind, and stay available post-launch. We succeed when you succeed.",
        proof: "30-day post-launch support included",
    },
    {
        number: "03",
        title: "No Bloat, No Middlemen",
        desc: "You talk directly to the engineers building your product — not an account manager passing messages. Decisions get made in hours, not days.",
        proof: "Direct async communication via Slack or Discord",
    },
    {
        number: "04",
        title: "Security & Auth Done Right",
        desc: "We implement Clerk, NextAuth, JWT, and RBAC properly from day one. No bolted-on auth that breaks at scale. Payment flows go through Stripe and PayPal with webhook handling and idempotency.",
        proof: "Auth + payments on every production project",
    },
    {
        number: "05",
        title: "Designed to Scale",
        desc: "MongoDB for flexible document models, PostgreSQL for relational integrity, Redis for caching, Firebase for real-time — we pick the right database for the job, not the trending one.",
        proof: "Multi-DB architecture experience across projects",
    },
    {
        number: "06",
        title: "Shipped. Not Just Built.",
        desc: "CI/CD, Docker, Vercel, AWS, monitoring, environment configs — launch is part of the scope, not an afterthought. Your product goes live in a state you can maintain.",
        proof: "Every project delivered with deployment pipeline",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            delay: i * 0.04,
        },
    }),
};

export const WhyUs = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="why-us" className="py-24 relative" ref={ref}>
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.025]"
                style={{
                    backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                                      linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
                    backgroundSize: "80px 80px",
                }}
            />

            <div className="container mx-auto px-6">
                <Header
                    tag="05"
                    label="Why Us"
                    titleLine1="Precision Over"
                    titleLine2="Promises"
                    desc="We don't sell you on slides. Here's exactly what makes working with us different — in plain language."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {points.map((point, i) => (
                        <motion.div
                            key={point.number}
                            custom={i}
                            variants={fadeUp}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className="group relative rounded-2xl p-6 transition-all duration-300"
                            style={{
                                background: "hsl(var(--background))",
                                border: "1px solid hsl(var(--foreground) / 0.08)",
                            }}
                            whileHover={{
                                borderColor: "hsl(var(--foreground) / 0.2)",
                                y: -4,
                            }}
                        >
                            {/* faded index */}
                            <h3
                                className="absolute top-4 right-5 glow-text text-5xl font-bold opacity-20 leading-none select-none pointer-events-none transition-opacity duration-300 group-hover:opacity-40"
                                style={{
                                    color: "hsl(var(--foreground))",
                                }}
                            >
                                {point.number}
                            </h3>

                            <h3 className="font-display text-lg font-semibold tracking-tight mb-3 pr-8">
                                {point.title}
                            </h3>

                            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                                {point.desc}
                            </p>

                            {/* proof line */}
                            <div
                                className="flex items-center gap-2 pt-4"
                                style={{
                                    borderTop:
                                        "1px solid hsl(var(--foreground) / 0.07)",
                                }}
                            >
                                <span
                                    className="w-4 h-4 rounded-full flex items-center justify-center text-[0.55rem] shrink-0"
                                    style={{
                                        background:
                                            "hsl(var(--foreground) / 0.08)",
                                        color: "hsl(var(--foreground) / 0.6)",
                                    }}
                                >
                                    ✓
                                </span>
                                <span className="font-mono text-[0.65rem] text-muted-foreground">
                                    {point.proof}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
