'use client';

import { Button } from "@/components/ui/button";

export default function Pricing() {
    return (
        <section
            className="container pb-24 mb-24 mt-24"
            aria-labelledby="pricing-heading"
        >
            {/* Pricing Header */}
            <div className="flex flex-col items-center justify-center">
                <h2
                    id="pricing-heading"
                    className="text-5xl font-bold text-center text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                >
                    Pricing Plans For Everyone
                </h2>
                <p
                    className="text-gray-500 py-5 capitalize"
                    aria-label="Pricing Description"
                >
                    Choose the plan that&apos;s  right for you. No hidden fees, no surprises.
                </p>
            </div>

            {/* Pricing Plans */}
            <div
                className="flex flex-row justify-center gap-8 max-w-7xl mx-auto px-4"
                aria-label="Pricing Plans"
            >
                {/* Basic Plan */}
                <div
                    className="relative w-1/3"
                    aria-labelledby="basic-plan-heading"
                >
                    <div className="p-8 bg-black/20 backdrop-blur-sm rounded-lg border border-white/20">
                        <h3
                            id="basic-plan-heading"
                            className="text-2xl font-bold text-white mb-4"
                        >
                            Basic Plan
                        </h3>
                        <p className="text-gray-300">
                            Perfect for individuals starting out with basic features.
                        </p>
                        <Button
                            className="mt-4 bg-white/10 hover:bg-white/20"
                            aria-label="Get Started with Basic Plan"
                        >
                            Get Started
                        </Button>
                    </div>
                </div>

                {/* Pro Plan */}
                <div
                    className="relative w-1/3"
                    aria-labelledby="pro-plan-heading"
                >
                    <div className="p-8 bg-black/20 backdrop-blur-sm rounded-lg border border-white/20">
                        <h3
                            id="pro-plan-heading"
                            className="text-2xl font-bold text-white mb-4"
                        >
                            Pro Plan
                        </h3>
                        <p className="text-gray-300">
                            Advanced features for professionals and teams.
                        </p>
                        <Button
                            className="mt-4 bg-white/10 hover:bg-white/20"
                            aria-label="Get Started with Pro Plan"
                        >
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
