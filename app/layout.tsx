import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GradientOrbs from "@/components/GradientOrbs";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WebLoom - Empowering Web Design and Productivity",
  description:
    "WebLoom is a cutting-edge platform for creating, sharing, and managing web designs with powerful AI tools.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "WebLoom - Empowering Web Design and Productivity",
    description:
      "WebLoom is a cutting-edge platform for creating, sharing, and managing web designs with powerful AI tools.",
    url: "https://yourdomain.com",
    siteName: "WebLoom",
    images: [
      {
        url: "https://yourdomain.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "WebLoom - Empowering Web Design and Productivity",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebLoom - Empowering Web Design and Productivity",
    description:
      "WebLoom is a cutting-edge platform for creating, sharing, and managing web designs with powerful AI tools.",
    site: "@shray_sagar",
    images: ["https://yourdomain.com/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />

          {/* Canonical URL */}
          <link rel="canonical" href="https://yourdomain.com" />

          {/* Meta Tags for SEO */}
          <meta
            name="description"
            content="WebLoom is a cutting-edge platform for creating, sharing, and managing web designs with powerful AI tools."
          />
          <meta
            name="keywords"
            content="WebLoom, web design, AI tools, productivity, no-code, SaaS, web development"
          />
          <meta name="author" content="WebLoom Team" />

          {/* ✅ Google Site Verification Tag */}
          <meta
            name="google-site-verification"
            content="Qte4WLs_77BK26KBwKx4SbPxQzWuBUwUHuBdi_u2uc0"
          />

          {/* Open Graph (OG) Tags */}
          <meta property="og:title" content="WebLoom - Empowering Web Design and Productivity" />
          <meta
            property="og:description"
            content="WebLoom is a cutting-edge platform for creating, sharing, and managing web designs with powerful AI tools."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://yourdomain.com" />
          <meta property="og:image" content="https://yourdomain.com/og-image.png" />
          <meta property="og:site_name" content="WebLoom" />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="WebLoom - Empowering Web Design and Productivity" />
          <meta
            name="twitter:description"
            content="WebLoom is a cutting-edge platform for creating, sharing, and managing web designs with powerful AI tools."
          />
          <meta name="twitter:image" content="https://yourdomain.com/twitter-image.png" />
          <meta name="twitter:site" content="@YourTwitterHandle" />

          {/* Structured Data for Rich Results */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "WebLoom",
              url: "https://yourdomain.com",
              description:
                "WebLoom is a cutting-edge platform for creating, sharing, and managing web designs with powerful AI tools.",
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
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
        >
          <GradientOrbs />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
