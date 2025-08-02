const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// Simple file tree endpoint for browsing repository structure
router.get('/', (req, res) => {
  const rootDir = path.resolve(__dirname, '..', '..', '..');
  const IGNORED = new Set(['node_modules', '.git']);

  function readTree(dir) {
    return fs.readdirSync(dir, { withFileTypes: true })
      .filter(entry => !IGNORED.has(entry.name))
      .map(entry => {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          return { name: entry.name, type: 'dir', children: readTree(fullPath) };
        }
        return { name: entry.name, type: 'file' };
      });
  }

  try {
    const tree = readTree(rootDir);
    res.json(tree);
  } catch (err) {
    res.status(500).json({ error: 'Unable to read repository' });
  }
});

module.exports = router;
