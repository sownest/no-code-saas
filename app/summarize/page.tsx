'use client';

import { useState } from 'react';
import { saveAs } from 'file-saver';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/header';

const extractTextFromPDF = async (file: File): Promise<string> => {
    if (typeof window === 'undefined') {
        throw new Error('PDF extraction can only be performed on the client side.');
    }

    const pdfjsLib = await import('pdfjs-dist');
    pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    let text = '';
    for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        text += content.items.map((item: any) => item.str).join(' ');
    }
    return text;
};

export default function Summarize() {
    const [inputText, setInputText] = useState<string>('');
    const [tone, setTone] = useState<string>('neutral');
    const [length, setLength] = useState<string>('medium');
    const [summary, setSummary] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [isPDFMode, setIsPDFMode] = useState<boolean>(false);
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [showMaintenanceMessage, setShowMaintenanceMessage] = useState<boolean>(false);

    const handleGenerateSummary = async () => {
        console.log('isPDFMode:', isPDFMode);
        console.log('inputText:', inputText);
        console.log('uploadedFiles:', uploadedFiles);

        if (!isPDFMode && !inputText.trim()) {
            setError('Please provide text to summarize.');
            return;
        }

        if (isPDFMode && uploadedFiles.length === 0) {
            setError('Please upload at least one PDF file.');
            return;
        }

        setError(null);
        setLoading(true);

        try {
            let response;

            if (isPDFMode) {
                // Extract text from PDFs on the client side
                const pdfTexts = await Promise.all(uploadedFiles.map(extractTextFromPDF));
                const combinedText = pdfTexts.join('\n\n');

                // Send extracted text to the backend
                response = await fetch('/api/summarize', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ text: combinedText, tone, length }),
                });
            } else {
                // Handle text input mode
                response = await fetch('/api/summarize', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ text: inputText, tone, length }),
                });
            }

            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }

            const data = await response.json();
            setSummary(data.summary);
        } catch (err) {
            console.error('Error generating summary:', err);
            setError('Failed to generate summary. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const files = Array.from(event.target.files);
            const validFiles = files.filter((file) => file.type === 'application/pdf');
            if (validFiles.length !== files.length) {
                setError('Only PDF files are allowed.');
                return;
            }
            setUploadedFiles(validFiles);

            // Extract text from PDFs for preview
            const pdfTexts = await Promise.all(validFiles.map(extractTextFromPDF));
            setInputText(pdfTexts.join('\n\n'));
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(false);
        if (event.dataTransfer.files) {
            setUploadedFiles(Array.from(event.dataTransfer.files));
        }
    };

    const handleDownload = (format: 'pdf' | 'docx' | 'txt') => {
        const blob = new Blob([summary], { type: 'text/plain;charset=utf-8' });
        saveAs(blob, `summary.${format}`);
    };

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(summary);
        alert('Summary copied to clipboard!');
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-black/20 to-purple-900/10">
            <Header />

            <div className="container mx-auto max-w-4xl pt-24 px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 text-transparent bg-clip-text">
                        Summarize Your Text or PDF
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Generate concise summaries with AI. Customize tone and length, and download your summary in multiple formats.
                    </p>
                </div>

                <div className="flex justify-center mb-8">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            setIsPDFMode(false);
                            setShowMaintenanceMessage(false); // Remove message when switching to text mode
                        }}
                        className={`px-6 py-3 rounded-l-lg ${!isPDFMode ? 'bg-purple-600 text-white' : 'bg-gray-300 text-gray-700'}`}
                    >
                        Text Mode
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            setIsPDFMode(true);
                            setShowMaintenanceMessage(true); // Show message when switching to PDF mode
                        }}
                        className={`px-6 py-3 rounded-r-lg ${isPDFMode ? 'bg-purple-600 text-white' : 'bg-gray-300 text-gray-700'}`}
                    >
                        PDF Mode
                    </motion.button>
                </div>

                <AnimatePresence>
                    {showMaintenanceMessage && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="bg-red-600 text-white text-center py-2 rounded-lg mb-4"
                        >
                            PDF feature is currently under maintenance.
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence mode="wait">
                    {!isPDFMode ? (
                        <motion.div
                            key="text-mode"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="mb-8"
                        >
                            <textarea
                                className="w-full p-4 rounded-lg bg-black/20 text-white border border-white/10"
                                rows={6}
                                placeholder="Paste your text here..."
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                            ></textarea>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="pdf-mode"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="mb-8"
                        >
                            <div
                                className={`flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 ${
                                    isDragging ? 'border-purple-600 bg-purple-100/20' : 'border-gray-400'
                                }`}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                            >
                                <p className="text-gray-400 mb-4">
                                    Drag and drop your PDFs here, or click to upload.
                                </p>
                                <label
                                    htmlFor="file-upload"
                                    className="cursor-pointer bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
                                >
                                    Upload PDFs
                                </label>
                                <input
                                    id="file-upload"
                                    type="file"
                                    accept=".pdf"
                                    multiple
                                    className="hidden"
                                    onChange={handleFileUpload}
                                />
                                <div className="mt-4 text-gray-400">
                                    {uploadedFiles.length > 0
                                        ? `${uploadedFiles.length} file(s) uploaded`
                                        : 'No files uploaded yet.'}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="flex-1">
                        <label className="block text-gray-300 mb-2">Tone</label>
                        <select
                            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600"
                            value={tone}
                            onChange={(e) => setTone(e.target.value)}
                        >
                            <option value="neutral">Neutral</option>
                            <option value="formal">Formal</option>
                            <option value="informal">Informal</option>
                            <option value="creative">Creative</option>
                        </select>
                    </div>
                    <div className="flex-1">
                        <label className="block text-gray-300 mb-2">Length</label>
                        <select
                            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600"
                            value={length}
                            onChange={(e) => setLength(e.target.value)}
                        >
                            <option value="short">Short</option>
                            <option value="medium">Medium</option>
                            <option value="long">Long</option>
                        </select>
                    </div>
                </div>

                <div className="text-center mb-8">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleGenerateSummary}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg transition-colors w-full"
                        disabled={loading}
                    >
                        {loading ? 'Generating...' : 'Generate Summary'}
                    </motion.button>
                </div>

                {summary && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-black/20 border border-white/10 rounded-lg p-6 shadow-lg"
                    >
                        <h3 className="text-xl font-semibold text-white mb-4">Your Summary</h3>
                        <p className="text-gray-300 mb-4 whitespace-pre-wrap">{summary}</p>
                        <div className="flex flex-wrap gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleDownload('pdf')}
                                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                            >
                                Download as PDF
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleDownload('docx')}
                                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                            >
                                Download as DOCX
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleDownload('txt')}
                                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                            >
                                Download as TXT
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleCopyToClipboard}
                                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                            >
                                Copy to Clipboard
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </div>
        </main>
    );
}
