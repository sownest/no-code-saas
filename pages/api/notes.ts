import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/utils/supabaseClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Allow only GET requests
    if (req.method !== 'GET') {
        return res.setHeader('Allow', ['GET']).status(405).json({ error: 'Method not allowed' });
    }

    const { user_id } = req.query;

    // Validate user_id
    if (!user_id || typeof user_id !== 'string') {
        console.error('Invalid or missing user ID');
        return res.status(400).json({ error: 'User ID is required and must be a string' });
    }

    try {
        console.log('Fetching summaries for user_id:', user_id);

        // Fetch summaries from the database
        const { data, error } = await supabase
            .from('summaries')
            .select('*')
            .eq('user_id', user_id)
            .order('created_at', { ascending: false });

        // Handle database errors
        if (error) {
            console.error('Database error:', error.message);
            return res.status(500).json({ error: 'Database query failed' });
        }

        // Log and return the fetched data
        console.log(`Fetched ${data.length} summaries for user_id: ${user_id}`);
        return res.status(200).json(data);
    } catch (error) {
        // Handle unexpected errors
        console.error('Unexpected error fetching summaries:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}