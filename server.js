// server.js
const express = require('express');
const app = express();
const PORT = 8081;

// Simple test route
app.get('/', (req, res) => {
  res.send('Server is running on port 8081!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
