import expressLoader from './express';
import Logger from './logger';
import mysqlLoader from './mysql';
export default async ({ expressApp }) => {
  const mysqlConnection = await mysqlLoader();

  try {
   await mysqlConnection.authenticate();
   Logger.info('✌️ DB loaded and connected!');
  } catch (error) {
    Logger.error(':( DB disconnected!', {error});
  }

  expressLoader({ app: expressApp });
  Logger.info('✌️ Express loaded');
};