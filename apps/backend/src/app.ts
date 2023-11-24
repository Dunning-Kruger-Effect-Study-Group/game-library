import express = require('express');
import cors = require('cors');
import { initRoutes } from './router/router';
import { logger } from './util/logger';
import { ConnectToDB } from './db/connection';
import { errorHandler } from './util/errorHandler';

// INITIAL APP CONFIG
export const app = express();

// Middlewares
app.use(cors());
app.use(express.json({}));
logger(app);

// Mongoose
ConnectToDB();

// Routes
initRoutes(app);
app.get('/', (req, res) => {
  res.status(200);
  res.json({ message: 'ping' });
});

// Error handler
errorHandler(app);
