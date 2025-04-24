'use client';

import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { SignUpButton } from "@clerk/nextjs";
import Head from "next/head";

export default function Home() {
    const { isSignedIn } = useUser();

    return (
        <>
            {/* SEO Meta Tags */}
            <Head>
                <title>WebLoom - Build Smarter, Faster, and Better</title>
                <meta
                    name="description"
                    content="Welcome to WebLoom, the ultimate platform for building smarter, faster, and better with AI-powered tools. Start your journey today!"
                />
                <meta
                    name="keywords"
                    content="WebLoom, AI tools, no-code platform, build smarter, productivity, SaaS"
                />
                <meta name="author" content="WebLoom Team" />

                {/* Open Graph (OG) Tags */}
                <meta property="og:title" content="WebLoom - Build Smarter, Faster, and Better" />
                <meta
                    property="og:description"
                    content="Welcome to WebLoom, the ultimate platform for building smarter, faster, and better with AI-powered tools. Start your journey today!"
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://yourdomain.com" />
                <meta property="og:image" content="https://yourdomain.com/og-home-image.png" />
                <meta property="og:site_name" content="WebLoom" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="WebLoom - Build Smarter, Faster, and Better" />
                <meta
                    name="twitter:description"
                    content="Welcome to WebLoom, the ultimate platform for building smarter, faster, and better with AI-powered tools. Start your journey today!"
                />
                <meta name="twitter:image" content="https://yourdomain.com/twitter-home-image.png" />
                <meta name="twitter:site" content="@YourTwitterHandle" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://yourdomain.com" />

                {/* Structured Data for Rich Results */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        name: "WebLoom - Build Smarter, Faster, and Better",
                        description:
                            "Welcome to WebLoom, the ultimate platform for building smarter, faster, and better with AI-powered tools. Start your journey today!",
                        url: "https://yourdomain.com",
                        image: "https://yourdomain.com/og-home-image.png",
                        publisher: {
                            "@type": "Organization",
                            name: "WebLoom",
                            logo: {
                                "@type": "ImageObject",
                                url: "https://yourdomain.com/logo.png",
                            },
                        },
                    })}
                </script>
            </Head>

            {/* Page Content */}
            <div className="min-h-screen flex flex-col items-center justify-center text-center">
                {/* Hero Heading */}
                <h1 className="text-4xl font-bold mb-8">
                    Welcome to <span className="text-purple-500">WebLoom</span>
                </h1>

                {/* Hero Description */}
                <p className="text-lg text-gray-300 mb-8 max-w-2xl">
                    Build smarter, faster, and better with AI-powered tools. Whether you&#39;re a student, professional, or entrepreneur, WebLoom has everything you need to succeed.
                </p>

                {/* Call-to-Action Buttons */}
                <div className="flex gap-4">
                    {!isSignedIn ? (
                        <>
                            <SignUpButton mode="modal">
                                <button
                                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
                                    aria-label="Sign Up to Get Started"
                                >
                                    Get Started
                                </button>
                            </SignUpButton>
                            <Link
                                href="/features"
                                className="border border-white/20 hover:bg-white/10 text-white px-6 py-3 rounded-lg transition-colors"
                                aria-label="Learn More About Features"
                            >
                                Learn More
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link
                                href="/build"
                                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
                                aria-label="Go to Build Page"
                            >
                                Let&#39;s Build
                            </Link>
                            <Link
                                href="/features"
                                className="border border-white/20 hover:bg-white/10 text-white px-6 py-3 rounded-lg transition-colors"
                                aria-label="Learn More About Features"
                            >
                                Learn More
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}