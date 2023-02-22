import { Sequelize } from 'sequelize';
import config from '../config/index';


export default  () => {
  const sequelize = new Sequelize(config.database_name, config.database_dialect, config.database_password, {
    host: config.database_host,
    dialect: 'postgres',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });

  return sequelize
};

