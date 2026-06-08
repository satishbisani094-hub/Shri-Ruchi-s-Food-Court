// server.js - Simple Express server to serve Vite dev or built files
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

// In development mode, let Vite dev server handle assets (if needed)
if (process.env.NODE_ENV !== 'production') {
  // Proxy to Vite dev server (optional). For now, just serve static from src.
  app.use(express.static(path.resolve(__dirname, 'src')));
} else {
  // Serve built files from dist after `npm run build`
  app.use(express.static(path.resolve(__dirname, 'dist')));
}

app.get('*', (req, res) => {
  const indexPath = process.env.NODE_ENV !== 'production'
    ? path.resolve(__dirname, 'src', 'index.html')
    : path.resolve(__dirname, 'dist', 'index.html');
  res.sendFile(indexPath);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
