import express from 'express';
import { generateDestinationCard, generateDestinationCardsByType } from '../services/geminiService.js';

const router = express.Router();

router.post('/generate-card', async (req, res) => {
    try {
        const { city } = req.body;
        
        if (!city) {
            return res.status(400).json({ error: 'City name is required' });
        }

        const destinationCard = await generateDestinationCard(city);
        res.json(destinationCard);
    } catch (error) {
        console.error('Error generating destination card:', error);
        res.status(500).json({ error: 'Failed to generate destination card' });
    }
});

// New endpoint for homepage
router.post('/generate-cards', async (req, res) => {
    try {
        const { month, tripType } = req.body;
        if (!month || !tripType) {
            return res.status(400).json({ error: 'Month and trip type are required' });
        }
        const cards = await generateDestinationCardsByType(month, tripType);
        res.json(cards);
    } catch (error) {
        console.error('Error generating destination cards:', error);
        res.status(500).json({ error: 'Failed to generate destination cards' });
    }
});

export default router; 