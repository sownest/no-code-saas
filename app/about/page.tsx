'use client';

import Head from 'next/head'; // Import the Head component for SEO
import Header from '@/components/header';

export default function About() {
    return (
        <>
            {/* SEO Meta Tags */}
            <Head>
                {/* Basic Meta Tags */}
                <title>About Us - Empowering Innovation | No-Code SaaS</title>
                <meta
                    name="description"
                    content="Learn about our mission, vision, and the passionate team behind No-Code SaaS. Discover how we empower individuals and businesses with cutting-edge AI-powered tools."
                />
                <meta
                    name="keywords"
                    content="about us, no-code, SaaS, AI tools, innovation, productivity, mission, vision, team"
                />
                <meta name="author" content="Your Company Name" />

                {/* Open Graph (OG) Tags for Social Media */}
                <meta property="og:title" content="About Us - Empowering Innovation | No-Code SaaS" />
                <meta
                    property="og:description"
                    content="Learn about our mission, vision, and the passionate team behind No-Code SaaS. Discover how we empower individuals and businesses with cutting-edge AI-powered tools."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://yourdomain.com/about" />
                <meta property="og:image" content="https://yourdomain.com/og-about-image.png" />
                <meta property="og:site_name" content="No-Code SaaS" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About Us - Empowering Innovation | No-Code SaaS" />
                <meta
                    name="twitter:description"
                    content="Learn about our mission, vision, and the passionate team behind No-Code SaaS. Discover how we empower individuals and businesses with cutting-edge AI-powered tools."
                />
                <meta name="twitter:image" content="https://yourdomain.com/twitter-about-image.png" />
                <meta name="twitter:site" content="@YourTwitterHandle" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://yourdomain.com/about" />

                {/* Structured Data for Rich Results */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AboutPage",
                        name: "About Us - Empowering Innovation | No-Code SaaS",
                        description:
                            "Learn about our mission, vision, and the passionate team behind No-Code SaaS. Discover how we empower individuals and businesses with cutting-edge AI-powered tools.",
                        url: "https://yourdomain.com/about",
                        image: "https://yourdomain.com/og-about-image.png",
                        publisher: {
                            "@type": "Organization",
                            name: "No-Code SaaS",
                            logo: {
                                "@type": "ImageObject",
                                url: "https://yourdomain.com/logo.png",
                            },
                        },
                    })}
                </script>
            </Head>

            {/* Page Content */}
            <Header />
            <main className="min-h-screen pt-24 px-4 bg-gradient-to-b from-black/20 to-purple-900/10">
                <div className="container mx-auto max-w-4xl">
                    {/* Title Section */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 text-transparent bg-clip-text">
                            About Us
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Learn more about our mission, vision, and the team behind this project.
                        </p>
                    </div>

                    {/* Content Section */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-white/10">
                        <div className="space-y-8 text-gray-300">
                            {/* Mission Section */}
                            <section>
                                <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
                                <p className="leading-relaxed">
                                    Our mission is to empower individuals and businesses by providing
                                    cutting-edge AI-powered tools that simplify complex tasks and enhance
                                    productivity. We strive to make technology accessible and impactful for
                                    everyone.
                                </p>
                            </section>

                            {/* Vision Section */}
                            <section>
                                <h2 className="text-2xl font-semibold text-white mb-4">Our Vision</h2>
                                <p className="leading-relaxed">
                                    We envision a world where technology bridges the gap between ideas and
                                    execution, enabling everyone to achieve their goals effortlessly. Our
                                    vision is to create a future where innovation drives progress and
                                    creativity flourishes.
                                </p>
                            </section>

                            {/* Team Section */}
                            <section>
                                <h2 className="text-2xl font-semibold text-white mb-4">The Team</h2>
                                <p className="leading-relaxed">
                                    Our team is composed of passionate developers, designers, and AI
                                    enthusiasts dedicated to creating innovative solutions for modern
                                    challenges. We believe in collaboration, creativity, and a shared
                                    commitment to excellence.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer Section */}
            <footer className="bg-black/20 py-6 mt-12 border-t border-white/10">
                <div className="container mx-auto text-center text-gray-400">
                    <p className="text-sm mt-2">
                        Built with ❤️ by the Webloom team.
                    </p>
                </div>
            </footer>
        </>
    );
}