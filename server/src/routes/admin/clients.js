const express = require('express');

const router = express.Router();

// GET /api/admin/clients
router.get('/', (req, res) => {
  // TODO: fetch clients from database
  res.json([{ id: 1, name: 'Example Client' }]);
});

module.exports = router;
