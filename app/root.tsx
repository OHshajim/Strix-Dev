import {
    isRouteErrorResponse,
    Meta,
    Links,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";

/* ─── Site-wide SEO constants ─────────────────────────────────── */
const SITE_URL    = "https://yourdomain.com";          // ← replace
const COMPANY     = "YourCompany";                      // ← replace
const TAGLINE     = "We Build Software That Scales";    // ← replace
const DESCRIPTION =
    "YourCompany is a full-stack software development studio specializing in " +
    "React, Next.js, Node.js, and cloud-native architectures. We design, build, " +
    "and ship production-grade web applications for startups and enterprises.";
const OG_IMAGE    = "https://yourdomain.com/og-image.png"; // 1200×630 recommended
const TWITTER     = "@yourhandle";                      // ← replace or remove

/* ─── Route meta export (React Router v7 pattern) ────────────── */
export function meta(): Route.MetaDescriptors {
    return [
        { title: `${COMPANY} — ${TAGLINE}` },
        { name: "description",        content: DESCRIPTION },
        { name: "robots",             content: "index, follow" },
        { name: "googlebot",          content: "index, follow, max-snippet:-1, max-image-preview:large" },

        /* ── Keywords ── */
        {
            name: "Stix Devs",
            content: [
                "software development company",
                "full stack development",
                "React developer",
                "Next.js agency",
                "Node.js backend",
                "web application development",
                "software studio",
                "custom software",
                "startup software partner",
                COMPANY,
            ].join(", "),
        },

        /* ── Open Graph ── */
        { property: "og:type",        content: "website" },
        { property: "og:url",         content: SITE_URL },
        { property: "og:site_name",   content: COMPANY },
        { property: "og:title",       content: `${COMPANY} — ${TAGLINE}` },
        { property: "og:description", content: DESCRIPTION },
        { property: "og:image",       content: OG_IMAGE },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height",content: "630" },
        { property: "og:image:alt",   content: `${COMPANY} preview` },
        { property: "og:locale",      content: "en_US" },

        /* ── Twitter card ── */
        { name: "twitter:card",       content: "summary_large_image" },
        { name: "twitter:site",       content: TWITTER },
        { name: "twitter:creator",    content: TWITTER },
        { name: "twitter:title",      content: `${COMPANY} — ${TAGLINE}` },
        { name: "twitter:description",content: DESCRIPTION },
        { name: "twitter:image",      content: OG_IMAGE },

        /* ── Canonical ── */
        { tagName: "link", rel: "canonical", href: SITE_URL },
    ];
}

/* ─── Layout ─────────────────────────────────────────────────── */
export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" dir="ltr">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Favicon set */}
                <link rel="icon"             href="/favicon.ico" sizes="any" />
                <link rel="icon"             href="/favicon.svg" type="image/svg+xml" />
                <link rel="apple-touch-icon" href="https://i.ibb.co.com/WNK8bxSp/logo.png" />

                {/* Preconnect for faster third-party loads */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

                {/* Theme color (browser chrome on mobile) */}
                <meta name="theme-color" content="#0a0a0a" />

                {/* Structured data — Organization schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            name: COMPANY,
                            url: SITE_URL,
                            logo: "https://i.ibb.co.com/WNK8bxSp/logo.png",
                            description: DESCRIPTION,
                            sameAs: [
                                "https://github.com/yourhandle",     // ← replace
                                "https://linkedin.com/company/yourco", // ← replace
                                "https://twitter.com/yourhandle",    // ← replace
                            ],
                        }),
                    }}
                />

                {/* Structured data — WebSite schema (enables Google sitelinks search) */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            name: COMPANY,
                            url: SITE_URL,
                        }),
                    }}
                />

                <Meta />
                <Links />
            </head>
            <body>
                <Navbar />
                {children}
                <CustomCursor />
                <Footer />
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

/* ─── App ─────────────────────────────────────────────────────── */
export default function App() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Outlet />
        </div>
    );
}

/* ─── Error boundary ─────────────────────────────────────────── */
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
    let message = "Something went wrong";
    let details = "An unexpected error occurred. Please try again.";
    let is404 = false;
    let stack: string | undefined;

    if (isRouteErrorResponse(error)) {
        is404 = error.status === 404;
        message = is404 ? "Page not found" : `Error ${error.status}`;
        details = is404
            ? "The page you're looking for doesn't exist or has been moved."
            : error.statusText || details;
    } else if (import.meta.env.DEV && error instanceof Error) {
        details = error.message;
        stack = error.stack;
    }

    return (
        <main className="min-h-screen flex items-center justify-center p-8">
            <div className="max-w-lg text-center">
                {/* Semantic h1 — important for crawlers hitting broken URLs */}
                <h1 className="text-6xl font-bold text-primary mb-4">
                    {is404 ? "404" : "500"}
                </h1>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                    {message}
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                    {details}
                </p>
                <a
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-opacity hover:opacity-90"
                >
                    ← Back to home
                </a>

                {/* Dev-only stack trace */}
                {stack && (
                    <pre className="mt-8 w-full p-4 rounded-lg bg-muted text-left text-xs overflow-x-auto">
                        <code>{stack}</code>
                    </pre>
                )}
            </div>
        </main>
    );
}