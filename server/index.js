// ---------------------------------------------------------------
// MERN Dating App - Backend entry point
// Infographics: 08/15 (server), 09/15 (MongoDB), 10-12/15 (routes)
// ---------------------------------------------------------------

// 1. Load dependencies
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const profileRoutes = require('./routes/profileRoutes');

// 2. Create Express app
const app = express();

// 3. Middleware
// FRONTEND_URL can hold one or more origins (comma-separated).
// If it is empty (development) we allow every origin.
const allowedOrigins = (process.env.FRONTEND_URL || '')
  .split(',')
  .map((url) => url.trim())
  .filter(Boolean);

app.use(cors(allowedOrigins.length ? { origin: allowedOrigins } : undefined));
app.use(express.json());

// 4. Test route (Infographic 08)
app.get('/', (req, res) => {
  res.json({ message: 'MERN Dating App Backend is running!' });
});

// 5. API routes (Infographics 10, 11, 12)
app.use('/api/profiles', profileRoutes);

// 6. Connect to MongoDB Atlas (Infographic 09)
if (process.env.MONGODB_URI) {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch((err) => console.error('❌ MongoDB Error:', err.message));
} else {
  console.warn('⚠️  MONGODB_URI is not set. Add it to server/.env to use the database.');
}

// 7. Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
