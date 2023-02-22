import expressLoader from './express';
import Logger from './logger';
import postgressqlLoader from './postgressql';
export default async ({ expressApp }) => {
  const postgressqlConnection = await postgressqlLoader();

  try {
 
   await postgressqlConnection.authenticate();
   Logger.info('✌️ DB loaded and connected!');
  } catch (error) {
    Logger.error(':( DB disconnected!');
  }

  expressLoader({ app: expressApp });
  Logger.info('✌️ Express loaded');
};