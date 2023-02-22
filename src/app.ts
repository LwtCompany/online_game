
import config from './config';
import express from 'express';
import Logger from './loaders/logger';
require("./models/user")
async function startServer() {
  try {
    const app = express();
 
    await require('./loaders').default({ expressApp: app });

    app.listen(config.port, () => {
      Logger.info(`
        ################################################
        🛡️  Server listening on port: ${config.port} 🛡️
        ################################################
      `);
    });
  } catch (error) {
    Logger.error(`Error with server ${error}`);
  }
}

startServer();