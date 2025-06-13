import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import hotelRoutes from './routes/hotels.js';
import mapsRouter from './routes/maps.js';
import aiRoutes from './routes/ai.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/hotels', hotelRoutes);
app.use('/api/maps', mapsRouter);
app.use('/api/ai', aiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
