import express = require('express');
import cors = require('cors');
import { initRoutes } from './router/router';
import { logger } from './util/logger';
import { ConnectToDB } from './db/connection';
import { errorHandler } from './util/errorHandler';

function init() {
  // INITIAL APP CONFIG
  const app = express();
  const port = process.env.PORT || 8080;

  console.log(process.env.MONGODB_CONNECTION)

  // Middlewares
  app.use(cors());
  app.use(express.json({}))
  logger(app);

  // Mongoose
  ConnectToDB();

  // Routes
  initRoutes(app);

  // Error handler
  errorHandler(app)

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
}
init();
