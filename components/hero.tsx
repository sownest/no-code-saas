'use client';

import { SignedOut, useUser } from "@clerk/nextjs";
import { SignUpButton } from "@clerk/nextjs";
import Link from "next/link";
import Pricing from "./pricing";
import AdBanner from 'AdBanner';
import HorizontalAdBanner from 'HorizontalAdBanner';


export default function Hero() {
    const { isSignedIn } = useUser();

    return (
        <section className="min-h-screen pt-24 px-4 flex justify-center">
            <div className="flex flex-row max-w-screen-xl w-full items-start gap-6">

                {/* Left Ad Banner */}
                <div className="hidden lg:flex w-[180px]">
                    <AdBanner />
                </div>

                {/* Hero Main Content */}
                <div className="flex-1 flex flex-col items-center text-center">
                    <h1 id="hero-heading" className="text-6xl font-bold mb-6">
                        Transform Your Notes
                        <br />
                        <span className="text-purple-500">With AI Power</span>
                    </h1>

                    <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                        Turn lengthy notes into clear, concise summaries instantly.
                        Let AI help you extract key insights and save valuable time.
                        Perfect for students, professionals, and researchers.
                    </p>

                    <div className="flex gap-4 mb-12">
                        {!isSignedIn ? (
                            <>
                                <SignUpButton mode="modal">
                                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors">
                                        Get Started
                                    </button>
                                </SignUpButton>
                                <Link
                                    href="/features"
                                    className="border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
                                >
                                    Learn More
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/summarize"
                                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
                                >
                                    Let&#39;s Summarize
                                </Link>
                                <Link
                                    href="/features"
                                    className="border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
                                >
                                    Learn More
                                </Link>
                            </>
                        )}
                    </div>

                    <SignedOut>
                        <div className="mt-12">
                            <Pricing />
                            <HorizontalAdBanner />
                        </div>
                    </SignedOut>
                </div>

                {/* Right Ad Banner */}
                <div className="hidden lg:flex w-[180px]">
                    <AdBanner />
                </div>

            </div>
        </section>
    );
}
