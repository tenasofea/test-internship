const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist/table-display')));

// Send all requests to index.html
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/table-display/index.html'));
});

// Default to port 8080 unless configured
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
