/**
 * System imports
 */
import dotenv from 'dotenv';

/**
 * Load variables from .env file to process.env
 */
dotenv.load();

/**
 * Application config
 */
export default {
    host: process.env.HOST,
    port: process.env.APP_PORT
}