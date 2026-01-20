import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                "fade-up": {
                    from: { opacity: "0", transform: "translateY(40px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
                "scale-in": {
                    from: { opacity: "0", transform: "scale(0.9)" },
                    to: { opacity: "1", transform: "scale(1)" },
                },
                "slide-in": {
                    from: { opacity: "0", transform: "translateX(-50px)" },
                    to: { opacity: "1", transform: "translateX(0)" },
                },
                "line-reveal": {
                    to: { transform: "translateY(0)" },
                },
                marquee: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },
                "rotate-slow": {
                    from: { transform: "rotate(0deg)" },
                    to: { transform: "rotate(360deg)" },
                },
                "glitch-1": {
                    "0%, 100%": { transform: "translateX(0)" },
                    "20%": { transform: "translateX(-3px)" },
                    "40%": { transform: "translateX(3px)" },
                    "60%": { transform: "translateX(-2px)" },
                    "80%": { transform: "translateX(2px)" },
                },
                "glitch-2": {
                    "0%, 100%": { transform: "translateX(0)" },
                    "20%": { transform: "translateX(3px)" },
                    "40%": { transform: "translateX(-3px)" },
                    "60%": { transform: "translateX(2px)" },
                    "80%": { transform: "translateX(-2px)" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "fade-up": "fade-up 0.8s cubic-bezier(0.4, 0, 0, 1) forwards",
                "scale-in": "scale-in 0.6s cubic-bezier(0.4, 0, 0, 1) forwards",
                "slide-in": "slide-in 0.8s cubic-bezier(0.4, 0, 0, 1) forwards",
                "line-reveal":
                    "line-reveal 0.8s cubic-bezier(0.4, 0, 0, 1) forwards",
                marquee: "marquee 20s linear infinite",
                "rotate-slow": "rotate-slow 20s linear infinite",
                "glitch-1": "glitch-1 2s infinite linear alternate-reverse",
                "glitch-2": "glitch-2 3s infinite linear alternate-reverse",
            },
            fontFamily: {
                "space-grotesk": ["Space Grotesk", "sans-serif"],
                syne: ["Syne", "sans-serif"],
                "jetbrains-mono": ["JetBrains Mono", "monospace"],
            },
        },
    },
    plugins: [],
};

export default config;
