const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the dist directory
app.use(express.static(path.join('./dist/test-app')));

// Send all requests to index.html
app.get('/*',  (req, res) => 
  res.sendFile('index.html',{root : 'dist/test-app/'}),
);

// Default to port 8080 unless configured
const PORT = process.env.PORT || 8080;
app.listen(PORT);
