'use client';

import Head from 'next/head'; // Import the Head component for SEO
import { SignUp } from '@clerk/nextjs';

export default function Page() {
    return (
        <>
            {/* SEO Meta Tags */}
            <Head>
                {/* Basic Meta Tags */}
                <title>Sign Up - Create Your Account | WebLoom</title>
                <meta
                    name="description"
                    content="Sign up for WebLoom to access powerful AI tools and boost your productivity. Join today and start transforming your workflow."
                />
                <meta
                    name="keywords"
                    content="sign up, create account, WebLoom, AI tools, productivity, no-code SaaS, register"
                />
                <meta name="author" content="WebLoom Team" />

                {/* Open Graph (OG) Tags for Social Media */}
                <meta property="og:title" content="Sign Up - Create Your Account | WebLoom" />
                <meta
                    property="og:description"
                    content="Sign up for WebLoom to access powerful AI tools and boost your productivity. Join today and start transforming your workflow."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://yourdomain.com/sign-up" />
                <meta property="og:image" content="https://yourdomain.com/og-sign-up-image.png" />
                <meta property="og:site_name" content="WebLoom" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Sign Up - Create Your Account | WebLoom" />
                <meta
                    name="twitter:description"
                    content="Sign up for WebLoom to access powerful AI tools and boost your productivity. Join today and start transforming your workflow."
                />
                <meta name="twitter:image" content="https://yourdomain.com/twitter-sign-up-image.png" />
                <meta name="twitter:site" content="@shray_sagar" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://yourdomain.com/sign-up" />

                {/* Structured Data for Rich Results */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        name: "Sign Up - Create Your Account | WebLoom",
                        description:
                            "Sign up for WebLoom to access powerful AI tools and boost your productivity. Join today and start transforming your workflow.",
                        url: "https://yourdomain.com/sign-up",
                        image: "https://yourdomain.com/og-sign-up-image.png",
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
                <SignUp signInUrl="/sign-in" />
            </div>
        </>
    );
}