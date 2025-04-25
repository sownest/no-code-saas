import { NextApiRequest, NextApiResponse } from 'next';
import formidable, { Fields, Files } from 'formidable';
import fs from 'fs/promises';
import pdfParse from 'pdf-parse';
import { GenerateSummary } from '@/utils/gemini';

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const form = formidable({ multiples: true });

    form.parse(req, async (err: Error | null, fields: Fields, files: Files) => {
        if (err) {
            console.error('Error parsing form data:', err);
            return res.status(400).json({ error: 'Failed to process the request.' });
        }

        const { text } = fields as unknown as { text: string };


        const uploadedFiles = Array.isArray(files.pdf) ? files.pdf : files.pdf ? [files.pdf] : [];

        // Validate that at least text or PDF files are provided
        if ((!text || typeof text !== 'string' || text.trim() === '') && uploadedFiles.length === 0) {
            return res.status(400).json({ error: 'Please provide input text or upload PDF files.' });
        }

        let combinedText = text || '';

        try {
            // Extract text from uploaded PDFs
            if (uploadedFiles.length > 0) {
                for (const file of uploadedFiles) {
                    if (file) {
                        const buffer = await fs.readFile(file.filepath);
                        const { text: pdfText } = await pdfParse(buffer);
                        combinedText += '\n' + pdfText;
                        console.log(`Processed PDF: ${file.originalFilename}`);
                    }
                }
            }

            // Generate the summary
            const summary = await GenerateSummary(combinedText);

            return res.status(200).json({ summary });
        } catch (error) {
            console.error('Error generating summary:', error);
            return res.status(500).json({ error: 'Failed to generate summary. Please try again later.' });
        }
    });
}
