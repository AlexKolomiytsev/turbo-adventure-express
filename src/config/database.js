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
    mongo: {
        dbConnection: process.env.MONGODB_CONNECTION,
        dbHost: process.env.MONGODB_HOST,
        dbPort: process.env.MONGODB_PORT,
        dbDatabase: process.env.MONGODB_DATABASE
    }
}