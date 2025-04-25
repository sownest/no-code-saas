'use client';

import Head from 'next/head'; // Import the Head component for SEO
import { SignIn } from '@clerk/nextjs';

export default function Page() {
    return (
        <>
            {/* SEO Meta Tags */}
            <Head>
                {/* Basic Meta Tags */}
                <title>Sign In - Access Your Account | WebLoom</title>
                <meta
                    name="description"
                    content="Sign in to your WebLoom account to access powerful AI tools and manage your productivity. Secure and seamless login experience."
                />
                <meta
                    name="keywords"
                    content="sign in, login, WebLoom, AI tools, productivity, secure login, no-code SaaS"
                />
                <meta name="author" content="WebLoom Team" />

                {/* Open Graph (OG) Tags for Social Media */}
                <meta property="og:title" content="Sign In - Access Your Account | WebLoom" />
                <meta
                    property="og:description"
                    content="Sign in to your WebLoom account to access powerful AI tools and manage your productivity. Secure and seamless login experience."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://yourdomain.com/sign-in" />
                <meta property="og:image" content="https://yourdomain.com/og-sign-in-image.png" />
                <meta property="og:site_name" content="WebLoom" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Sign In - Access Your Account | WebLoom" />
                <meta
                    name="twitter:description"
                    content="Sign in to your WebLoom account to access powerful AI tools and manage your productivity. Secure and seamless login experience."
                />
                <meta name="twitter:image" content="https://yourdomain.com/twitter-sign-in-image.png" />
                <meta name="twitter:site" content="@shray_sagar" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://yourdomain.com/sign-in" />

                {/* Structured Data for Rich Results */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        name: "Sign In - Access Your Account | WebLoom",
                        description:
                            "Sign in to your WebLoom account to access powerful AI tools and manage your productivity. Secure and seamless login experience.",
                        url: "https://yourdomain.com/sign-in",
                        image: "https://yourdomain.com/og-sign-in-image.png",
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
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <SignIn />
            </div>
        </>
    );
}