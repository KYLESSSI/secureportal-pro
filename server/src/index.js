const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const adminClientRoutes = require('./routes/admin/clients');
const clientViewRoutes = require('./routes/client/view');
const repoRoutes = require('./routes/repo');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

// JWT authentication middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET || 'changeme', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Role-based guard
function requireRole(role) {
  return (req, res, next) => {
    if (req.user?.role !== role) return res.sendStatus(403);
    next();
  };
}

app.use('/api/auth', authRoutes);
app.use('/api/admin/clients', authenticateToken, requireRole('admin'), adminClientRoutes);
app.use('/api/client/view', authenticateToken, requireRole('client'), clientViewRoutes);
app.use('/repo', repoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
