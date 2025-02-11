const express = require('express');
const router = express.Router();

// Example route
router.get('/login', (req, res) => {
  res.send('Spotify login route');
});

module.exports = router;
