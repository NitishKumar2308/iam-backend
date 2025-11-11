require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(rateLimit({ windowMs: 60 * 1000, max: 100 }));

// Default route
app.get('/', (req, res) => {
  res.send('🚀 IAM Backend is running successfully!');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on http://127.0.0.1:${PORT}`);
});
