const express = require('express');
const http = require('http');
const app = express();

// Proxy to the game server on port 7777
app.get('/game', (req, res) => {
    http.get('http://localhost:7777', (gameRes) => {
        gameRes.pipe(res);  // Forward the response from game server to the client
    });
});

// Start the proxy server on port 80 (or 443 for HTTPS)
app.listen(80, () => {
    console.log('Proxy server running on port 80');
});
