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
    appUrl: process.env.APP_URL,
    port: process.env.APP_PORT
}