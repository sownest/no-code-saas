'use client';

import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function Header() {
    const { isSignedIn } = useUser();

    return (
        <header
            className="px-4 py-4 fixed w-full top-0 z-50 bg-black/10 backdrop-blur-sm border-b border-white/5"
            role="banner"
        >
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-xl font-bold text-white"
                        aria-label="WebLoom Home"
                    >
                        WebLoom
                    </Link>

                    {/* Navigation Links */}
                    <nav
                        className="hidden md:flex items-center space-x-6"
                        aria-label="Main Navigation"
                    >
                        <Link
                            href="/"
                            className="nav-link relative text-gray-300 hover:text-white transition-colors"
                        >
                            Home
                        </Link>
                        {isSignedIn ? (
                            <>
                                <Link
                                    href="/summarize"
                                    className="nav-link relative text-gray-300 hover:text-white transition-colors"
                                >
                                    Summarize
                                </Link>

                            </>
                        ) : (
                            <>
                                <Link
                                    href="/features"
                                    className="nav-link relative text-gray-300 hover:text-white transition-colors"
                                >
                                    Features
                                </Link>
                                <Link
                                    href="/pricing"
                                    className="nav-link relative text-gray-300 hover:text-white transition-colors"
                                >
                                    Pricing
                                </Link>
                                <Link
                                    href="/about"
                                    className="nav-link relative text-gray-300 hover:text-white transition-colors"
                                >
                                    About
                                </Link>
                            </>
                        )}
                    </nav>

                    {/* Auth Buttons */}
                    <div className="flex items-center space-x-4">
                        {!isSignedIn ? (
                            <SignInButton mode="modal">
                                <button
                                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                                    aria-label="Sign In or Get Started"
                                >
                                    Get Started
                                </button>
                            </SignInButton>
                        ) : (
                            <div className="flex items-center space-x-4">
                                <Link
                                    href="/summarize"
                                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                                    aria-label="Go to Summarize"
                                >
                                    Summarize
                                </Link>
                                <UserButton afterSignOutUrl="/" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}