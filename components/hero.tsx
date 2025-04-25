'use client';

import { SignedOut, useUser } from "@clerk/nextjs";
import { SignUpButton } from "@clerk/nextjs";
import Link from "next/link";
import Pricing from "./pricing";
import AdBanner from 'AdBanner';
export default function Hero() {
    const { isSignedIn } = useUser();

    return (
        <section
            className="min-h-screen pt-24 flex flex-col items-center justify-center text-center"
            aria-labelledby="hero-heading"
        >
            {/* Hero Heading */}
            <h1
                id="hero-heading"
                className="text-6xl font-bold mb-6"
            >
                Transform Your Notes
                <br />
                <span className="text-purple-500">With AI Power</span>
            </h1>

            {/* Hero Description */}
            <p
                className="text-xl text-gray-300 mb-8 max-w-2xl"
                aria-label="Hero Description"
            >
                Turn lengthy notes into clear, concise summaries instantly. 
                Let AI help you extract key insights and save valuable time.
                Perfect for students, professionals, and researchers.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex gap-4">
                {!isSignedIn ? (
                    <>
                        <SignUpButton mode="modal">
                            <button
                                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
                                aria-label="Sign Up to Get Started"
                            >
                                Get Started
                            </button>
                        </SignUpButton>
                        <Link
                            href="/features"
                            className="border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
                            aria-label="Learn More About Features"
                        >
                            Learn More
                        </Link>
                    </>
                ) : (
                    <>
                        <Link
                            href="/summarize"
                            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
                            aria-label="Go to Summarize Page"
                        >
                            Let&#39;s Summarize
                        </Link>
                        <Link
                            href="/features"
                            className="border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
                            aria-label="Learn More About Features"
                        >
                            Learn More
                        </Link>
                    </>
                )}
            </div>

            {/* Pricing Section for Signed-Out Users */}
            <SignedOut>
                <div className="mt-12">
                    <Pricing />
                </div>
            </SignedOut>
            <AdBanner />
        </section>
    );
}