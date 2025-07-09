import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

import branchRoutes from './routes/branchRoutes.js';
import adminRoutes from './routes/adminRoutes.js'; 
import authRoutes from './routes/authRoutes.js';

dotenv.config();
const app = express();
connectDB();

// ✅ Allow frontend domain to call the backend
app.use(cors({
  origin: 'https://spi-quest.vercel.app',
  credentials: true
}));

app.use(express.json());

// ✅ Routes
app.use('/api', branchRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 10000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
