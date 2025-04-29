'use client';

import Head from 'next/head'; // Import the Head component for SEO
import Header from '@/components/header';
import { motion } from 'framer-motion';

export default function Pricing() {
    const pricingPlans = [
        {
            title: 'Free plan',
            price: '$0/month',
            features: [
                'Unlimited Summaries per Month',
                'Export to Text',
                'Advance AI Summarization',
            ],
            buttonText: 'Get Started',
            buttonStyle: 'bg-gray-600 hover:bg-gray-700',
            icon: '🌟',
        },
    ];

    return (
        <>
            {/* SEO Meta Tags */}
            <Head>
                {/* Basic Meta Tags */}
                <title>Pricing Plans - Affordable Options for Everyone | WebLoom</title>
                <meta
                    name="description"
                    content="Explore WebLoom's affordable pricing plans. Choose between the Basic Plan and Pro Plan to unlock powerful AI tools and boost your productivity."
                />
                <meta
                    name="keywords"
                    content="pricing, affordable plans, WebLoom, AI tools, productivity, no-code SaaS, Basic Plan, Pro Plan"
                />
                <meta name="author" content="WebLoom Team" />

                {/* Open Graph (OG) Tags for Social Media */}
                <meta property="og:title" content="Pricing Plans - Affordable Options for Everyone | WebLoom" />
                <meta
                    property="og:description"
                    content="Explore WebLoom's affordable pricing plans. Choose between the Basic Plan and Pro Plan to unlock powerful AI tools and boost your productivity."
                />
                <meta property="og:type" content="website" />

                <meta property="og:site_name" content="WebLoom" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Pricing Plans - Affordable Options for Everyone | WebLoom" />
                <meta
                    name="twitter:description"
                    content="Explore WebLoom's affordable pricing plans. Choose between the Basic Plan and Pro Plan to unlock powerful AI tools and boost your productivity."
                />
                <meta name="twitter:site" content="@shray_sagar" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://yourdomain.com/pricing" />

                {/* Structured Data for Rich Results */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        name: "Pricing Plans - Affordable Options for Everyone | WebLoom",
                        description:
                            "Explore WebLoom's affordable pricing plans. Choose between the Basic Plan and Pro Plan to unlock powerful AI tools and boost your productivity.",
                        url: "https://yourdomain.com/pricing",
                        image: "https://yourdomain.com/og-pricing-image.png",
                        publisher: {
                            "@type": "Organization",
                            name: "WebLoom",
                            logo: {
                                "@type": "ImageObject",
                                url: "https://yourdomain.com/logo.png",
                            },
                        },
                        offers: pricingPlans.map((plan) => ({
                            "@type": "Offer",
                            name: plan.title,
                            price: plan.price.replace('$', '').replace('/month', ''),
                            priceCurrency: "USD",
                            description: plan.features.join(', '),
                            url: "https://yourdomain.com/pricing",
                        })),
                    })}
                </script>
            </Head>

            {/* Page Content */}
            <Header />
            <main className="min-h-screen pt-24 px-4 bg-gradient-to-b from-black/20 to-purple-900/10">
                <div className="container mx-auto max-w-6xl">
                    {/* Title Section */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 text-transparent bg-clip-text">
                            Pricing Plans
                        </h1>
                        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                            Choose the plan that fits your needs and start transforming your productivity today.
                        </p>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {pricingPlans.map((plan, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-white/10 hover:scale-105 transition-transform"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <div className="text-center">
                                    <div className="text-5xl mb-4">{plan.icon}</div>
                                    <h2 className="text-2xl font-semibold text-white">{plan.title}</h2>
                                    <p className="text-4xl font-bold text-purple-300 mt-4">{plan.price}</p>
                                </div>
                                <ul className="mt-6 space-y-3 text-gray-300">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center space-x-2">
                                            <span className="text-green-400">✔</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6 text-center">
                                    <button
                                        className={`${plan.buttonStyle} text-white px-6 py-3 rounded-lg transition-colors`}
                                    >
                                        {plan.buttonText}
                                    </button>
                                </div>
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