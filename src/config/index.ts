import {config} from 'dotenv';

const envFound = config();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';


if (envFound.error) {
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
    port: process.env.PORT,
    projectStatus: process.env.NODE_ENV,
    api: {
        prefix: '/api',
    },
    database_name: process.env.DATABASE_NAME,
    database_dialect: process.env.DATABASE_DIALECT,
    database_password: process.env.DATABASE_PASSWORD || "",
    database_host: process.env.DATABASE_HOST,
    database_login: process.env.DATABASE_LOGIN
}
  