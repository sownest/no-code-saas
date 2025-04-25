'use client';

import Head from 'next/head'; // Import the Head component for SEO
import Header from '@/components/header';
import { motion } from 'framer-motion';

export default function Features() {
    const features = [
        {
            title: 'AI-Powered Summarization',
            description:
                'Leverage cutting-edge AI to transform lengthy content into concise, meaningful summaries in seconds.',
            icon: '🧠',
        },
        {
            title: 'Export Options',
            description:
                'Easily export your summaries in PDF, DOCX, or plain text formats with professional styling.',
            icon: '📄',
        },
        {
            title: 'User-Friendly Interface',
            description:
                'Enjoy a seamless and intuitive interface designed to enhance your productivity.',
            icon: '✨',
        },
        {
            title: 'Secure and Private',
            description:
                'Your data is encrypted and handled with the utmost care to ensure privacy and security.',
            icon: '🔒',
        },
    ];

    return (
        <>
            {/* SEO Meta Tags */}
            <Head>
                {/* Basic Meta Tags */}
                <title>Features - Discover the Power of WebLoom | No-Code SaaS</title>
                <meta
                    name="description"
                    content="Explore the powerful features of WebLoom, including AI-powered summarization, export options, a user-friendly interface, and top-notch security."
                />
                <meta
                    name="keywords"
                    content="features, AI-powered tools, productivity, no-code SaaS, secure, user-friendly, export options"
                />
                <meta name="author" content="WebLoom Team" />

                {/* Open Graph (OG) Tags for Social Media */}
                <meta property="og:title" content="Features - Discover the Power of WebLoom | No-Code SaaS" />
                <meta
                    property="og:description"
                    content="Explore the powerful features of WebLoom, including AI-powered summarization, export options, a user-friendly interface, and top-notch security."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://yourdomain.com/features" />
                <meta property="og:image" content="https://yourdomain.com/og-features-image.png" />
                <meta property="og:site_name" content="WebLoom" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Features - Discover the Power of WebLoom | No-Code SaaS" />
                <meta
                    name="twitter:description"
                    content="Explore the powerful features of WebLoom, including AI-powered summarization, export options, a user-friendly interface, and top-notch security."
                />
                <meta name="twitter:image" content="https://yourdomain.com/twitter-features-image.png" />
                <meta name="twitter:site" content="@shray_sagar" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://yourdomain.com/features" />

                {/* Structured Data for Rich Results */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        name: "Features - Discover the Power of WebLoom | No-Code SaaS",
                        description:
                            "Explore the powerful features of WebLoom, including AI-powered summarization, export options, a user-friendly interface, and top-notch security.",
                        url: "https://yourdomain.com/features",
                        image: "https://yourdomain.com/og-features-image.png",
                        publisher: {
                            "@type": "Organization",
                            name: "WebLoom",
                            logo: {
                                "@type": "ImageObject",
                                url: "https://yourdomain.com/logo.png",
                            },
                        },
                        mainEntity: features.map((feature) => ({
                            "@type": "Thing",
                            name: feature.title,
                            description: feature.description,
                        })),
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
                            Features
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Discover the powerful features that make WebLoom the ultimate productivity tool.
                        </p>
                    </div>

                    {/* Features Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-white/10"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="text-4xl">{feature.icon}</div>
                                    <h2 className="text-xl font-semibold text-white">{feature.title}</h2>
                                </div>
                                <p className="text-gray-300 mt-4 leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Footer Section */}
            <footer className="bg-black/20 py-6 mt-12 border-t border-white/10">
                <div className="container mx-auto text-center text-gray-400">
                    <p className="text-sm">
                        © {new Date().getFullYear()} WebLoom. All rights reserved.
                    </p>
                    <p className="text-sm mt-2">
                        Built with ❤️ by the WebLoom team.
                    </p>
                </div>
            </footer>
        </>
    );
}