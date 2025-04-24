'use client';

import Header from '../components/header';

export default function MyNotes() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-black/20 to-purple-900/10">
            <Header />
            <div className="container mx-auto max-w-4xl pt-24 px-4">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 text-transparent bg-clip-text">
                        Feature Coming Soon
                    </h1>
                    <p className="text-gray-400 text-lg">
                        We're working hard to bring this feature to you. Stay tuned!
                    </p>
                </div>
            </div>
        </main>
    );
}