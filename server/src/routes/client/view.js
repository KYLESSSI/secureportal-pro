const express = require('express');

const router = express.Router();

// GET /api/client/view
router.get('/', (req, res) => {
  // TODO: return data specific to the logged-in client
  res.json({ message: 'Client portal data placeholder' });
});

module.exports = router;
