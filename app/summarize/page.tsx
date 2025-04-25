'use client';

import { useState } from 'react';
import { saveAs } from 'file-saver';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/header';
import { TextItem } from 'pdfjs-dist/types/src/display/api';

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
        text += content.items
            .filter((item): item is TextItem => 'str' in item)
            .map((item: TextItem) => item.str)
            .join(' ');
    }
    return text;
};

export default function Summarize() {
    const [inputText, setInputText] = useState<string>('');
    const [tone, setTone] = useState<string>('neutral');
    const [length, setLength] = useState<string>('medium');
    const [summary, setSummary] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [, setError] = useState<string | null>(null);

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
                const pdfTexts = await Promise.all(uploadedFiles.map(extractTextFromPDF));
                const combinedText = pdfTexts.join('\n\n');

                response = await fetch('/api/summarize', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ text: combinedText, tone, length }),
                });
            } else {
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

                {/* PDF Mode or Text Mode Buttons */}
                <div className="flex justify-center mb-8">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            setIsPDFMode(false);
                            setShowMaintenanceMessage(false);
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
                            setShowMaintenanceMessage(true);
                        }}
                        className={`px-6 py-3 rounded-r-lg ${isPDFMode ? 'bg-purple-600 text-white' : 'bg-gray-300 text-gray-700'}`}
                    >
                        PDF Mode
                    </motion.button>
                </div>

                {/* Maintenance Message */}
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

                {/* Text Area or PDF Upload Area */}
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
                                <p className="text-gray-400 mb-4">Drag and drop your PDFs here, or click to upload.</p>
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
                                    {uploadedFiles.length > 0 ? `${uploadedFiles.length} file(s) uploaded.` : 'No files uploaded.'}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Generate Summary Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleGenerateSummary}
                    disabled={loading}
                    className="w-full mt-8 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg disabled:bg-gray-400"
                >
                    {loading ? 'Generating...' : 'Generate Summary'}
                </motion.button>

                {/* Error Message */}
                {error && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="mt-4 text-red-600 text-center"
                    >
                        {error}
                    </motion.div>
                )}

                {/* Summary Section */}
                {summary && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="mt-12 p-6 bg-gray-900 rounded-lg"
                    >
                        <h2 className="text-2xl font-bold text-white mb-4">Your Summary:</h2>
                        <p className="text-gray-300">{summary}</p>

                        {/* Download and Copy Options */}
                        <div className="mt-4 flex space-x-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleDownload('txt')}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
                            >
                                Download TXT
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleDownload('pdf')}
                                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
                            >
                                Download PDF
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleCopyToClipboard}
                                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg"
                            >
                                Copy to Clipboard
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </div>

            {/* Advertisement */}
            <div className="mt-12">
                <script type="text/javascript">
                    atOptions = {
                        key: '98446bbcee889028dfaec65a250dc039',
                        format: 'iframe',
                        height: 600,
                        width: 160,
                        params: {}
                    };
                </script>
                <script type="text/javascript" src="//www.highperformanceformat.com/98446bbcee889028dfaec65a250dc039/invoke.js"></script>
            </div>
        </main>
    );
}
