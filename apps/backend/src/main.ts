import express = require('express');
import cors = require('cors');
import { initRoutes } from './router/router';
import { logger } from './util/logger';
import { ConnectToDB } from './db/connection';

function init() {
  // INITIAL APP CONFIG
  const app = express();
  const port = process.env.PORT || 8080;

  console.log(process.env.MONGODB_CONNECTION)

  // Middlewares
  app.use(cors());
  logger(app);

  // Mongoose
  ConnectToDB();

  // Routes
  initRoutes(app);

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
}
init();
