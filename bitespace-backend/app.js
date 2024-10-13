const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json()); // To handle JSON data

// Middleware to serve static files from public directory
app.use(express.static('public'));

// Sample route for testing
app.get('/api/testimonials', (req, res) => {
  res.json({ message: 'This is your backend API for testimonials' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
