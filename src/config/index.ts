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
}
  