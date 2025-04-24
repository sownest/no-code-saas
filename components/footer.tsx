'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="bg-black/20 backdrop-blur-sm border-t border-white/5 pt-16 pb-8 mt-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >
                        <h3 className="text-2xl font-bold text-white">WebLoom</h3>
                        <p className="text-gray-400 max-w-xs">
                            Transform your notes into clear, concise summaries with the power of AI.
                        </p>
                        <div className="flex space-x-4">
                            <motion.a
                                whileHover={{ y: -3 }}
                                href="https://twitter.com"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                Twitter
                            </motion.a>
                            <motion.a
                                whileHover={{ y: -3 }}
                                href="https://github.com"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                GitHub
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {['Home', 'About', 'Features', 'Pricing'].map((item) => (
                                <motion.li key={item} whileHover={{ x: 5 }}>
                                    <Link href={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                                        {item}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Features */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h4 className="text-white font-semibold mb-4">Features</h4>
                        <ul className="space-y-2">
                            {['Summarize', 'My Notes', 'History', 'Saved'].map((item) => (
                                <motion.li key={item} whileHover={{ x: 5 }}>
                                    <Link href={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                                        {item}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Newsletter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="space-y-4"
                    >
                        <h4 className="text-white font-semibold">Stay Updated</h4>
                        <p className="text-gray-400">Subscribe to our newsletter</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 focus:outline-none focus:border-purple-500 flex-1"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-r-lg"
                            >
                                Subscribe
                            </motion.button>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="border-t border-white/5 pt-8 mt-8 text-center text-gray-400"
                >
                    <p>© 2024 WebLoom. All rights reserved.</p>
                </motion.div>
            </div>
        </footer>
    );
}