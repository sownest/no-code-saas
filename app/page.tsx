'use client';

import Head from 'next/head'; // Import the Head component for SEO
import Header from '@/components/header';
import Hero from '@/components/hero';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        {/* Basic Meta Tags */}
        <title>WebLoom - Empowering Web Design and Productivity</title>
        <meta
          name="description"
          content="WebLoom is a cutting-edge platform for creating, sharing, and managing web designs with powerful AI tools. Boost your productivity today!"
        />
        <meta
          name="keywords"
          content="WebLoom, web design, AI tools, productivity, no-code, SaaS, web development"
        />
        <meta name="author" content="WebLoom Team" />

        {/* Open Graph (OG) Tags for Social Media */}
        <meta property="og:title" content="WebLoom - Empowering Web Design and Productivity" />
        <meta
          property="og:description"
          content="WebLoom is a cutting-edge platform for creating, sharing, and managing web designs with powerful AI tools. Boost your productivity today!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:image" content="https://yourdomain.com/og-home-image.png" />
        <meta property="og:site_name" content="WebLoom" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="WebLoom - Empowering Web Design and Productivity" />
        <meta
          name="twitter:description"
          content="WebLoom is a cutting-edge platform for creating, sharing, and managing web designs with powerful AI tools. Boost your productivity today!"
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
            name: "WebLoom - Empowering Web Design and Productivity",
            description:
              "WebLoom is a cutting-edge platform for creating, sharing, and managing web designs with powerful AI tools. Boost your productivity today!",
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
            potentialAction: {
              "@type": "SearchAction",
              target: "https://yourdomain.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
        </script>
      </Head>

      {/* Page Content */}
      <Header />
      <Hero />
      <Footer />
    </>
  );
}
