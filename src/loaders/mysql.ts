import { Sequelize } from 'sequelize';
import config from '../config/index';
import mysql2 from 'mysql2';

export default  () => {
  const sequelize = new Sequelize(config.database_name, config.database_login, config.database_password, {
    host: config.database_host,
    dialect: 'mysql',
    logging: false,
    dialectModule: mysql2,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });

  return sequelize
};

