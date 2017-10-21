/**
 * System imports
 */
import dotenv from 'dotenv';

/**
 * Load variables from .env file to process.env
 */
dotenv.load();

/**
 * Database connections configuration
 */
export default {
    $filter: 'dbConnection',
    'mongodb': {
        connection: process.env.MONGODB_CONNECTION,
        host: process.env.MONGODB_HOST,
        port: process.env.MONGODB_PORT,
        dbName: process.env.MONGODB_DATABASE
    },
    $default: {
        connection: process.env.MONGODB_CONNECTION,
        host: process.env.MONGODB_HOST,
        port: process.env.MONGODB_PORT,
        dbName: process.env.MONGODB_DATABASE
    }
}