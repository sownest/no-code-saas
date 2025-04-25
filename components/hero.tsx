'use client';

import { SignedOut, useUser } from "@clerk/nextjs";
import { SignUpButton } from "@clerk/nextjs";
import Link from "next/link";
import Pricing from "./pricing";
import AdBanner from 'AdBanner';
import AdBannerRight from 'AdBannerRight';
import HorizontalAdBanner from 'HorizontalAdBanner';

export default function Hero() {
  const { isSignedIn } = useUser();

  return (
    <section
      className="relative min-h-screen pt-24 flex flex-col items-center justify-center text-center px-4"
      aria-labelledby="hero-heading"
    >
      {/* Side Ads - Desktop Only */}
      <AdBanner />
      <AdBannerRight />

      {/* Hero Content */}
      <div className="w-full max-w-5xl z-10">
        <h1
          id="hero-heading"
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
        >
          Transform Your Notes
          <br />
          <span className="text-purple-500">With AI Power</span>
        </h1>

        <p
          className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
          aria-label="Hero Description"
        >
          Turn lengthy notes into clear, concise summaries instantly. 
          Let AI help you extract key insights and save valuable time.
          Perfect for students, professionals, and researchers.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          {!isSignedIn ? (
            <>
              <SignUpButton mode="modal">
                <button
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition-colors"
                  aria-label="Sign Up to Get Started"
                >
                  Get Started
                </button>
              </SignUpButton>
              <Link
                href="/features"
                className="border border-white/20 hover:bg-white/10 text-white px-6 py-3 rounded-lg text-lg font-medium transition-colors"
                aria-label="Learn More About Features"
              >
                Learn More
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/summarize"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition-colors"
                aria-label="Go to Summarize Page"
              >
                Let&#39;s Summarize
              </Link>
              <Link
                href="/features"
                className="border border-white/20 hover:bg-white/10 text-white px-6 py-3 rounded-lg text-lg font-medium transition-colors"
                aria-label="Learn More About Features"
              >
                Learn More
              </Link>
            </>
          )}
        </div>

        {/* Pricing + Horizontal Ad for Signed Out Users */}
        <SignedOut>
          <div className="mt-16">
            <Pricing />
            <HorizontalAdBanner />
          </div>
        </SignedOut>
      </div>
    </section>
  );
}
